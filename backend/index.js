const express = require('express');
const cors = require('cors');
const db = require('./db'); // Import the bridge we just built
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json()); // Allows Express to read JSON from React

// --- ROUTES ---

// 1. GET all expenses (The one we will test first!)
app.get('/expenses', async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM expenses ORDER BY date_added DESC');
    res.json(result.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// 2. POST a new expense
app.post('/expenses', async (req, res) => {
  try {
    const { title, amount, category } = req.body;
    const newExpense = await db.query(
      'INSERT INTO expenses (title, amount, category) VALUES ($1, $2, $3) RETURNING *',
      [title, amount, category]
    );
    res.json(newExpense.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});