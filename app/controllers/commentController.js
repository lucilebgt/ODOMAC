import Comment from '../models/Comment.js';
import comments from '../data/comments.js';

const commentController = {

  all: function (req, res) {
    res.render('comments', { comments });
  },

  add: function (req, res) {
    try {
      const newComment = new Comment(req.body);
      comments.push(newComment);
      res.redirect('/golden-book');
    }
    catch (error) {
      console.error(error);
      res.render('comments', { alert: error.message });
    }
  },

};

export default commentController;
