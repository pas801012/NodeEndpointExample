// WORKABLE EXAMPLE
// var customers = await simpleFetch( 'GET', 'https://6cvw5.sse.codesandbox.io/allCustomers' );
async function simpleFetch(method, url) {
  // var res = await fetch('https://6cvw5.sse.codesandbox.io/allCustomers',{ method: 'GET' } )
  let response = await fetch(url, { method: method, mode: 'no-cors' });

  return response.ok
    ? await response.json()
    : new Error('Ошибка HTTP: ' + response.status);
}

// Example POST method implementation: NOT WORKING PROPERLY
console.log('add env');
async function testEndpoint(url) {
  try {
    //     const data = await postData('https://6cvw5.sse.codesandbox.io/customer?fname=Elaine&lname=Rushmore', { answer: 42 });
    const data = await postData(url, { answer: 42 });
    //     console.log(JSON.stringify(data)); // JSON-string from `response.json()` call
    console.log(data); // JSON-string from `response.json()` call
  } catch (error) {
    console.error(error);
  }
}

// NOTE: fetch parameter example
async function postData(url = '', data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrer: 'no-referrer', // no-referrer, *client
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  });
  return await response.json(); // parses JSON response into native JavaScript objects
}
