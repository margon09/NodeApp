const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const app = express()
const port = 8080

// express middleware
app.use(express.static('public'))
app.use('/css', express.static(__dirname + '/public/css'))
app.use('/js', express.static(__dirname + '/public/js'))
app.use('/img', express.static(__dirname + '/public/img'))

// set template engine
app.use(expressLayouts)
// change the layout.ejs to full-width.ejs
app.set('layout', './layouts/full-width')
app.set('view engine', 'ejs')

// routes
app.get('/', (req, res) => {
	res.render('index')
})
app.get('/node', (req, res) => {
	res.render('node')
})
app.get('/npm', (req, res) => {
	res.render('npm')
})
app.get('/rest', (req, res) => {
	res.render('rest')
})
app.get('/myJs', (req, res) => {
	res.render('myJs')
})



app.listen(port, (err) => {
	if (err)
		console.log(err)
	// console.log(`Listening to port ${port}...`)
	console.log('Listening to port', Number(port))
})