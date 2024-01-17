const Product = require('../Model/Product');
const multer = require('multer');

const storage = multer.diskStorage({
  destination: 'public/images/',
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage }).single('image_url');

class CreateController {
  // GET /create
  create(req, res) {
    try {
      res.render('create');
    } catch (error) {
      res.status(400).json({ err: "ERROR!!!" });
    }
  }

  // POST /create/:slug
  post(req, res) {
    try {
      upload(req, res, function (err) {
        if (err) {
          return res.status(500).json({ err: err.message });
        }

        // Tạo đối tượng Product từ dữ liệu form và đường dẫn ảnh
        const product = new Product({
          name: req.body.name,
          screen: req.body.screen,
          chip: req.body.chip,
          ram: req.body.ram,
          pin: req.body.pin,
          brand: req.body.brand,
          price: req.body.price,
          image_url: req.file ? `/public/images/${req.file.filename}` : '',
        });

        // Lưu vào MongoDB
        product.save();

        res.redirect('/trangchu');
      });
    } catch (error) {
      res.status(400).json({ err: "LỖI!!!" });
    }
  }
}

module.exports = new CreateController();