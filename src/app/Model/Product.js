const mongoose = require('mongoose')
const Schema = mongoose.Schema
const slug = require('mongoose-slug-generator')
//https://www.npmjs.com/package/mongoose-slug-generator

mongoose.plugin(slug);

const Product = new Schema({
    name: {type: String, require: true},
    descripstion: {type: String, require: true},
    price: {type: Number, require: true},
    image_url: {type: String, require: true},
    slug: {type: String, slug: 'name', unique: true}
}, {timestamps: true})
//   https://github.com/Automattic/mongoose


module.exports = mongoose.model('Product', Product);