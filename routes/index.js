var express = require('express');
var router = express.Router();
/* Bao Kim API key */
const API_KEY = "ed135ef5946c4cdb8dec124df18287c4";
const API_SECRET = "bb14f50df3c5443281f593e1db65c0a1";
const TOKEN_EXPIRE = 60; //token expire time in seconds
const ENCODE_ALG = 'HS256';

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
