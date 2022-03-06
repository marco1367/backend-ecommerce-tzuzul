const { User } = require('../../db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


async function LogIn(req, res, next) {
    try {
        const { username, hashedPassword } = req.body;
        const response_user = await User.findAll({
            where: {
                username: username.toLowerCase(),
            },
            attributes: ['username', 'hashedPassword', 'id_user', 'email']
        });

        if (response_user.length > 0) {
            const pass_compare = await bcrypt.compare(hashedPassword, response_user[0].dataValues.hashedPassword);

            if (pass_compare) {
                jwt.sign(
                    { name: response_user[0].dataValues.username },
                    response_user[0].dataValues.hashedPassword,
                    // { algorithm: 'RS256' },
                    function (err, token) {
                        console.log(token);
                        res.status(200).json({
                            message: 'acceso confirmado',
                            token: token,
                            user: {
                                id_user: response_user[0].dataValues.id_user,
                                username: response_user[0].dataValues.username,
                                email: response_user[0].dataValues.email,
                            }
                        })
                    }
                );
            } else {
                res.status(401).json({ message: 'contraseña incorrecta' })
            }

        } else {
            res.status(401).json({ message: 'nombre de usuario incorrecto' });
        }

    } catch (error) {
        next(error);
    }
};

module.exports = {
    LogIn,
}