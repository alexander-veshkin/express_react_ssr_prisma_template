function getUrl() {
  return location.href.match(/\/\/(.*?)\//g);
}

if (location.href.includes('Search')) {
  const searchBtn = document.getElementById('SearchInput');
  const searchInput = document.getElementById('inputValue');
  const viewPost = document.getElementsByClassName('viewPost')[0];

  searchInput.value = 'PARSING';
  searchInput.focus();

  searchBtn.addEventListener('click', async () => {
    event.preventDefault();
    let apiUrl =
      'http:' + getUrl() + 'api/posts?SearchInput=' + searchInput.value;
    const response = await fetch(apiUrl);
    const res = await response.json();


    if (res.length) {
      res.forEach(post => {
        let postContainer = document.querySelectorAll('.viewPost')[0];
        var newPostContainer = postContainer.cloneNode(true);
        postContainer.after(newPostContainer);

        Array.from(document.getElementsByClassName('bodyPost')).at(0).textContent = post.body
        Array.from(document.getElementsByClassName('titilePost')).at(0).textContent = post.title
        Array.from(document.getElementsByClassName('datePost')).at(0).textContent = post.date

        viewPost.setAttribute('style', 'visibility:visible');

      });
    }
  });
}
