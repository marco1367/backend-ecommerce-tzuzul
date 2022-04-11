const { user } = require('pg/lib/defaults');
const { User, Rolle } = require('../db');
const bcrypt = require('bcrypt');


//(POST) FORMULARIO PARA CREAR UN "USER":
//resibimos el username, email y pasword por body y con esos datos,
//creamos un usuario en la tabla User de la DB con el rol de "user".
async function PostCreateAccount(req, res, next) {
    console.log(req.body);//-----
    console.log(req.file);//-----
    const { username, email, hashedPassword} = req.body;

    //FALTA VALIDAR LOS CAMPOS username Y email ------------------------------------------
    if (!username || !email || !hashedPassword) {
        return res.status(404).send({messenge: 'todos los campos son obligatorios'});
    }

    let messenge = {
        username_exist: false,
        email_exist: false,
        newUser: false,
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
            //buscamos el id del roll user para hacer lugo la vinculacion:
            const rolle_response = await Rolle.findOne({
                where:{
                    name: 'user',
                }
            })            

            if (rolle_response) {
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
                    //vinculamos usuario y roll:
                    await user_result[0].setRolle(rolle_response);
                    messenge.newUser = true;
                }
            }

        }

        return res.status(200).json(messenge);


    } catch (error) {
        return res.status(400).json({Message: 'Upss, algo pasó!. Intente nuevamente en unos minutos o con otros valores. '})
    }
};

module.exports = {
    PostCreateAccount,
}