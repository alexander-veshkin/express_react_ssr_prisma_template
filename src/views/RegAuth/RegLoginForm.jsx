const React = require('react');
const Layout = require('../Layout/Layout');

module.exports = function LoginRegForm(props) {
  const { user } = props;
  return (
    <div>
      <a href='/login'><button className='orange'>Войти</button></a>
      <a href='/register'><button className='orange'>Зарегистрироваться</button></a>
    </div>
  );
};
