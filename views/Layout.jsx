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
        <title> {myTitle} </title>
      </head>
      <body class='container'>
        <nav>
          <a href='/form'>
            <button>Добавить пост</button>
          </a>
          <a href='/'>
            <button>Все посты</button>
          </a>
        </nav>
        {children}
      </body>
    </html>
  );
};
