console.log('läuft')

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString)
console.log(urlParams.get('_id'))