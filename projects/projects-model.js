const db = require('../data/db-config.js');

module.exports = {
  getResources,
  addResource,
  getProjects,
  addProject,
  getTasks,
  addTask,
}

function getResources() {
  return db('resources')
}

function addResource(resourceData) {
  return db('resources').insert(resourceData)
}

function getProjects() {
  return db('projects')
}

function addProject(ProjectData) {
  return db('projects').insert(ProjectData)
}

function getTasks() {
  return db('tasks')
}

function addTask(taskData) {
  return db('tasks').insert(taskData)
}