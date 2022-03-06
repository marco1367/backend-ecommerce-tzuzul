const { Router } = require('express');
const {LogIn} = require('../controllers/user/LogIn');

const router = Router();

router.post('/login', LogIn);
    
module.exports = router;