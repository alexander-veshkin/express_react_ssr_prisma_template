const React = require('react');
const Layout = require('./Layout');
const Post = require('./Post');

module.exports = function Search({ props }) {
  return (
    <Layout>
      <br />
      <div className='SearchForm'>
        <form action=''>
          <label for='SearchInput'>Введите заголовок:</label>
          <input type='text' id='inputValue' name='SearchInput' />
          <button type='submit' id='SearchInput'>
            Найти
          </button>
        </form>
      </div>
      <Post props={{ visibility: 'hidden' }} />
    </Layout>
  );
};
