var express:any = require('express');
var router:any = express.Router();

/* GET home page. */
router.get('/', function (req:any, res:any, next:any) {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

module.exports = router;
