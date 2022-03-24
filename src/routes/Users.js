const { Router } = require('express');
const {LogIn} = require('../controllers/user/LogIn');
const {InitAuthToken} = require('../controllers/user/InitAuthToken');

const router = Router();

router.post('/login', LogIn);
router.post('/initauthtoken', InitAuthToken);
    
module.exports = router;