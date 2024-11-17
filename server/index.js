const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors')
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const create = require('./routes/create');
const updateDetails = require('./routes/updateDetails');
const sendverificationurl = require('./routes/send-verification-url');
const verify = require('./routes/verify');
const login = require('./routes/login');
const userInfo = require('./routes/userInfo');
const JobPostingDetails = require('./routes/jobPostingDetails');
const JobOpenings = require('./routes/jobsOpenings');
const JobOpenings2 = require('./routes/jobOpenings2');
const ApplyJob = require('./routes/applyJob');
const sendOTP = require('./routes/sendOTP');
const otpVerification = require('./routes/otpVerification');
const createUploadsDirectory = require('./createUploadsDirectory');
const path = require('path')

// Create the "uploads" directory
createUploadsDirectory();

app.use(express.static(path.join(__dirname, '/client/build')));

  console.log('...........') 

  //sign up
  app.use('/create', create);

//update details

app.use('/updateDetails', updateDetails);

//send email
app.use('/send-verification-url', sendverificationurl);

app.use('/send-otp', sendOTP);

app.use('/verify-otp', otpVerification);

//email verification
app.use('/verify', verify);

//user login

app.use('/login',login);

//user Info
app.use('/userInfo',userInfo);

//jobPosting
app.use('/jobPostingDetails', JobPostingDetails);

//jobsOpenings
console.log('....jobs.......') 
app.use('/jobsOpenings', JobOpenings);
console.log('......jobs.....') 

app.use('/jobsOpenings2',JobOpenings2);

app.use('/applyJob', ApplyJob );
console.log('....jobsapply.......')


app.listen(5000, () => console.log('Server running on port 5000'));
