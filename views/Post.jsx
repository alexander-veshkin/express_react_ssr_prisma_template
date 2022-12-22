const Layout = require('./Layout');
const React = require('react');

module.exports = function Post({ props }) {
  const { body, title, visibility } = props;
  
  let date = props.date ? props.date.toDateString() : ''

  return (
    <div className='viewPost' style={{ visibility: visibility }}>
      <div className='titilePost'>{title}</div>
      <div className='bodyPost'>{body}</div>
      <div className='datePost'>{date}</div>
    </div>
  );
};
