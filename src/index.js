const path = require("path")
const express = require("express")
const morgan = require("morgan")
const { engine } = require("express-handlebars")
const { log } = require("console")
const app = express()
const port = 5000;

//concect to db
const db = require('./config/db/index.js')
db.connect()

//import function controller
const HomeController = require('./app/Controllers/HomeController')
const Product = require("./app/Controllers/ProductController.js")
const ProductController = require("./app/Controllers/ProductController.js")

//static file
app.use(express.static(path.join(__dirname, 'public')))

//morgan
app.use(morgan('combined'))

//improt method BODY in express
app.use(express.urlencoded())//from
app.use(express.json()); //fetch, axios


//handlebar
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'resources/views'))
// console.log('PATH: ', path.join(__dirname, 'resources/views'))

//routes
app.get('/', HomeController.home)
app.get('/Product/:slug', ProductController.detail)

// console.log(req.query.q)

// app.get('/search/:slug', (req, res) => {
//   console.log(req.query.query)
//   res.render('searchdetail');
// })



app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})