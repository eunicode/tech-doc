// IMPORT DEFAULT
// Import a promise
// import myDefaultPromise from './main-section.js';

// IMPORT A SINGLE EXPORT FROM A MODULE
// Import a method that returns a promise
// Important: use paths relative to the .js file containing the module you're importing. See `import` doc
import { reuseFetch } from './main-section.js';

function generateNavLinks(json) {
    console.log('Imported a method that returns a promise: ', json);
}

// Imported promise
// myDefaultPromise.then(generateNavLinks); 

// Imported method that returns a promise
reuseFetch().then(generateNavLinks);
