const express = require('express');

const Projects = require('./projects-model.js');

const router = express.Router();

router.get('/resources', (req, res) => {
  Projects.getResources()
    .then(resources => {
      console.log(resources)
      res.status(200).json(resources)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({message: 'the server encountered an issue completing your request'})
    })
})

router.get('/projects', (req, res) => {
  Projects.getProjects()
    .then(projects => {
      console.log(projects)
      res.status(200).json(projects)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({message: 'the server encountered an issue completing your request'})
    })
})

router.get('/tasks', (req, res) => {
  Projects.getTasks()
    .then(tasks => {
      console.log(tasks)
      res.status(200).json(tasks)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({message: 'the server encountered an issue completing your request'})
    })
})

router.post('/resources', (req, res) => {
  const newResource = req.body;
  
  Projects.addResource(newResource)
    .then(newResource => {
      console.log(newResource)
      res.status(201).json({message: `new resource created with id: ${newResource}`})
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({message: 'the server encountered an issue adding a new resource'})
    })
})

router.post('/projects', (req, res) => {
  const newProject = req.body;
  
  Projects.addProject(newProject)
    .then(newProject => {
      console.log(newProject)
      res.status(201).json({message: `new Project created with id: ${newProject}`})
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({message: 'the server encountered an issue adding a new project'})
    })
})

router.post('/tasks', (req, res) => {
  const newTask = req.body;
  
  Projects.addTask(newTask)
    .then(newTask => {
      console.log(newTask)
      res.status(201).json({message: `new Project created with id: ${newTask}`})
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({message: 'the server encountered an issue adding a new task'})
    })
})

module.exports = router;