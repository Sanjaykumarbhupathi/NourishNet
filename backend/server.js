// server.js
const express = require('express');
const connectDB = require('./config/connect');
require('dotenv').config();
const { signup, login,getAllVolunteers, getAllDonors, getAllAdmins,getAdminsCount,getDonorsCount,getVolunteersCount,deleteVolunteer,deleteDonor,deleteAdmin,getUserById,updateUserById} = require('./api/authController');
const {submitDonation, getDonationsByUserCount,
  getUnprocessedDonationsCountbyUser,
  getDonationsToAssignCountbyUser,
  getUncollectedDonationsCountbyUser,getcollectedDonationsCountbyUser, getPendingDonationsbyUser,deleteDonationById, getPreviousDonations, getUnprocessedDonationsCount, getUncollectedDonationsCount, getcollectedDonationsCount, getPendingDonations, getRejectedDonations, getPreviousDonationsforAdmin, acceptDonation, rejectDonation, getPendingDonationsforAdmin, ReturnPendingDonation, volunteers, AssignVolunteer, getPendingCollectionsForVolunteer, collectDonation, getPreviousCollectionsForVolunteer, countUnprocessedDonationsByUser, countProcessedDonationsByUser,distributebyvolunteer, distributeDonation, deletdonationautomate}=require('./api/DonationController');
const cors = require('cors');

const app = express();

app.use(cors());

app.use(express.json());
connectDB();

app.get('/', (req, res) => {
  res.send('API is running...');
});

// Registration route
app.post('/signup', signup);

// Login route
app.post('/login', login);
// contact Route

app.get('/volunteers', getAllVolunteers);

app.get('/donors', getAllDonors);

app.get('/admins', getAllAdmins);

app.get('/volunteers/count', getVolunteersCount);

// Get count of donors
app.get('/donors/count', getDonorsCount);

// Get count of admins
app.get('/admins/count', getAdminsCount);

app.delete('/volunteers/:id', deleteVolunteer);

app.delete('/donors/:id', deleteDonor);

app.delete('/admins/:id', deleteAdmin);

app.get('/users/:id', getUserById);

// Update user by ID
app.put('/users/:id', updateUserById);

app.post('/donate',submitDonation);

app.get('/donate/count/byUser',getDonationsByUserCount);

app.get('/donate/count/toAssignbyUser',getDonationsToAssignCountbyUser);

app.get('/donate/count/unprocessedbyUser',getUnprocessedDonationsCountbyUser);

app.get('/donate/count/uncollectedbyUser',getUncollectedDonationsCountbyUser);

app.get('/donate/count/collectedbyUser',getcollectedDonationsCountbyUser);

app.get('/donate/pendingdonationsbyUser',getPendingDonationsbyUser);

app.delete('/donate/:id', deleteDonationById);

app.get('/donate/previousdonations',getPreviousDonations);

app.get('/donate/count/unprocessed',getUnprocessedDonationsCount);

app.get('/donate/count/uncollected',getUncollectedDonationsCount);

app.get('/donate/count/collected',getcollectedDonationsCount);

app.get('/donate/pendingdonations',getPendingDonations);

app.get('/donate/rejecteddonations',getRejectedDonations);

app.get('/donate/previousdonationsforadmin',getPreviousDonationsforAdmin);

app.get('/donate/pendingdonationsforadmin',getPendingDonationsforAdmin);

app.put('/donate/accept/:id', acceptDonation);
app.put('/donate/reject/:id', rejectDonation);

app.put('/donate/returnpending/:id', ReturnPendingDonation);

app.get('/user/volunteers',volunteers);

app.put('/donate/assignagent/:id',AssignVolunteer);

app.get('/donate/pendingCollectionsForVolunteer', getPendingCollectionsForVolunteer);

app.put('/donate/collectDonation/:id', collectDonation);

app.get('/donate/previousCollectionsForVolunteer', getPreviousCollectionsForVolunteer);

app.get('/donate/count/unprocessedbyUser', countUnprocessedDonationsByUser);
app.get('/donate/count/processedbyUser', countProcessedDonationsByUser);

app.put('/distributeDonation/:id', distributeDonation);

app.post('/donate/deletedonationautomate',deletdonationautomate);
const PORT = process.env.PORT;


app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
