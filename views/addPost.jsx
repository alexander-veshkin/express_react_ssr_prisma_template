const React = require('react');
const Layout = require('./Layout');
const { faker } = require('@faker-js/faker');

module.exports = function Form(props) {
  const { myTitle, placeHolerInput, placeHolertitle, error, userid, username} = props;
  return (
    <Layout myTitle={myTitle} userid={userid} username={username}>
      <div className='form'>
        <br />
        <form action='/addPost' method='POST'>
          <textarea
            type='textarea'
            name='addPost'
            rows='6'
            cols='30'
            placeholder='Type some post here'
            value={faker.random.words(Math.floor(Math.random() * (30 - 5) + 5))}
          />
          {error.addPost && <div className='errorMsg'>Введите пост</div>}
          <br />
          <div className='inputAndError'>
            <input
              type='text'
              name='title'
              placeholder={placeHolertitle}
              value={faker.random.word().toLocaleUpperCase()}
            />
            {props.error.title && (
              <div className='errorMsg'>Введите заголовок</div>
            )}
          </div>
          <div className='inputAndError'>
            <input
              type='text'
              name='posterName'
              placeholder={placeHolerInput}
              value={faker.name.fullName()}
            />
            {props.error.posterName && (
              <div className='errorMsg'>Введите имя</div>
            )}
          </div>
          <div>
            <input type='text' name='tag' placeholder='Enter tag' />
          </div>
          <div>
            <button type='submit'>Add post</button>
          </div>
        </form>
      </div>
    </Layout>
  );
};
