const { Router } = require('express');
const uplead = require('../meaddlewares/multerFIles')
const {PostCreateAccount} = require('../controllers/PostCreateAccount');
const multer  = require('multer');
const upload = multer({ dest: '../public/uploads' });
// const upload = require('../meaddlewares/multerFIles');
// const {GetAllProducts} = require('../controllers/GetAllProducts');
// const {GetProductDetail} = require('../controllers/GetProductDetail');

const router = Router();

router.post('/', upload.single('profileImage') ,PostCreateAccount);
    
module.exports = router;