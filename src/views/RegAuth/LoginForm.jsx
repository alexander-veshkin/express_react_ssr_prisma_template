const React = require('react');
const Layout = require('../Layout/Layout');

module.exports = function LoginRegForm() {
  return (
    <div className=''>
      <form className='loginForm' action='/login' method='POST'>
        <div>
          <label>Почта: </label>
          <input type='text' name='email' placeholder='e-mail' require="true" />
          <label>Пароль: </label>
          <input
            type='password'
            name='password'
            placeholder='password'
            require="true"
          />
          <div errMsg=''></div>
        </div>
        <div>
          <button className='loginBtn' type='submit'>
            Войти
          </button>
        </div>
      </form>
    </div>
  );
};
