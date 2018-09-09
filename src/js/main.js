// Try to get JavaScript from JavaScript file with AJAX 
// Lesson: The types of data you can retrieve with XHR are: HTML document, XML XMLDocument, JSON, text in a DOMString object, JS ArrayBuffer (contains binary data), and Blob (object containing binary data).

let dataA;

const DOMNode = document.querySelector('#main-doc');

const request = new XMLHttpRequest;

request.open('GET', '../data/data.js');

request.onreadystatechange = () => {
    if (request.status === 200 && request.readyState === 4) {
        console.log('ajax is working');
        console.log({ request })
        // console.log( request.responseText ); // DOMstring
        // console.log( request.responseType ); // "" or text in a DOMstring object

        // Test appending nodes to the DOM
        // const blah = "blah"
        // const blahItem = document.createElement('div');
        // blahItem.className = 'main-section';
        // blahItem.innerHTML = `<h4>${blah}</h4>
        // <p>${blah}</p>`;
        // DOMNode.appendChild(blahItem);

        // Test parsing a DOMstring
        dataA = JSON.parse(request.responseText); // Can't do this bc the DOMstring is not a JSON object
    }
}

request.send();

// AJAX + JSON METHOD
// Store data in JS object so I can use template literals. The pro using of template literals is that any newline characters inserted in the source are part of the template literal. In other words, it's easier to write multi-line strings.
// Then convert JS object to a JSON string with JSON.stringify() method. This is bc when exchanging data between a browser and a server, the data can only be text/blob/etc. When we receive JSON data from the server, we can easily convert JSON data to JS objects.

// let dataA;

// const DOMNode = document.querySelector('#main-doc');

// const request = new XMLHttpRequest;

// request.open('GET', '../data/data.json');

// request.onreadystatechange = () => {
//     if (request.status === 200 && request.readyState === 4) {
//         dataA = JSON.parse(request.responseText);
//         console.log({ dataA });
//         for (const item in dataA.key) {
//             if (dataA.key.hasOwnProperty(item)) {
//                 const element = dataA.key[item];
//                 const listItem = document.createElement('div');
//                 listItem.className = 'main-section';
//                 listItem.innerHTML = `<h4>${element.title}</h4>
//                 <p>${element.info}</p>`;
//                 DOMNode.appendChild(listItem);
//             }
//         }
//     }
// }

// request.send();

// TO DO
// Convert XHR to fetch
// Use promises
