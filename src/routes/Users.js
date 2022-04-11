const { Router } = require('express');
const {LogIn} = require('../controllers/user/LogIn');
const {InitAuthToken} = require('../controllers/user/InitAuthToken');
const {GetAllRolles} = require('../controllers/user/GetAllRolles');

const router = Router();

router.post('/login', LogIn);
router.post('/initauthtoken', InitAuthToken);
router.get('/getallrolles', GetAllRolles);


module.exports = router;