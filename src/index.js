const path = require("path")
const express = require("express")
const morgan = require("morgan")
const { engine } = require("express-handlebars")
const app = express()
const port = 5000;

// Sử dụng body-parser để đọc dữ liệu từ form 
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }))
//req.body

//Kết nối tới cơ sở dữ liệu từ file config 
const db = require('./config/db/index.js')
db.connect()

//Gọi các hàm Controller vào file index.js
const HomeController = require('./app/Controllers/HomeController')
const Product = require("./app/Controllers/ProductController.js")
const ProductController = require("./app/Controllers/ProductController.js")
const CreateController = require("./app/Controllers/CreateController.js")
const SearchController = require("./app/Controllers/SearchController.js")
const OrderController = require("./app/Controllers/OrderController.js")
const LoginController = require("./app/Controllers/LoginController.js")
const Login = require("./app/Model/Login.js")

//Sử dụng middleware express.static để cung cấp truy cập cho các tệp tĩnh
app.use(express.static(path.join(__dirname, 'public')))

//Middleware morgan để tạo logs về các yêu cầu đến server
app.use(morgan('combined'))

//hiết lập các biến cục bộ, next() để chuyển sang chuỗi xử lí tiếp theo
app.use(function (req, res, next) {
  res.locals.showHeader = true;
  res.locals.showFooter = true;
  res.locals.showBody = true;
  next();
});


app.engine('handlebars', engine())
app.set('view engine', 'handlebars')
app.set('views', path.join(__dirname, 'resources/views'))


//routes

// Thêm hàm middleware để kiểm tra xác thực
function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/login');
}
app.get('/', (req, res) => {
  res.render('login', { showHeader: false, showFooter: false });
});

app.get('/trangchu', HomeController.home)
app.post('/login/check', LoginController.check);
app.get('/create', CreateController.create)
app.get('/search', SearchController.search)
app.get('/Product/:slug', ProductController.detail)
app.get('/Product/detail/:slug/buy', ProductController.buy);
app.post('/create/post', CreateController.post)
app.post('/order', OrderController.order)



app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})