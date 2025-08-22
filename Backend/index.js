const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const contactFormRoute = require('./src/routes/contactForm.js');
const demoFormRoute = require('./src/routes/demoForm.js');
const appointmentFormRoute = require('./src/routes/appointmentForm.js');

const app = express();
const PORT = process.env.PORT || 2000;

const corsOptions = {
  origin: process.env.FRONTEND_URL,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
};

// Middleware
app.use(cors(corsOptions));
app.use(bodyParser.json());

// API Routes
app.use('/api/contact', contactFormRoute);
app.use('/api/demo', demoFormRoute);
app.use('/api/appointment', appointmentFormRoute);

app.get('/', (req, res) => {
  res.send('Server is running');
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
