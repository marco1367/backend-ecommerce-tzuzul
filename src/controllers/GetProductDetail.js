const { Products } = require('../db')

async function GetProductDetail(req, res, next) {

    const id = req.params.id;

    try {

        if (!id) {
            res.status(404).send({ message: 'el ID del producto es un parámetro requerido.' });
        }
        if (!Number(id)) {
            res.status(404).send({ message: 'El ID tiene que ser de tipo INTEGER.' });
        }
        const product = await Products.findByPk(id);
        if (!product) {
            res.status(505).send({ message: 'No se encontró producto con el ID proporcionado' });
        }
        res.status(200).json(product);

    } catch (error) {
        next(error);
    }

};

module.exports = {
    GetProductDetail,
}