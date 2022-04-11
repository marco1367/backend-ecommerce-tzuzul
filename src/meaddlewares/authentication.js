require('dotenv').config();
const jwt = require('jsonwebtoken');
const {
    ACCES_TOKEN_SECRET, REFRESH_TOKEN_SECRET
} = process.env;


async function Auth(req, res, next) {

    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(' ')[1];

    if (!token || token==='null' || token==='undefined') {
        res.status(401).json({message:'No hay identidad de acceso'});
    }else{
        jwt.verify(token, ACCES_TOKEN_SECRET, (err, name)=>{
            if (err) {
                res.status(403).json({
                    message: 'acceso denegado',
                });
            }
            next();
        });
    }

};

module.exports = {
    Auth,
}