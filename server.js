const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const mongoose = require ('mongoose');
const Port  = process.env.PORT || 3000;
const mongoXlsx = require('mongo-xlsx');

//const factory = require('./factory/factory');


// connect mongoose
  mongoose.connect('mongodb://localhost:27017/intranet' );
  // check for connection
    mongoose.connection.on('open', () => {
        console.log('connected to mongoose database');
    });

// routes routes
const users = require('./routes/users');    


// middle ware
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: false}));

// app.use(express.static(__dirname, "../dist/index.html"));


// routes
 app.use('/users', users);






  //  listen to server
app.listen(Port , () => {
    console.log('server running on  port ' + Port);
});
