const multer  = require('multer');
const upload = multer({ dest: 'src/public/uploads' });

module.exports = upload;