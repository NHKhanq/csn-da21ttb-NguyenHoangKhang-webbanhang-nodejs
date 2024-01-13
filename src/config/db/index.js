const mongoose = require('mongoose');
async function connect() {
    try {
        console.log(process.env.DB_ENDPOINT)
        await mongoose.connect(process.env.DB_ENDPOINT);
        console.log('connect successfully!')
    } catch (error) {
        console.log('connect fail!')
        
    }
}

module.exports = { connect }