// Importing data from another file

// Method #1: SCRIPT TAG METHOD

// Use JS code in another file by adding script tag in HTML in the correct order
// <script src="data/data.js"></script>

// const DOMNode = document.querySelector('#main-doc');

// console.log({ data });

// data.map(x => {
//     const listItem = document.createElement('div');
//     listItem.className = 'main-section';
//     listItem.innerHTML = `<h4>${x.title}</h4>
//     <p>${x.info}</p>`;
//     DOMNode.appendChild(listItem);
// });

/* ========================================================================== */

// Method #2: INSERT SCRIPT TAG INTO THE DOM (Did not work)

// The script will download and execute immediately. But it is still difficult to manage your 
// dependencies. You can never guarantee that multiple scripts will load and execute in the order 
// you need them.

// const script = document.createElement("script");
// script.src = "data/data.js";
// document.head.appendChild(script);

// const DOMNode = document.querySelector('#main-doc');

// for (let i = 0; i < 100; i++) {
//     console.log(i);
// }

// data.map(x => {
//     const listItem = document.createElement('div');
//     listItem.className = 'main-section';
//     listItem.innerHTML = `<h4>${x.title}</h4>
//     <p>${x.info}</p>`;
//     DOMNode.appendChild(listItem);
// });

/* ========================================================================== */

// Method #3.1: AJAX (XHR) + JSON
// Method #3.2: AJAX + JSON + PROMISE

// See code with comments here: https://github.com/eunicode/tech-doc/blob/30adf4fd44e9a27ae518f32b44400e9aa19c44c0/src/js/main.js

// Store data in JS object so I can use template literals. The pro using of template literals is that 
// any newline characters inserted in the source are part of the template literal. In other words, 
// it's easier to write multi-line strings.
// Then convert JS object to a JSON string with JSON.stringify() method. This is bc when exchanging 
// data between a browser and a server, the data can only be text/blob/etc. When we receive JSON data 
// from the server, we can easily convert JSON data to JS objects.

/*
function getJSON(url) {
    return new Promise(
        function (resolve, reject) {
            const request = new XMLHttpRequest();
            request.open('GET', url);
            request.onload = () => {
                if (request.status === 200) {
                    resolve(JSON.parse(request.responseText));
                } else {
                    reject(`${Error('Couldn\'t load data. HTTP response status: ')} ${request.statusText}`);
                }
            }
            request.send();

        }
    );
}

function generateListSections(data) {
    console.log({ data });

    const DOMNode = document.querySelector('#main-doc');

    for (const item in data.key) {
        if (data.key.hasOwnProperty(item)) {
            const element = data.key[item];
            const listSection = document.createElement('section');
            listSection.className = 'main-section';
            listSection.id = createCssId(element.title);
            listSection.innerHTML = `<header><h2>${element.title}</h2></header>
                                <p>${element.info}</p>
                                <code>${element.code}</code>`;
            DOMNode.appendChild(listSection);
        }
    }

    return 'Testing chaining :)'
}

function createCssId(title) {
    return title.replace(/ /g, '_');
}

function testChaining(string) {
    console.log(`Chaining was successful if you see this string: '${string}'`);
    throw 'Uh-oh :(';
}

console.log(getJSON('../data/data.json'));

getJSON('../data/data.json')
    .then(generateListSections)
    .then(testChaining)
    .catch(error => console.log(error));
*/

/* ========================================================================== */
  
// METHOD #4 FETCH + JSON

function generateListSections(data) {
    console.log('This is the fetched, parsed data that was passed down: ', data);
  
    const DOMNode = document.querySelector('#main-doc');
    
    for (const item of data) {''
        const listSection = document.createElement('section');
        listSection.className = 'main-section';
        listSection.id = createCssId(item.title);

        listSection.innerHTML = `<header><h2>${item.title}</h2></header>
                                 <p>${item.info}</p>
                                 <code>${item.code}</code>`;

        DOMNode.appendChild(listSection);
    }
  
    return 'Testing chaining :)'
    // throw 'Uh-oh!';
}
  
function createCssId(title) {
    return title.replace(/ /g , '_');
}

function testChaining(string) {
    console.log(`Chaining was successful if you see this string: '${string}'`);
    throw 'Uh-oh :('; // Test catch()
}

// Create a Request object using Request() constructor 
// Second parameter is `init`, an options object
const getJSON = new Request('/data/data.json', {
    method: 'GET'
});

// See Promise object that fetch returns
console.log(fetch(getJSON));
// See the Response object that fetch's promise resolves to
fetch(getJSON).then( response => console.log(response));
// Alternatively: fetch(getJSON).then(console.log);
 
function reuseFetch() {
    // Create fetch request. Fetch Request object with fetch() call.
    // First parameter can be a URL or Request object
    return fetch(getJSON)
    // `fetch` returns a promise that resolves to the Response object of the 
    // resource request.
    // Since `fetch` returns a promise, we can use `then` method.
    // We pass the Response object to then's onFulfillment callback function
    // We run Body.json() on the response to parse it (body text) as JSON.
    .then( (response) => response.json() );
}    

reuseFetch()
    .then(generateListSections)
    .then(testChaining)
    .catch( error => console.log(error) );

// DEFAULT EXPORT  
// Export a promise 
// https://stackoverflow.com/questions/42958334/how-can-i-export-promise-result
// export default fetch(getJSON).then((res) => res.json());

// NAMED EXPORT
// Export a method that returns a promise 
// https://stackoverflow.com/questions/38310183/importing-exporting-only-after-certain-promises-have-resolved
export { reuseFetch };

// TO DO
// Use promises ✓
// Convert XHR to fetch ✓
// !Async/await
// !Don't use promises for synchronous tasks

// Change anonymous functions to named functions
// Change function declarations to arrow functions
// Refactor onreadystatechange handler to use `this` to refer to XHR object
// Refactor object in data.json to array ✓
// !Refactor by using `import` instead of fetch + JSON
// Switch from using innerHTML + HTML text to building DOM elements

// RANDOM NOTES
// Naming variables JSON or DATA causes Browser Sync errors
console.log('random does gh pages get its source from master?');