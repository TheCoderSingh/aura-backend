// NPM Node Modules
const express = require('express');
const dbPool = require('./dbcon');

const app = express();

const cors = require('cors');

app.use(cors());

app.get('/api/countries', (req, res) => {
	dbPool.query('SELECT * FROM countries', req.params.id, (error, result) => {
		if (error)
			console.log(error);

		res.send(result);
	});
});

app.get('/api/states/', (req, res) => {
	dbPool.query('SELECT * FROM states', req.params.id, (error, result) => {
		if (error)
			console.log("Error: " + error);

		res.send(result);
	});
});

app.get('/api/states/:id', (req, res) => {
	dbPool.query('SELECT * FROM states WHERE COUNTRY_ID = ?', req.params.id, (error, result) => {
		if (error)
			console.log("Error: " + error);

		res.send(result);
	});
});

app.get('/api/cities/:id', (req, res) => {
	dbPool.query('SELECT * FROM cities WHERE state_id = ?', req.params.id, (error, result) => {
		if (error)
			console.log("Error: " + error);

		res.send(result);
	});
});

app.get('/api/precautions', (req, res) => {
	dbPool.query('SELECT * FROM precautions', req.params.id, (error, result) => {
		if (error)
			console.log(error);

		res.send(result);
	});
});

app.get('/api/carryons', (req, res) => {
	dbPool.query('SELECT * FROM carryons', req.params.id, (error, result) => {
		if (error)
			console.log(error);

		res.send(result);
	});
});

app.listen(3002, () => {
	console.log('Server is up on port 3002');
});
