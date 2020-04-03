const mysql = require('mysql');

const dbPool = mysql.createPool({
	port: '3306',
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'aura',
})

module.exports = dbPool;
