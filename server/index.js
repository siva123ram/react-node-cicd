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

  console.log('...........') 

  //sign up
  app.use('/create', create);

//update details

app.use('/updateDetails', updateDetails);

//send email
app.use('/send-verification-url', sendverificationurl);





//email verification
app.use('/verify', verify);

//user login

app.use('/login',login);

//user Info
app.use('/userInfo',userInfo);

app.listen(5000, () => console.log('Server running on port 5000'));
