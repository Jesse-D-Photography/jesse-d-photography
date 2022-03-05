const express = require('express')
const app = express()
const mysql = require('mysql2')
const cors = require('cors')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

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

// Starts Node Server
app.listen(3001, () => {
	console.log('server running')
})

//default home path will just return SQL command to json data on backend.
app.get('/', async (req, res) => {
	const db = require('mysql2/promise')
	const connection = await db.createConnection({
		host: 'localhost',
		user: 'root',
		database: 'jesseD',
	})
	let [rows, fields] = await connection.execute('SELECT * FROM `photos`')
	res.send(rows)
	// console.log(data)
})

app.use((err, req, res, next) => {
	if (process.env.NODE_ENV !== 'test') console.error(err.stack)
	res.status(err.status || 500).send(err.message || 'Internal server error')
})
