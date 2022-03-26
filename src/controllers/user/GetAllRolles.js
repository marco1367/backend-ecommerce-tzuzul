const {Rolle} = require('../../db');

async function GetAllRolles(req, res, next) {
    try {
        const rolles = await Rolle.findAll();
        return res.status(200).json(rolles);
    } catch (error) {
        next(error);
    }
};

module.exports = {
    GetAllRolles,
}