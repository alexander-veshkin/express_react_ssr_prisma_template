const express = require('express');
const router = express.Router();
const { Post } = require('../../db/models');

//api/posts
router
  .route('/')
  .get((req, res) => {
    Post.findAll({ raw: true })
      .then((allPosts) => res.json(allPosts))
      .catch((error) => res.status(500).json({ message: error.message }));
  })
  .post((req, res) => {
    const { addPost, title, posterName, tag, date } = req.body;

    if (addPost) {
      Post.create({ body: addPost, title: title, name: posterName, date: date })
        .then((newPost) => res.status(200).json(newPost))
        .catch((error) => res.status(403).json({ message: error.message }));
    } else {
      res.status(400).json({ errr: 'field addPost empty' });
    }
  });

router
  .route('/:id')
  .put((req, res) => {
    let id = req.params.id;

    const { addPost, title, posterName, tag, date } = req.body;

    if (addPost) {
      Post.update(
        { body: addPost, title: title, name: posterName, date: date },
        { where: { id: id } }
      )
        .then((result) => {
          result[0] === 1
            ? res.status(200).json({ postid: id, updated: 'OK' })
            : res.status(400).json({ res: `cant UPDATE post with ${id}` });
        })
        .catch((error) => res.status(403).json({ message: error.message }));
    } else {
      res.status(400).json({ res: 'cant UPDATE post without body' });
    }
  })
  .delete((req, res) => {
    let id = req.params.id;
    Post.destroy({ where: { id: id } }).then((result) => {
      result === 1
        ? res.status(200).json({ postid: id, deleted: 'OK' })
        : res.status(400).json({ res: `cant DELETE post with id ${id}` });
    });
  });

module.exports = router;
