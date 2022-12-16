const React = require('react');
const Layout = require('./Layout');

module.exports = function Form(props) {
  const { textAreaValue, placeHolerInput, placeHolertitle, children, error } =
    props;
  return (
    <Layout>
      <div class='form'>
        <br />
        <form action='/addPost' method='POST'>
          <textarea type='textarea' name='addPost' rows='6' cols='30' />
          {error.addPost && <div class='errorMsg'>Введите пост!</div>}
          <br />
          <input
            type='text'
            name='title'
            placeholder={placeHolertitle}
            value='Заголовок'
          />
          {props.error.title && <div class='errorMsg'>Введите заголовок</div>}
          <input
            type='text'
            name='posterName'
            placeholder={placeHolerInput}
            value='posterName'
          />
          {props.error.posterName && <div class='errorMsg'>Введите имя</div>}
          <div>
            <button type='submit'>Add post</button>
          </div>
        </form>
      </div>
    </Layout>
  );
};
