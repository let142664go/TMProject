var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/paymentsuccess', function(req, res, next) {
  res.render('paymentsuccess', {
    
  });
});

module.exports = router;
