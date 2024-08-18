const express = require('express');
const router = express.Router();
const Tasks = require('../models/tasks')

router.get('/:id', Tasks.getUserTasksAndTotals)
router.post('/', Tasks.addTask)

module.exports = router