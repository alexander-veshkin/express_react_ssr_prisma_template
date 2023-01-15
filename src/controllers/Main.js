const render = require('../lib/render');
const MainView = require('../views/Main');

const Main = (req, res) => {
  render(MainView, {}, res);
};

module.exports = { Main };
