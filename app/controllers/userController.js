import validator from 'validator';
import User from '../models/User.js';
import users from '../data/users.js';

// fonction pour hacher les mot de passe
import bcrypt from 'bcrypt';

const userController = {

  signupPage: (req, res) => {
    res.render('signup');
  },

  signupAction: (req, res) => {
    try {
      const options = { minLength: 12, minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 1 };//c un minimun..
      if (!validator.isStrongPassword(req.body.password, options)) {
        throw new Error('Le mot de passe doit comporter au moins 12 caractères et au moins 1 majuscule, 1 minuscule, 1 chiffre, et 1 caractère spécial');
      }

      bcrypt.hash(req.body.password, 10, (error, hash) => {
        if (error) {
          throw error;
        }
        const newUser = new User({
          email: req.body.email,
          hash: hash,
        });
        // on met l'utilisateur inscrit en session ainsi il est connecté
        req.session.user = newUser;
        users.push(newUser)
        //console.log(users[0].hash);
        res.redirect('/');
      });
    }
    catch (error) {
      console.error(error);
      res.render('signup', { alert: error.message });
    }
  },

  loginPage: function (req, res) {
    res.render('login');
  },

  loginAction: function (req, res) {
    try {
      // on tente de récupérer l'utilisateur qui possède l'email donné
      const foundUser = users.find(element => element.email === req.body.email);

      if (!foundUser) {
        throw new Error('Couple email/mot de passe invalide');
      }
      bcrypt.compare(req.body.password, userFound.password, (error, result) => {
        if (!isLogged) {

          res.render('login', { errorMessage: 'Le couple identifiant/mot de passe est incorrect' });
        }
        else {
          req.session.user = foundUser;
          res.redirect('/');
        }
      });
    }
    catch (error) {
      console.error(error);
      res.render('login', { alert: error.message });
    }
  },

  disconnect: function (req, res) {
    req.session.destroy();
    res.redirect('/');
  },

};

export default userController;
