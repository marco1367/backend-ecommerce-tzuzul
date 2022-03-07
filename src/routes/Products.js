const { Router } = require('express');
const {GetAllProducts} = require('../controllers/GetAllProducts');
const {GetProductDetail} = require('../controllers/GetProductDetail');
const {Auth} = require('../meaddlewares/authentication');

const router = Router();

router.get('/', Auth, GetAllProducts);
router.get('/:id', GetProductDetail);
    
module.exports = router;