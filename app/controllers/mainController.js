import pages from '../data/pages.js';

const mainController = {

  isLogged: (req, res, next) => {
    if (req.session.user) {
      next();
    } else {
      res.redirect('/login');
    }
  },

  page: function (req, res, next) {
    const pageDetail = pages.find(elem => elem.path === req.path);
    if (pageDetail) {
      res.render('page', pageDetail);
    }
    else {
      next();
    }
  },

  error: function (req, res) {
    res.sendStatus(404);
  },

};

export default mainController;
