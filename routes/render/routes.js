const express = require('express');
const { Post } = require('../../db/models');
const Sequelize = require("sequelize");
const render = require('../../lib/render');
const Layout = require('../../views/Layout');
const Form = require('../../views/Form');
const post = require('../../views/Post');
const Search = require('../../views/Search');
const allPosts = require('../../views/AllPosts');
const router = express.Router();
const Op = Sequelize.Op;
const operatorsAliases = {
  $like: Op.like,
  $not: Op.not
}

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

router.get('/', (req, res) => {
  render(Layout, { myTitle: 'Blog', doctType: true }, res);
});


router.get('/Search', async (req, res) => {
    render(Search, {  }, res);
    const props = await Post.findAll({where: {title: {[Op.like]: `%${req.query.SearchInput}%`}}})
  });

  
router.get('/allPosts', async (req, res) => {
  const props = await Post.findAll({ raw: true });

  render(allPosts, { props }, res);
});

router.get('/lastPost', async (req, res) => {
  let props = await Post.findAll({
    limit: 1,
    order: [['date', 'DESC']],
    raw: true,
  });

  render(allPosts, { props }, res);
});

router.get('/form', (req, res) => {
  let error = { addPost: false, posterName: false, title: false };

  render(
    Form,
    {
      placeHolerInput: 'Type name',
      textAreaValue: 'Some post',
      placeHolertitle: 'Some title',
      error,
    },
    res
  );
});

router.post('/addPost', async (req, res) => {
  let error = { addPost: false, posterName: false, title: false };

  if (req.body.addPost === '') error.addPost = true;
  if (req.body.posterName === '') error.posterName = true;
  if (req.body.title === '') error.title = true;

  render(
    Form,
    {
      placeHolerInput: 'Type name',
      textAreaValue: 'ВВЕДИТЕ ПОСТ!',
      placeHolertitle: 'Some title',
      error,
    },
    res
  );

  if (!Object.values(error).includes(true)) {
    await Post.create({
      body: req.body.addPost,
      name: req.body.posterName,
      title: req.body.title,
      date: new Date(),
    });
  }
});

module.exports = router;
