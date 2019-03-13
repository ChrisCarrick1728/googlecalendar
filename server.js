var express = require('express')
require('dotenv').config()
const connectionString = process.env.DATABASE_URL
const { Pool, Client } = require('pg')
const pool = new Pool({connectionString: connectionString})

express()
    .get('/', (req, res) => {
        console.log(connectionString)
        res.write("Path: /")
        res.end();
    })
    .listen(8000, () => console.log('Listening on port: 8000'))
