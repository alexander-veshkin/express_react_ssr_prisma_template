const React = require('react');

module.exports = function Layout(props) {
  const { myTitle, children } = props;
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
