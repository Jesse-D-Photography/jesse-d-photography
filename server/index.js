require('dotenv').config({});

const express = require('express')
const app = express()
const cors = require('cors')
const sequelize = require('../connection')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const PORT = process.env.PORT || 3001;

sequelize.sync({ force: false }).then(() => {
	app.listen(PORT, () => console.log('Now listening'));
});


