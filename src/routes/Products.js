const { Router } = require('express');
const {GetAllProducts} = require('../controllers/GetAllProducts');
const {GetProductDetail} = require('../controllers/GetProductDetail');

const router = Router();

router.get('/', GetAllProducts);
router.get('/:id', GetProductDetail);
    
module.exports = router;