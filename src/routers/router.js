const version_1 = require('express').Router();
const productController=require('../routes/product')

version_1.use(productController)
// version_1.use()


module.exports=version_1