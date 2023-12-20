// DonationController.js
const Donation = require('../models/Donation');
const User = require('../models/User');
const moment = require('moment');

const submitDonation = async (req, res) => {
    try {
      const formData = req.body;
  
      // Convert date and time strings to a JavaScript Date object using Moment.js
      formData.cookingDateTime = moment(`${formData.cookingDate} ${formData.cookingTime}`).toDate();
      formData.expiryDateTime = moment(`${formData.expiryDate} ${formData.expiryTime}`).toDate();
  
      // Remove the date and time strings from the formData
      delete formData.cookingDate;
      delete formData.cookingTime;
      delete formData.expiryDate;
      delete formData.expiryTime;
  
      const newDonation = new Donation(formData);
      await newDonation.save();
      res.status(201).json({ message: 'Food donation submitted successfully' });
    } catch (error) {
      console.error('Error submitting food donation:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };
  

// Function to get count of donations by a specific user
const getDonationsByUserCount = async (req, res) => {
    try {
      const userId = req.user?._id; // Adjust this based on your authentication setup
      const count = await Donation.countDocuments({ donor: userId });
      res.status(200).json({ count });
    } catch (error) {
      console.error('Error fetching donations by user count:', error);
      res.status(500).json({ message: 'Server error' });
    }
  };
  
  // Function to get count of unprocessed donations
  const getUnprocessedDonationsCountbyUser = async (req, res) => {
    try {
        const userId = req.user?._id;
      const count = await Donation.countDocuments({ status: 'pending',donor: userId });
      res.status(200).json({ count });
    } catch (error) {
      console.error('Error fetching unprocessed donations count:', error);
      res.status(500).json({ message: 'Server error' });
    }
  };
  
  // Function to get count of donations to be assigned
  const getDonationsToAssignCountbyUser = async (req, res) => {
    try {
        const userId = req.user?._id;
      const count = await Donation.countDocuments({ status: 'accepted',donor: userId });
      res.status(200).json({ count });
    } catch (error) {
      console.error('Error fetching donations to assign count:', error);
      res.status(500).json({ message: 'Server error' });
    }
  };
  
  // Function to get count of uncollected donations
  const getUncollectedDonationsCountbyUser = async (req, res) => {
    try {
        const userId = req.user?._id;
      const count = await Donation.countDocuments({ status: 'assigned',donor: userId });
      res.status(200).json({ count });
    } catch (error) {
      console.error('Error fetching uncollected donations count:', error);
      res.status(500).json({ message: 'Server error' });
    }
  };

  const getcollectedDonationsCountbyUser = async (req, res) => {
    try {
        const userId = req.user?._id;
      const count = await Donation.countDocuments({ status: 'collected',donor: userId });
      res.status(200).json({ count });
    } catch (error) {
      console.error('Error fetching uncollected donations count:', error);
      res.status(500).json({ message: 'Server error' });
    }
  };

  const getPendingDonationsbyUser = async (req, res) => {
    try {
        const userId = req.user?._id;
      // Assuming you have a field 'status' in your Donation model
      const pendingDonations = await Donation.find({ status: 'pending',donor: userId });
  
      res.status(200).json({ pendingDonations });
    } catch (error) {
      console.error('Error fetching pending donations:', error);
      res.status(500).json({ message: 'Server error' });
    }
  };

  const deleteDonationById = async (req, res) => {
    try {
      const donationId = req.params.id;
      await Donation.findByIdAndDelete(donationId);
      res.status(200).json({ message: 'Donation deleted successfully' });
    } catch (error) {
      console.error('Error deleting donation:', error);
      res.status(500).json({ message: 'Server error' });
    }
  };

  const getPreviousDonations = async (req, res) => {
    try {
      const userId = req.user?._id; // Adjust this based on your authentication setup
      const previousDonations = await Donation.find({ donor: userId, status: { $ne: 'Pending' } });
      res.status(200).json(previousDonations);
    } catch (error) {
      console.error('Error fetching previous donations:', error);
      res.status(500).json({ message: 'Server error' });
    }
  };

    // Function to get count of unprocessed donations
    const getUnprocessedDonationsCount = async (req, res) => {
      try {
        const count = await Donation.countDocuments({ status: 'pending'});
        res.status(200).json({ count });
      } catch (error) {
        console.error('Error fetching unprocessed donations count:', error);
        res.status(500).json({ message: 'Server error' });
      }
    };

    const getUncollectedDonationsCount = async (req, res) => {
      try {
        const count = await Donation.countDocuments({ status: 'assigned'});
        res.status(200).json({ count });
      } catch (error) {
        console.error('Error fetching uncollected donations count:', error);
        res.status(500).json({ message: 'Server error' });
      }
    };
    const getcollectedDonationsCount = async (req, res) => {
      try {
        const count = await Donation.countDocuments({ status: 'collected'});
        res.status(200).json({ count });
      } catch (error) {
        console.error('Error fetching uncollected donations count:', error);
        res.status(500).json({ message: 'Server error' });
      }
    };

    const getPendingDonations = async (req, res) => {
      try {
        const pendingDonations = await Donation.find({ status: 'Pending' });
        res.status(200).json(pendingDonations);
      } catch (error) {
        console.error('Error fetching pending donations:', error);
        res.status(500).json({ message: 'Server error' });
      }
    };

    const getRejectedDonations = async (req, res) => {
      try {
        const rejectedDonations = await Donation.find({ status: 'rejected' });
        res.status(200).json(rejectedDonations);
      } catch (error) {
        console.error('Error fetching rejected donations:', error);
        res.status(500).json({ message: 'Server error' });
      }
    };

    const getPreviousDonationsforAdmin = async (req, res) => {
      try {
        const previousDonations = await Donation.find({
          status: {$in: ['accepted','assigned', 'collected']}
        });
        res.status(200).json(previousDonations);
      } catch (error) {
        console.error('Error fetching previous donations:', error);
        res.status(500).json({ message: 'Server error' });
      }
    };
    const getPendingDonationsforAdmin = async (req, res) => {
      try {
        const previousDonations = await Donation.find({
          status: 'pending'
        });
        res.status(200).json(previousDonations);
      } catch (error) {
        console.error('Error fetching previous donations:', error);
        res.status(500).json({ message: 'Server error' });
      }
    };

    const acceptDonation = async (req, res) => {
      try {
        const donationId = req.params.id;
        const updatedDonation = await Donation.findByIdAndUpdate(
          donationId,
          { status: 'accepted' },
          { new: true }
        );
        res.status(200).json(updatedDonation);
      } catch (error) {
        console.error('Error accepting donation:', error);
        res.status(500).json({ message: 'Server error' });
      }
    };
    
    const rejectDonation = async (req, res) => {
      try {
        const donationId = req.params.id;
        const updatedDonation = await Donation.findByIdAndUpdate(
          donationId,
          { status: 'rejected' },
          { new: true }
        );
        res.status(200).json(updatedDonation);
      } catch (error) {
        console.error('Error rejecting donation:', error);
        res.status(500).json({ message: 'Server error' });
      }
    };

    const ReturnPendingDonation = async (req, res) => {
      try {
        const donationId = req.params.id;
        const updatedDonation = await Donation.findByIdAndUpdate(
          donationId,
          { status: 'pending' },
          { new: true }
        );
        res.status(200).json(updatedDonation);
      } catch (error) {
        console.error('Error accepting donation:', error);
        res.status(500).json({ message: 'Server error' });
      }
    };

    const volunteers=async(req,res)=>{
      try {
        const volunteers = await User.find({role: 'volunteer'});
        res.json(volunteers);
      } catch (error) {
        console.error('Error fetching volunteers:', error);
        res.status(500).json({ message: 'Server error' });
      }
    };
    const AssignVolunteer=async(req,res)=>{
      try {
        const donationId = req.params.id;
        const { assignedTo } = req.body;
        const updatedDonation = await Donation.findByIdAndUpdate(
          donationId,
          { assignedTo, status: 'assigned' },
          { new: true }
        );
        res.status(200).json(updatedDonation);
      } catch (error) {
        console.error('Error assigning agent:', error);
        res.status(500).json({ message: 'Server error' });
      }
    };

    const getPendingCollectionsForVolunteer = async (req, res) => {
      try {
        const pendingCollections = await Donation.find({ status: 'assigned'});
    
        res.status(200).json(pendingCollections);
      } catch (error) {
        console.error('Error fetching pending collections for volunteer:', error);
        res.status(500).json({ message: 'Server error' });
      }
    };

    const collectDonation = async (req, res) => {
      try {
        const donationId = req.params.id; // assuming the donation ID is in the route parameters
        const updatedDonation = await Donation.findByIdAndUpdate(
          donationId,
          { status: 'collected' },
          { new: true }
        );
    
        res.status(200).json(updatedDonation);
      } catch (error) {
        console.error('Error updating donation status:', error);
        res.status(500).json({ message: 'Server error' });
      }
    };

    const getPreviousCollectionsForVolunteer = async (req, res) => {
      try {
        const pendingCollections = await Donation.find({ status: 'collected'});
    
        res.status(200).json(pendingCollections);
      } catch (error) {
        console.error('Error fetching previous collections for volunteer:', error);
        res.status(500).json({ message: 'Server error' });
      }
    };

    const countUnprocessedDonationsByUser = async (req, res) => {
      try {
        const userId = req.user?._id; // Assuming you have user information in the request
        const count = await Donation.countDocuments({ assignedTo: userId, status: 'assigned' });
        res.status(200).json({ count });
      } catch (error) {
        console.error('Error counting unprocessed donations:', error);
        res.status(500).json({ message: 'Server error' });
      }
    };

    const countProcessedDonationsByUser = async (req, res) => {
      try {
        const userId = req.user?._id; // Assuming you have user information in the request
        const count = await Donation.countDocuments({ assignedTo: userId, status: 'collected' });
        res.status(200).json({ count });
      } catch (error) {
        console.error('Error counting processed donations:', error);
        res.status(500).json({ message: 'Server error' });
      }
    };
    const distributeDonation = async (req, res) => {
      try {
        const donationId = req.params.id; // assuming the donation ID is in the route parameters
        const updatedDonation = await Donation.findByIdAndUpdate(
          donationId,
          { status: 'distributed' },
          { new: true }
        );
    
        res.status(200).json(updatedDonation);
      } catch (error) {
        console.error('Error updating donation status:', error);
        res.status(500).json({ message: 'Server error' });
      }
    };

    const deletdonationautomate = async(req,res) =>{
      try{
        await Donation.deleteExpiredDonations();
        res.send('Expired donations deleted successfully.');
      } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Internal Server Error');
    }
  };
    
    
module.exports = {submitDonation,getDonationsByUserCount,
    getUnprocessedDonationsCountbyUser,
    getDonationsToAssignCountbyUser,
    getUncollectedDonationsCountbyUser,getcollectedDonationsCountbyUser,getPendingDonationsbyUser,deleteDonationById,getPreviousDonations,getUnprocessedDonationsCount,getUncollectedDonationsCount,getcollectedDonationsCount,getPendingDonations,getRejectedDonations,getPreviousDonationsforAdmin,getPendingDonationsforAdmin,acceptDonation,rejectDonation,ReturnPendingDonation,volunteers,AssignVolunteer,getPendingCollectionsForVolunteer,collectDonation,getPreviousCollectionsForVolunteer,countUnprocessedDonationsByUser,countProcessedDonationsByUser,distributeDonation,deletdonationautomate};