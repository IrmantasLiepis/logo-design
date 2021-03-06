var express = require('express');
var router = express.Router();
var passwordHash = require('password-hash');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');

var User = require('../models/user');


router.post('/', function(req, res, next) {

  User.findOne({nickName: {$regex: new RegExp(req.body.nickName, "i")}}, function(err, doc) {
    if (err) {
      console.log(err);
      return res.status(404).json({
        title: 'Klaida !',
        error: {message: 'Įvyko klaida !'}
      });
      }
       if (!doc) {
      return res.status(404).json({
        title: 'Nerasta vartotojo !',
        error: {message: 'Nerasta vartotojo'}
      });
    }
    if (!bcrypt.compareSync(req.body.password, doc.password)) {
      return res.status(401).json({
        title: 'Negalima prisijungti !',
        error: {message: 'Neteisingas slaptažodis'} // TODO add generic message for production
      });
    }
    if (doc.userBlocked) {
      return res.status(401).json({
        title: 'Jūs esate užblokuotas !',
        error: {message: 'Prašome susisiekti su administracija'} // TODO add generic message for production
      });
    }

    var token = jwt.sign({user: doc}, 'secret', {expiresIn: "2 days"});
    return res.status(200).json({
      message: 'Prisijungta sekmingai',
      token: token,
      userId: doc._id,
      userType: doc.userType,
      nickname: doc.nickName,
      emailConfirmed: doc.emailConfirmed
    });
  });
});

module.exports = router;