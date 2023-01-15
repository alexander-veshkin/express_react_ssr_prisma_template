const React = require('react');
const LoginForm = require('./LoginForm');
const UserHeader = require('./UserHeader');

module.exports = function Layout(props) {
  const { children, loginform, userid, username } = props;
  return (
    <html lang='ru'>
      <head>
        <meta charSet='UTF-8' />
        <meta httpEquiv='X-UA-Compatible' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <link rel='stylesheet' href='/css/style.css'></link>
        <script type="module" src='/js/application.js'></script>
        <script type="module" src='/js/helper.js'></script>
      </head>
      <body className='container'>
        {userid && <UserHeader userid={userid} username={username} />}
        <nav>
          {!userid && <LoginForm />}

          {userid && (
            <div className='mainControls'>
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
            </div>
          )}
        </nav>
        {children}
      </body>
    </html>
  );
};
