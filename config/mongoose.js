const mongoose = require('mongoose');

//connect to the database
mongoose.connect('mongodb://127.0.0.1/todolist_db');

//aquire connection(to check if succesfully conncected)
const db = mongoose.connection;

// in case of an error
db.on('error', console.log.bind(console,'error connecting to database'));

//if the connection is succcessfull
db.once('open', function(){
    console.log('succesfully connected to the database');
})