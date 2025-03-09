// routes.js

const express = require('express');
const { Lesson } = require('./db');  // Import the Lesson model
const router = express.Router();

// Get all lessons
router.get('/lessons', async (req, res) => {
  try {
    const lessons = await Lesson.findAll();
    res.status(200).json(lessons);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching lessons', error: err });
  }
});

// Create a new lesson
router.post('/lessons', async (req, res) => {
  const { title, description } = req.body;
  try {
    const newLesson = await Lesson.create({ title, description });
    res.status(201).json(newLesson);
  } catch (err) {
    res.status(500).json({ message: 'Error adding lesson', error: err });
  }
});

module.exports = router;
