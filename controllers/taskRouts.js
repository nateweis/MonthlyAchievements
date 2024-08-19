const express = require('express');
const router = express.Router();
const Tasks = require('../models/tasks')

router.get('/:id', Tasks.getUserTasksAndTotals)
router.post('/', Tasks.addTask)
router.put('/', Tasks.updateTasks)
router.put('/total', Tasks.updateTotal)
router.delete('/:id', Tasks.deleteTask)

module.exports = router