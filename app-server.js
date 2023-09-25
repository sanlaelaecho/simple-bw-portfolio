const express = require('express')
const app = express()
const path = require('path')
const favicon = require('server-favicon')
const morgan = require('morgan')

app.use(express.json()) // req.body
app.use((req, res, next) => {
    res.locals.data = {}
    next()
})
app.use(logger('dev'))
app.use(favicon(path.join(__dirname, 'public', 'img','logo.png')))
app.use(express.static(path.join(__dirname, 'public')))

app.use('/api/home', require('./routes/api/home'))
app.use('/api/projects', require('./routes/api/projects'))

app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

module.exports = app