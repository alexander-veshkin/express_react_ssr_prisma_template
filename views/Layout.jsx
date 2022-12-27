const React = require('react');
const LoginForm = require('./LoginForm');

module.exports = function Layout(props) {
  const { myTitle, children, loginform } = props;
  const loginForm = true;
  return (
    <html lang='ru'>
      <head>
        <meta charSet='UTF-8' />
        <meta httpEquiv='X-UA-Compatible' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <link rel='stylesheet' href='/css/style.css'></link>
        <script defer src='/js/application.js'></script>
        <title>{myTitle}</title>
      </head>
      <body className='container'>
        <nav>
          {loginForm && <LoginForm />}

          {/* {loginForm ? (
            <div className='loginForm'>
              <form action='/login' method='POST'>
                <label htmlFor='login'>Логин: </label>
                <input type='text' name='login' placeholder='login' />
                <label htmlFor='pass'>Пароль: </label>
                <input type='password' name='pass' placeholder='password' />
                <button className='loginBtn'>Войти</button>
              </form>
            </div>
          ) : (
            ''
          )} */}
          <a href='/addPost'>
            <button>Добавить пост</button>
          </a>
          <a href='/lastPost'>
            <button>Последний пост</button>
          </a>
          <a href='/allPosts'>
            <button>Все посты</button>
          </a>
          <a href='/'>
            <button>Теги</button>
          </a>
          <a href='/Search'>
            <button>Поиск</button>
          </a>
        </nav>
        {children}
      </body>
    </html>
  );
};
