console.log('läuft')

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString)
let _id = urlParams.get('_id')

if(_id == null || _id === undefined) console.log('no _id found')
else console.log(_id)