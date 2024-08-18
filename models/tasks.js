const db = require('../db/db_connection');

/* *****************************************
             SQL File Retrive 
********************************************/
const path = require('path');
const QueryFile = require('pg-promise').QueryFile;

function sql(file) {
    const fullPath = path.join(__dirname, file); 
    return new QueryFile(fullPath, {minify: true});
}
const sqlNewTask = sql('../db/newTask.sql');


/* *****************************************
           Functions for Routes 
********************************************/

const getUserTasksAndTotals = (req, res) => {
    db.any('SELECT * FROM tasks WHERE user_id = $1', req.params.id)
    .then(data => {returnToals(req.params.id, data, res)})
    .catch(err => res.json({err, msg:"get req didnt pan out for the tasks"}))
}

const returnToals = (id, tasks, res) => { 
    db.any('SELECT * FROM totals WHERE user_id = $1', id)
    .then(data => {res.json({tasks: tasks, totals: data, msg: "we got the tasks and totals"})})
    .catch(err => res.json({err, msg:"get req didnt pan out for the totals"}))
 }

 const addTask = (req, res) => { 
    console.log(req.body)
    db.none(sqlNewTask, req.body)
    .then(data => {res.json({data, msg: "success adding task"})})
    .catch(err => {res.json({err, msg: "there was a error adding the new task"})})
  }


module.exports = {
    getUserTasksAndTotals,
    addTask
}