import express from 'express';
import Sequelize  from 'sequelize';
import mysql from 'mysql2';

const app = express();

app.get('/', (req, res) => {
	res.send('Hello world, this is graphql api.');
});

app.listen(3000, () =>{
	console.log('Server Running at port 3000');
});