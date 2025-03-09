// index.js in the backend folder

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./db'); // Imports db.js for database connection
const routes = require('./server'); // Imports CRUD routes

// Create an instance of Express
const app = express();

// Middleware setup
app.use(cors()); // Enables CORS
app.use(bodyParser.json()); // Parse JSON bodies

// Set up routes with '/api' prefix
app.use('/api', routes); // All API routes will be prefixed with /api

// Start the server on port 5000
app.listen(5000, () => {
   console.log("Server running on http://localhost:5000");
});
