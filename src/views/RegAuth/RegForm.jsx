const React = require('react');
const Layout = require('../Layout/Layout');

module.exports = function LoginRegForm(props) {
  return (
    <div className='registrationForm'>
      <form method='POST' action='/register'>
        <div>
          <label >Имя: </label>
          <input type='text' name='name' placeholder='name' require />
        </div>
        <div>
          <label >Почта: </label>
          <input type='text' name='email' placeholder='email' require />
        </div>
        <br />
        <label >Пароль: </label>
        <input
          type='password'
          name='password'
          minlength='6'
          maxlength='20'
          placeholder='password'
          value='123456'
          require
        />
        <label>Повторите пароль: </label>
        <input
          type='password'
          name='password-repeat'
          minlength='6'
          maxlength='20'
          placeholder='repeat password'
          value='123456'
          require
        />
        <button className='regBtn' type='submit'>
          Зарегистрироваться
        </button>
        <div className='errMsg'></div>
      </form>
    </div>
  );
};
