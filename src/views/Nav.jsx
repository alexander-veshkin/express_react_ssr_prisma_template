const React = require('react');
const Layout = require('./Layout/Layout');

module.exports = function Nav(p) {
  const { user, name } = p;
  return (
    <div>
      {user && (<div>hi there<b>{name}</b></div> )}
      <button>Все товары</button>
      <button>Последние добавленные</button>
      {user && <button>Профиль</button>}
      {user && <button>Корзина</button>}
      {user && <a href="/logout"><img className='homeIcon logOutIcon' src='/img/logout.png' /></a>}
    </div>
  );
};
