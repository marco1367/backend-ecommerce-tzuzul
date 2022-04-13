const { Router } = require('express');
const uplead = require('../meaddlewares/multerFIles')
const {PostCreateAccount} = require('../controllers/PostCreateAccount');
const multer  = require('multer');
// const upload = multer({ dest: '../images/uploads' });


const router = Router();

// router.post('/', upload.single('profileImage') ,PostCreateAccount);
router.post('/',PostCreateAccount);

    
module.exports = router;