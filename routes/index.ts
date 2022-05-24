var express:any = require('express');
var router:any = express.Router();
var path:any = require('node:path');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.sendFile(path.join(__dirname, 'public_html', 'index.html'));
});

module.exports = router;
