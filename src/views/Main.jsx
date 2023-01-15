const React = require('react');
const Layout = require('./Layout/Layout');

module.exports = function Main(p) {
  const { user, name } = p;
  return (
    <Layout user={user} name={name}>
      <div>Main</div>
    </Layout>
  );
};
