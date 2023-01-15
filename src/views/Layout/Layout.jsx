const React = require('react');
const Main = require('../Main');
const HtmlHead = require('./HtmlHead');
const LoginRegForm = require('../RegAuth/RegLoginForm');
const LoginForm = require('../RegAuth/LoginForm');
const RegForm = require('../RegAuth/RegForm');
const Nav = require('../Nav');

module.exports = function Layout(props) {
  const { children, user, loginForm, registerForm } = props;

  return (
    <html lang='ru'>
      <HtmlHead />
      <body className='container'>

        <div className = 'nav'><a href='/'><img className='homeIcon' src='/img/home.png' /></a>
        {!user && !loginForm && !registerForm && <LoginRegForm />}
        <Nav user={user} />
        </div>

        {loginForm && <LoginForm />}
        {registerForm && <RegForm />}

        {children}

      </body>
    </html>
  );
};
