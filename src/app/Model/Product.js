const mongoose = require('mongoose')
const Schema = mongoose.Schema
const slug = require('mongoose-slug-updater')

mongoose.plugin(slug);

const Product = new Schema({
    name: {type: String, required: true},
    description: {type: String, required: true}, // Fixed the typo here
    price: {type: Number, required: true},
    image_url: {type: Buffer, required: true},
    slug: {type: String, slug: 'name', unique: true}
}, {timestamps: true})
//   https://github.com/Automattic/mongoose

module.exports = mongoose.model('Product', Product);