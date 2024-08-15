const db = require('../db/db_connection');




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


module.exports = {
    getUserTasksAndTotals
}