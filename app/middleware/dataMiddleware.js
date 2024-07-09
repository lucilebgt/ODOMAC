import pages from '../data/pages.js';

const dataMiddleware = (req, res, next) => {
  if(req.session.user) {
    res.locals.user = req.session.user;
  } else {
    res.locals.user = false;
  }

  res.locals.pages = pages;
  res.locals.currentPath = req.path;
  
  next();
};


export default dataMiddleware;