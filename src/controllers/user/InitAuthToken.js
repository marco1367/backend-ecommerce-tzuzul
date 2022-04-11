require('dotenv').config();
const jwt = require('jsonwebtoken');
const {
    ACCES_TOKEN_SECRET, REFRESH_TOKEN_SECRET
} = process.env;


async function InitAuthToken(req, res, next) {
    console.log('headers: ', req.body.headers)
    const authHeader = req.body.headers.Authorization;
    const token = authHeader && authHeader.split(' ')[1];

    if (!token || token==='null' || token==='undefined') {
        return res.status(401).json({message:'No hay identidad de acceso'});
    }else{
        jwt.verify(token, ACCES_TOKEN_SECRET, (err, name)=>{
            if (err) {
                return res.status(403).json({
                    message: 'acceso denegado',
                });
            }
            return res.status(200).json({message: 'acceso confirmado'});
        });
    }
};

module.exports = {
    InitAuthToken,
}