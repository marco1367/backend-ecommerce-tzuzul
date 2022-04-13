const multer  = require('multer');
const upload = multer({ dest: 'src/images/uploads' });

module.exports = upload;