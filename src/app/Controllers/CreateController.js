const Product = require('../Model/Product');
// const multer = require('multer');

// const storage = multer.diskStorage({
//   destination: './public/images/',
//   filename: (req, file, cb) => {
//     cb(null, file.originalname);
//   },
// });

// const upload = multer({ storage: storage }).single('image_url');

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
      // POST /create/:slug
      post(req, res) {
        try {
          const product = new Product(req.body)
          product.save();
           res.redirect('/trangchu')
        } catch (error) {
          res.status(400).json({ err: "ERROR!!!" });
        }
      }
}


module.exports = new CreateController();
