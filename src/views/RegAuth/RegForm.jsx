const React = require('react');
const Layout = require('../Layout/Layout');

module.exports = function LoginRegForm(p) {
  const { err } = p;
  return (
    <div className='registrationForm'>
      <form method='POST' action='/register'>
        <div>
          <label>Имя: </label>
          <input type='text' name='name' placeholder='name' require="true" />
        </div>
        <div>
          <label>Почта: </label>
          <input type='text' name='email' placeholder='email' require="true" />
        </div>
        <br />
        <label>Пароль: </label>
        <input
          type='password'
          name='password'
          minLength='3'
          maxLength='20'
          placeholder='password'
          value='123456'
          require="true"
        />
        <label>Повторите пароль: </label>
        <input
          type='password'
          name='password_repeat'
          minLength='3'
          maxLength='20'
          placeholder='repeat password'
          value='123456'
          require="true"
        />
        <button className='regBtn' type='submit'>
          Зарегистрироваться
        </button>
        {err && <div className='errMsg'>{err}</div>}
      </form>
    </div>
  );
};
