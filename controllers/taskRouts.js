const express = require('express');
const router = express.Router();
const Tasks = require('../models/tasks')

router.get('/:id', Tasks.getUserTasksAndTotals)

module.exports = router