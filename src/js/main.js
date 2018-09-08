// AJAX + JSON METHOD
// Store data in JS object so I can use template literals. The pro using of template literals is that any newline characters inserted in the source are part of the template literal. In other words, it's easier to write multi-line strings.
// Then convert JS object to a JSON string with JSON.stringify() method. This is bc when exchanging data between a browser and a server, the data can only be text. When we receive JSON data from the server, we can easily convert JSON data to JS objects.

let dataA;

const DOMNode = document.querySelector('#main-doc');

const request = new XMLHttpRequest;

request.open('GET', '../data/data.json');

request.onreadystatechange = () => {
    if (request.status === 200 && request.readyState === 4) {
        dataA = JSON.parse(request.responseText);
        console.log({ dataA });
        for (const item in dataA.key) {
            if (dataA.key.hasOwnProperty(item)) {
                const element = dataA.key[item];
                const listItem = document.createElement('div');
                listItem.className = 'main-section';
                listItem.innerHTML = `<h4>${element.title}</h4>
                <p>${element.info}</p>`;
                DOMNode.appendChild(listItem);
            }
        }
    }
}

request.send();
