const React = require('react');
const Layout = require('./Layout');
const Post = require('./Post');

module.exports = function AllPosts({props}) {
  console.log(props)
  return (
    <Layout>
      {props.map((i) => (
        <Post props={i} key={i.id}/>
      ))}
    </Layout>
  );
};
