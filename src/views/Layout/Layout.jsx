const React = require('react');
const Main = require('../Main');
const HtmlHead = require('./HtmlHead');

module.exports = function Layout(props) {
  const { children } = props;
  return (
    <html lang='ru'>
      <HtmlHead />
      <body className='container'>{children}</body>
    </html>
  );
};
