const React = require('react');
const Main = require('../Main');
const Head = require('./Head');
const LoginRegForm = require('../RegAuth/RegLoginForm');
const LoginForm = require('../RegAuth/LoginForm');
const RegForm = require('../RegAuth/RegForm');
const Nav = require('../Nav');

module.exports = function Layout(p) {
  const { children, user, email, loginForm, registerForm, err, name } = p;
  return (
    <html lang='ru'>
      <Head />
      <body className='container'>

        <nav className='nav'><a href='/'><img className='homeIcon' src='/img/home.png' /></a>
        {!user && !loginForm && !registerForm && <LoginRegForm />}
        <Nav user={user} name={name}/>
        </nav>

        {loginForm && <LoginForm err={err} />}
        {registerForm && <RegForm err={err}/>}

        {children}

      </body>
    </html>
  );
};
