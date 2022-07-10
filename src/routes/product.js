const router = require('express').Router();

const {
    HttpCreateProduct,
    HttpGetAllProducts,
    HttpEditProduct,
    HttpDeleteProduct,
    HttpGetProduct
} = require('../controllers/products');

router.route('/products').post(HttpCreateProduct).get(HttpGetAllProducts)

router.route('/products/:Id').get(HttpGetProduct).patch(HttpEditProduct).delete(HttpDeleteProduct)

module.exports=router