const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose'); //mongoose helps us to connect to our mongoDB Database

require('dotenv').config(); //configures so that we can have our env variables configured

const app = express(); //to create express server
const port = process.env.PORT || 5000;

//middlewares
app.use(cors());  //cors middleware
app.use(express.json()); //allows us to parse JSON

const uri = process.env.ATLAS_URI; //database uri: we get this from mongoDB Atlas Dashboard

/* about flags
    useNewUrlParser :true //thats added becoz the mongoDB  nodejs driver rewrote the tool
    that uses to parse mongoDB connection string.
    useCreateIndex
*/
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})

//this line starts the server
app.listen(port, () => {
    console.log(`Server is running on port : ${port}`); //template literal string
});

//to start server command is nodemon server