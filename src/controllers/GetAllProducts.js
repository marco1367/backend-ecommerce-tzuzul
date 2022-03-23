const {Products} = require('../db')

async function GetAllProducts(req,res,next){
    try {
        const products = await Products.findAll();
        res.status(200).json(products);

    } catch (error) {
        next(error);
    }      
};

module.exports = {
    GetAllProducts,
}