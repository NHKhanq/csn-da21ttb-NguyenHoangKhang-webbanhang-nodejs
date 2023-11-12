const Product = require('../Model/Product')

class HomeController {
    //get /home
    async home(req, res) {
       
            try {
              const Products = await Product.find({});
              res.json(Products);
            } catch (error) {
              res.status(400).json({ err: "ERROR!!!" });
            }
          

            name: "test"
    
        // res.render('home')
    }
}

module.exports = new HomeController