const express = require('express')
const IndexRoutes = require('./routes/index.routes')

const app = express()

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

/* ROUTES */
app.use(IndexRoutes)

module.exports = app
