const React = require('react');
const Layout = require('./Layout');

module.exports = function Search({ props }) {
  return (
    <Layout>
    <br />
      <div className='SearchForm'>
        <form action="">
        <label for='SearchInput'>Введите заголовок:</label>
        <input type='text' id='SearchInput' name='SearchInput'/>
        <button type='submit'>Найти</button>
        </form>
      </div>
    </Layout>
  );
};
