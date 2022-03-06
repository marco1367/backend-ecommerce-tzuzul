const { Router } = require('express');
const Products = require('./Products');
const CreateAccount = require('./CreateAccount');
const User = require('./Users');

const router = Router();

router.use('/products', Products);
router.use('/createaccount', CreateAccount);
router.use('/user', User);




module.exports = router;