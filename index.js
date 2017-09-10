import express from 'express';
import Sequelize  from 'sequelize';
import mysql from 'mysql2';

const app = express();

app.get('/', (req, res) => {
	res.send('Hello world, this is graphql api.');
});

var models = require('./server/models/');
models.sequelize
  .authenticate()
  .then(function () {
    console.log('Connection successful');
  })
  .catch(function(error) {
    console.log("Error creating connection:", error);
  });

app.listen(3000, () =>{
	console.log('Server Running at port 3000');
});