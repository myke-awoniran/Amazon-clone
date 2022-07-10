const Product = require('../database/models/product')
const factory=require('../utils/factory')

exports.HttpCreateProduct = factory.create(Product);

exports.HttpDeleteProduct = factory.deleteOne(Product);

exports.HttpEditProduct = factory.editOne(Product);

exports.HttpGetProduct = factory.find(Product, 1);

exports.HttpGetAllProducts = factory.find(Product);



