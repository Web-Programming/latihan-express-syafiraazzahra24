var express = require('express');
//letakkan di bawah var app = express();
var cors = require('cors');
app.use(cors())
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

const ctrlAuth = require('../controllers/controllerAuth');
router.post('/register', ctrlAuth.register);
router.post('/login', ctrlAuth.login);


module.exports = router;
