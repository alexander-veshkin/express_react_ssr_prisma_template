const React = require('react');
const Layout = require('../Layout/Layout');

module.exports = function LoginRegForm(props) {
  const { err } = props;
  return (
    <div className=''>
      <form className='loginForm' action='/login' method='POST'>
        <div>
          <label>Почта: </label>
          <input
            type='mail'
            name='email'
            placeholder='e-mail'
            require='true'
            value='mail1'
          />
          <label>Пароль: </label>
          <input
            type='password'
            name='password'
            placeholder='password'
            require='true'
            value='123'
          />
          {err && <div className='errMsg'>{err}</div>}
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
