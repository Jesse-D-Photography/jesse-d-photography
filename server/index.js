// Loading .ENV
require('dotenv').config({});
// console.log(process.env)

const express = require('express')
const app = express()
const cors = require('cors')
const routes = require('./routes');
const sequelize = require('./config/connection');

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(routes);



sequelize.sync({ force: false }).then(() => {
	app.listen(PORT, () => console.log('Now listening'));
});


// Only needed to test DB connection when server comes up for the first time
// const db = mysql.createConnection({
// 	host: 'localhost',
// 	user: 'root',
// 	database: 'jesseD',
// 	password: '',
// })

// db.query('SELECT * FROM `photos`', function (err, results, fields) {
// 	console.log(results) // results contains rows returned by server
// 	console.log(fields) // fields contains extra meta data about results, if available
// })

// .ENV SET UP
// const app = require('http').createServer((req, res) => res.send('Ahoy!'));
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
	console.log(`Server is listening on port ${PORT}`);
});

// OLD
// Starts Node Server
// app.listen(3001, () => {
// 	console.log('server running')
// })

//default home path will just return SQL command to json data on backend.
// app.get('/', async (req, res) => {
// 	const db = require('mysql2/promise')
// 	const connection = await db.createConnection({
// 		host: 'localhost',
// 		user: 'root',
// 		password: 'password',
// 		database: 'jesseD'
// 	})
// 	let [rows, fields] = await connection.execute('SELECT * FROM `photos`')
// 	res.send(rows)
// 	// console.log(data)
// })

// app.use((err, req, res, next) => {
// 	if (process.env.NODE_ENV !== 'test') console.error(err.stack)
// 	res.status(err.status || 500).send(err.message || 'Internal server error')
// })
