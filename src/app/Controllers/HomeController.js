const Product = require('../Model/Product')

class HomeController {
    //get /home
    async home(req, res) {
       
            try {
              const Products = await Product.find({});
              const UIProducts = Products.map(Products => Products.toObject())
              res.render('home', { Products: UIProducts });
            } catch (error) {
              res.status(400).json({ err: "ERROR!!!" });
            }
          

            
    
        // res.render('home')
    }
}

module.exports = new HomeController