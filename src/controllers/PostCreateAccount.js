const { user } = require('pg/lib/defaults');
const { User } = require('../db');
const bcrypt = require('bcrypt');


async function PostCreateAccount(req, res, next) {
    const { username, email, hashedPassword } = req.body;

    //FALTA VALIDAR LOS CAMPOS username Y email ------------------------------------------
    if (!username || !email || !hashedPassword) {
        res.status(404).send({messenge: 'todos los campos son obligatorios'});
    }

    let messenge = {
        username_exist: false,
        email_exist: false,
        user: {
            newUser: false,
            user: null
        }
    }

    try {

        //comporbamos si existe un usuario con alguno de los parametros proporcionados:
        const user_username = await User.findOne({
            where: {
                username: username.toLowerCase()
            }
        });
        const user_email = await User.findOne({
            where: {
                email: email
            }
        });
        if (user_username !== null) {
            messenge.username_exist = true;
        }
        if (user_email !== null) {
            messenge.email_exist = true;
        }


        if (!messenge.username_exist && !messenge.email_exist) {
            //encriptacion de contraseña:
            const salt = await bcrypt.genSalt(10);
            const hashPasswiorBCrypt = await bcrypt.hash(hashedPassword, salt);
            //creamos el usuario (usamos findOrCreate metodo por las dudas):
            const user_result = await User.findOrCreate({
                where: {
                    username: username.toLowerCase(),
                    email: email,
                    hashedPassword: hashPasswiorBCrypt,
                }
            });
            if (user_result[1]) {
                messenge.user.newUser = true;
                messenge.user.user = user_result[0];
            }
        }

        res.status(200).json(messenge);


    } catch (error) {
        next(error);
    }
};

module.exports = {
    PostCreateAccount,
}