const express = require('express');
const cors = require('cors');
const app = express();

const port = process.env.PORT || 3004

app.use(cors());
app.use(express.json());
app.use(express.static('public'));


//const deckController = require('./controllers/deckRoutes');
//app.use('/deck', deckController)


app.listen(port, () => console.log(`Hidee Hoe im on port ${port}`))

/*
To Dos
------------
MVC:
. Connect data to DB
. Add / Edit / Remove Tasks
. Reset counters first day of month

Other Tasks: 
. Drop down letting you update the progress
. Second task list for just current month
. Second task list complete/uncomplete
. Auto uncomplete by end of month
. When adding to second task can choose from uncompleted instead of from scratch
. End of month if priority isnt hit from counter lose the difference in total 
. When priority hit turns green, when 10 days turns yellow, when 3 days red
. Slide up and down animation btween screens (display/add/edit)
. A page for things to purchase
. When something purchased it comes out of the total
. Make app look nice

Completed Tasks
----------------
. Display Tasks
. Display Total
. Button to make total and counter go up and remove
. Add Nav function to app

*/