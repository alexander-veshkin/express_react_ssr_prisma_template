const React = require('react');
const Layout = require('./Layout/Layout');

module.exports = function Main(props) {
  const { user } = props;
  return (
    <Layout>
      {!user}
      <div>Main</div>
    </Layout>
  );
};
