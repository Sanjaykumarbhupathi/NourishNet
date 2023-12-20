// authController.js
const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const signup = async (req, res) => {
  try {
    const { name, email, password, role, phoneNumber } = req.body;

    // Check if the user already exists
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user with the 'role' and 'phoneNumber' included
    const newUser = new User({ name, email, password: hashedPassword, role, phoneNumber });

    // Save the user to the database
    await newUser.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};
// Function to login a user
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find the user by email
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Compare the password
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Generate a JWT token
    const token = jwt.sign({ userId: user._id }, 'abc123', {
      expiresIn: '30d',
    });

    res.status(200).json({ user, role: user.role, token }); // Include 'token'
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};
// Function to get all volunteers
const getAllVolunteers = async (req, res) => {
  try {
    // Fetch all volunteers from the database
    const volunteers = await User.find({ role: 'volunteer' });

    res.status(200).json(volunteers);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

const getAllDonors = async (req, res) => {
  try {
    // Fetch all volunteers from the database
    const Donors = await User.find({ role: 'restaurant' });

    res.status(200).json(Donors);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

const getAllAdmins = async (req, res) => {
  try {
    // Fetch all volunteers from the database
    const Admins = await User.find({ role: 'admin' });

    res.status(200).json(Admins);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

const getVolunteersCount = async (req, res) => {
  try {
    // Count all volunteers in the database
    const count = await User.countDocuments({ role: 'volunteer' });

    res.status(200).json({ count });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

const getDonorsCount = async (req, res) => {
  try {
    // Count all donors in the database
    const count = await User.countDocuments({ role: 'restaurant' });

    res.status(200).json({ count });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

const getAdminsCount = async (req, res) => {
  try {
    // Count all admins in the database
    const count = await User.countDocuments({ role: 'admin' });

    res.status(200).json({ count });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

const deleteVolunteer = async (req, res) => {
  try {
    const { id } = req.params;
    // Assuming User model is used
    await User.findByIdAndDelete(id);
    res.status(200).json({ message: 'Volunteer deleted successfully' });
  } catch (error) {
    console.error('Error deleting volunteer:', error);
    res.status(500).json({ message: 'Server error' });
  }
};
const deleteDonor = async (req, res) => {
  try {
    const { id } = req.params;

    // Find the donor by ID
    const donor = await User.findById(id);

    if (!donor) {
      return res.status(404).json({ message: 'Donor not found' });
    }

    // Delete the donor from the database
    await User.findByIdAndDelete(id);

    res.status(200).json({ message: 'Donor deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

const deleteAdmin = async (req, res) => {
  try {
    const { id } = req.params;

    // Find the admin by ID
    const admin = await User.findById(id);

    if (!admin) {
      return res.status(404).json({ message: 'Admin not found' });
    }

    // Delete the admin from the database
    await User.findByIdAndDelete(id);

    res.status(200).json({ message: 'Admin deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};
const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Function to update user data by ID
const updateUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, password } = req.body;

    const user = await User.findById(id);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // If the password is provided, hash it before updating
    if (password) {
      const hashedPassword = await bcrypt.hash(password, 10);
      user.password = hashedPassword;
    }

    // Update other fields
    user.name = name || user.name;
    user.email = email || user.email;

    // Save the updated user to the database
    const updatedUser = await user.save();

    res.status(200).json(updatedUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};
module.exports = { signup, login,getUserById,updateUserById,getAllVolunteers,getAllDonors,getAllAdmins,getVolunteersCount,getAdminsCount,getDonorsCount,deleteVolunteer,deleteDonor,deleteAdmin};
