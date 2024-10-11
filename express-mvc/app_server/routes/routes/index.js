var express = require('express');
var router = express.Router();

const mainController = require(".../controllers/main")

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

//buat router ke halaman kontak
router.get("/kontak", mainController.kontak);

module.exports = router;
