const express = require('express');
const router = express.Router();
const { Post } = require('../../db/models');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const operatorsAliases = {
  $like: Op.like,
  $not: Op.not
}

//api/posts
router
  .route('/')
  .get((req, res) => {
    if (!Object.keys(req.query).length) {
      Post.findAll({ raw: true })
        .then((allPosts) => res.json(allPosts))
        .catch((error) => res.status(500).json({ message: error.message }));
    }
    if (Object.keys(req.query).length) {
        Post.findAll({where: { title: { [Op.like]: `%${req.query.SearchInput}%` } }})
          .then((allPosts) => res.json(allPosts))
          .catch((error) => res.status(500).json({ message: error.message }));
      }
  })
  .post((req, res) => {
    const { addPost, title, posterName, tag, date } = req.body;

    if (addPost) {
      Post.create({ body: addPost, title: title, name: posterName, date: date })
        .then((newPost) => res.json(newPost))
        .catch((error) => res.status(403).json({ message: error.message }));
    } else {
      res.status(400).json({ errr: 'field addPost empty' });
    }
  });

router
  .route('/:id')
  .put((req, res) => {
    const { id } = req.params;

    const { addPost, title, posterName, tag, date } = req.body;

    if (addPost) {
      Post.update(
        { body: addPost, title: title, name: posterName, date: date },
        { where: { id: id }, raw: true, returning: true }
      )
        .then((updatedPost) => {
          const [, [updatedData]] = updatedPost;

          updatedPost[0] === 1
            ? res.json(updatedData)
            : res.status(500).json({ res: `cant UPDATE post with ${id}` });
        })
        .catch((error) => res.status(500).json({ message: error.message }));
    } else {
      res.status(400).json({ res: 'cant UPDATE post without body' });
    }
  })
  .delete((req, res) => {
    const { id } = req.params;
    Post.destroy({ where: { id } }).then((result) => {
      result === 1
        ? res.json({ id: +id, deleted: true })
        : res.status(400).json({ id: +id, deleted: false });
    });
  });

module.exports = router;
