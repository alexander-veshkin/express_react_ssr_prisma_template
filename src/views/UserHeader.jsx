const Layout = require('./Layout');
const React = require('react');

module.exports = function Post({ userid, username }) {
  return (
    <div className='userHeader'>
      <div className='userHeader'>
        <div>id пользователя: {userid}</div>
        <div>Имя: {username}</div>
      </div>
      <div id='logOut'><a href=''>Выйти</a></div>
    </div>
  );
};
