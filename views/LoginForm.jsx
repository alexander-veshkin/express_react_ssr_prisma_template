const React = require('react');

module.exports = function LoginForm() {
  let displayLogin = 'block';
  let displayRegistration = 'block';
  let errMsg = 'none';
  return (
    <>
      <div className='loginForm' style={{ display: displayLogin }}>
        <form action='/api/login' method='POST'>
          <label htmlFor='login'>Логин: </label>
          <input type='text' name='login' placeholder='login' />
          <label htmlFor='pass'>Пароль: </label>
          <input type='password' name='pass' placeholder='password' />
          <button className='loginBtn' type='submit'>
            Войти
          </button>
        </form>
      </div>

      <div
        className='registrationForm'
        style={{ display: displayRegistration }}
      >
        <form method='POST' action='/api/reg'>
          <label htmlFor='loginReg'>Логин: </label>
          <input type='text' name='loginReg' placeholder='login' />
          <label htmlFor='nameReg'>Имя: </label>
          <input type='text' name='nameReg' placeholder='name' />
          <br />
          <label htmlFor='passReg'>Пароль: </label>
          <input
            type='password'
            name='passReg'
            minlength='6'
            maxlength='20'
            placeholder='password'
            value='123456'
          />
          <label htmlFor='passRepeat'>Повторите пароль: </label>
          <input
            type='password'
            name='passRepeat'
            minlength='6'
            maxlength='20'
            placeholder='repeat password'
            value='123456'
          />
          <button className='regBtn' type='submit'>
            Зарегистрироваться
          </button>
          <div className='errMsg' style={{ display: errMsg }}></div>
        </form>
      </div>
    </>
  );
};
