// IMPORT DEFAULT
// Import a promise
// import myDefaultPromise from './main-section.js';

// IMPORT A SINGLE EXPORT FROM A MODULE
// Import a method that returns a promise
// Important: use paths relative to the .js file containing the module you're importing. See `import` doc
import { reuseFetch } from './main-section.js';

function generateNavLinks(json) {
    const targetNode = document.querySelector('.nav-link-container');

    const sections = document.querySelectorAll('.main-section');
    console.log('sections: ', sections);

    for (let i = 0; i < json.length; i++) {
        const node = document.createElement('a');
        node.className = 'nav-link';
        node.textContent = json[i].title;
        node.href = `#${sections[i].id}`;

        const outerNode = document.createElement('ul');

        outerNode.appendChild(node);
        targetNode.appendChild(outerNode);
    }
}

// Imported promise
// myDefaultPromise.then(generateNavLinks); 

// Imported method that returns a promise
reuseFetch().then(generateNavLinks);
