const React = require('react');
const Layout = require('./Layout/Layout');

module.exports = function Nav(props) {
  const { user } = props;
  return (
    <nav>
      <button>Все товары</button>
      <button>Последние добавленные</button>
      {user && <button>Профиль</button>}
      {user && <button>Корзина</button>}
      {user && <a href="/logout"><button>Выход</button></a>}
    </nav>
  );
};
