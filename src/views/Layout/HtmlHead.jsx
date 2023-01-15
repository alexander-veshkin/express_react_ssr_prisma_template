const React = require('react');

module.exports = function HtmlHead() {
  return (
    <head>
      <meta charSet='UTF-8' />
      <meta httpEquiv='X-UA-Compatible' />
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <link rel='stylesheet' href='/css/style.css'></link>
      <script type='module' src='/js/application.js'></script>
      <script type='module' src='/js/helper.js'></script>
    </head>
  );
};
