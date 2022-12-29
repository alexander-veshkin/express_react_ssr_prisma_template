function getUrl() {
  return 'http:' + location.href.match(/\/\/(.*?)\//g);
}

if (document.getElementById('logOut')) {
  const logoutLink = document.getElementById('logOut').getElementsByTagName('a')[0]
  logoutLink.setAttribute('href', getUrl() + 'clear')
}

async function postData(url = '', data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json',
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

//login
const regForm = document.getElementsByClassName('registrationForm')[0];
const regBtn = document.getElementsByClassName('regBtn')[0];
const errMsg = document.getElementsByClassName('errMsg')[0];

const loginReg = document.getElementsByName('loginReg')[0];
const nameReg = document.getElementsByName('nameReg')[0];
const passReg = document.getElementsByName('passReg')[0];
const passRepeat = document.getElementsByName('passRepeat')[0];

if (regForm) {
  regBtn.addEventListener('click', async () => {
    event.preventDefault();
    errMsg.setAttribute('style', 'display:none');
    const payload = {
      loginReg: loginReg.value,
      nameReg: nameReg.value,
      passReg: passReg.value,
      passRepeat: passRepeat.value,
    };
    const resp = await postData(getUrl() + 'api/reg', payload);
    if (resp.errr) {
      errMsg.textContent = resp.errr;
      errMsg.setAttribute('style', 'display:block');
    } else {
      window.location.href = window.location.href;
      regForm.setAttribute('style', 'display:none');
    }
  });
}

// show all posts
if (location.href.includes('Search')) {
  const getEl = (loc) => Array.from(document.getElementsByClassName(loc)).at(0);

  const searchBtn = document.getElementById('SearchInput');
  const searchInput = document.getElementById('inputValue');
  const viewPost = document.getElementsByClassName('viewPost')[0];

  searchInput.value = 'PARSING';
  searchInput.focus();

  searchBtn.addEventListener('click', async () => {
    event.preventDefault();
    let endPoint = getUrl() + 'api/posts?SearchInput=' + searchInput.value;
    const response = await fetch(endPoint);
    const res = await response.json();

    if (res.length) {
      res.forEach((post) => {
        let postContainer = document.querySelectorAll('.viewPost')[0];
        var newPostContainer = postContainer.cloneNode(true);
        postContainer.after(newPostContainer);

        getEl('bodyPost').textContent = post.body;
        getEl('titilePost').textContent = post.title;
        getEl('datePost').textContent = post.date;

        viewPost.setAttribute('style', 'visibility:visible');
      });
    }
  });
}
