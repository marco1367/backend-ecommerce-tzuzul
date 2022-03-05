const { Router } = require('express');
const Products = require('./Products');
const CreateAccount = require('./CreateAccount');

const router = Router();

router.use('/products', Products);
router.use('/createaccount', CreateAccount);



module.exports = router;