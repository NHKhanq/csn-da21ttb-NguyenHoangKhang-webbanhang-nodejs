const Product = require('../Model/Product');

class ProductController {
  // GET /san-pham/:slug
  async detail(req, res) {
    try {
      const product = await Product.findOne({ slug: req.params.slug });
      res.render('detail', { productdetail: product.toObject() });
    } catch (error) {
      res.status(400).json({ err: "Error!!!" });
    }
  }

  
// GET /Product/detail/:slug/buy
async buy(req, res) {
  try {
    const product = await Product.findOne({ slug: req.params.slug });
    res.render('buy', {
    Product: product.toObject() 
    });
  } catch (error) {
    res.status(400).json({ err: "Error!!!" });
  }
}
}




module.exports = new ProductController();
