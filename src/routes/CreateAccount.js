const { Router } = require('express');
const {PostCreateAccount} = require('../controllers/PostCreateAccount');
// const {GetAllProducts} = require('../controllers/GetAllProducts');
// const {GetProductDetail} = require('../controllers/GetProductDetail');

const router = Router();

router.post('/', PostCreateAccount);
    
module.exports = router;