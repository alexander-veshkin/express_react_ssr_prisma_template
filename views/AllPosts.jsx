const React = require('react');
const Layout = require('./Layout');
const Post = require('./Post');

module.exports = function AllPosts({ props, myTitle, userid }) {
  console.log(myTitle)
  return (
    <Layout myTitle = {myTitle} userid={userid}>
      {props.map((i) => (
        <Post props={i} key={i.id} myTitle = {myTitle}/>
      ))}
    </Layout>
  );
};
