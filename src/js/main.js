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

// Method #2: INSERT SCRIPT TAG INTO THE DOM (AJAX technique)
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

// Method #3: AJAX + JSON METHOD
// Store data in JS object so I can use template literals. The pro using of template literals is that 
// any newline characters inserted in the source are part of the template literal. In other words, 
// it's easier to write multi-line strings.
// Then convert JS object to a JSON string with JSON.stringify() method. This is bc when exchanging 
// data between a browser and a server, the data can only be text/blob/etc. When we receive JSON data 
// from the server, we can easily convert JSON data to JS objects.

function loadData(url) {
  
    // Create Promise object
    return new Promise( 
  
        // Executor function with `resolve` function passed as an argument 
        function(resolve) {
  
            // Create XMLHttpRequest Object
            const request = new XMLHttpRequest;
            
            // Open request
            request.open('GET', url);
             
            // AJAX event callback function
            request.onreadystatechange = () => {
                if (request.status === 200 && request.readyState === 4) {
                    // Call `resolve` callback function once asynchronous work completes
                    // `resolve`'s first argument is the value the promise will become if the promise 
                    // is fulfilled
                    resolve(JSON.parse(request.responseText));
                }
            }
  
            // Send request
            request.send(); 
  
        }
  
    );

}
  
// See first Promise object
// {
//     __proto__: Promise,
//     [[PromiseStatus]]: "resolved",
//     [[PromiseValue]]: { key: [...] }
// }
console.log(loadData('../data/data.json'));

// See Promise object returned by `then` - no arguments
// If both arguments are omitted from `then`, then when the Promise that `then` is called on adopts
// the state fulfilled, a new Promise is created that is identical to the Promise on which `then`
// was called.
console.log(loadData('../data/data.json').then()); // { closure: ..., data: ...}

// See Promise object returned by `then` - `onFulfilled` returns a value
console.log(loadData('../data/data.json').then(function(data) { return 6; })); // 6

// See Promise object returned by `then` - `onFulfilled` returns nothing
console.log(loadData('../data/data.json').then(function(data) { 1 + 2; })); // undefined 

loadData('../data/data.json').then(
    //  The `then` method returns a Promise in the pending status.
    // The first argument of `then` is the `onFulfilled` function
    // The `onFulfilled` function has one argument, the fulfillment value
    // `onFulfilled` handler gets called asynchronously, as soon as the stack is empty.
    // If `onFulfilled` returns a value, the promise gets resolved with that value
    // If `onFulfilled` returns nothing, the promise gets resolved with `undefined`
    function(dataI) { 
        console.log({ dataI });

        const DOMNode = document.querySelector('#main-doc');
        
        for (const item in dataI.key) {
            if (dataI.key.hasOwnProperty(item)) {
                const element = dataI.key[item];
                const listItem = document.createElement('div');
                listItem.className = 'main-section';
                listItem.innerHTML = `<h4>${element.title}</h4>
                <p>${element.info}</p>`;
                DOMNode.appendChild(listItem);
            }
        }

    }
);

// TO DO
// Use promises ✓
// Convert XHR to fetch
// Async/await

// Change anonymous functions to named functions
// Change function declarations to arrow functions
// Refactor onreadystatechange handler to use `this` to refer to XHR object