
async function Auth(req, res, next) {
    console.log(req.headers);
    next();
};

module.exports = {
    Auth,
}