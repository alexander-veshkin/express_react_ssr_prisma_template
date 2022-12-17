const React = require('react');
const Layout = require('./Layout');

module.exports = function Post({ props }) {
  const { body, title } = props;
  let date = props.date.toDateString()
  return (
      <div className='viewPost'>
        <div className='titilePost'>{title}</div>
        <div>{body}</div>
        <div className='datePost'>{date}</div>
      </div>
  );
};
