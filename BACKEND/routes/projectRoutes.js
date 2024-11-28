const express = require('express');
const Project = require('../models/Project');
const router = express.Router();

// Get all projects
router.get('/', async (req, res) => {
  const projects = await Project.find();
  res.json(projects);
});

// Add a project (for admin purposes)
router.post('/', async (req, res) => {
  const newProject = new Project(req.body);
  await newProject.save();
  res.json({ message: 'Project added!' });
});

module.exports = router;
