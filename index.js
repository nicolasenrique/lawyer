require('dotenv').config();
const path = require('path');
const sgMail = require('@sendgrid/mail');
const express = require('express');
const app = express();

sgMail.setApiKey(process.env.SENDGRID_API_KEY);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, '/css/styles.css')));

app.route('/').get(function (req, res) {
	res.sendFile(path.join(__dirname, '/index.html'));
});

app.listen(3000, () => {
	console.log(`Listening on port 3000`);
});
