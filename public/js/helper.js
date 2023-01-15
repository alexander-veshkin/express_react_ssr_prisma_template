const el = (loc) => document.querySelector(loc);
const els = (loc) => document.querySelectorAll(loc);

async function fetchData(url = '', data = {}, method) {
  const response = await fetch(url, {
    method: method,
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    body: JSON.stringify(data),
  });
  return response.json();
}

async function fetchDataGet(url = '') {
  const response = await fetch(url);
  return response.json();
}

export { el, els, fetchData, fetchDataGet };
