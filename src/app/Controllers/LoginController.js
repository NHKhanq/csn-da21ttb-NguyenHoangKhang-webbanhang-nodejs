const Login = require('../Model/Login')

class LoginController {
    //GET /home
    async login(req, res) {

      res.render('login');  
       
           
}
}
module.exports = new LoginController();