const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(cors()); // Enable CORS for all routes

// Use JSON middleware to automatically parse JSON
app.use(express.json());

// Define a route to serve your Obsidian data
app.get('/api/obsidian-data', (req, res) => {
  // TODO: Implement logic to serve Obsidian data
  res.json({ message: 'This will serve Obsidian data.' });
});

// Serve static files from the React app build directory
app.use(express.static(path.join(__dirname, '')));

// Handles any requests that don't match the ones above
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
