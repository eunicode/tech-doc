const data = [
    {
        category: 'Functions',
        title: 'Rest parameters',
        urlfrag: 'Rest_parameters',
        info: 'The rest parameter syntax allows us to create functions that take a \
        variable number of arguments. In a way, rest syntax is like the opposite \
        of spread syntax. Spread expands an array into its elements, while \
        rest condenses elements into an array. \nThere are three main differences \
        between rest parameters and the arguments object:\
        [li]rest parameters are only the ones that haven\'t been given a separate \
        name (i.e. formally defined in function expression), while the arguments \
        object contains all arguments passed to the function;[li]\
        [li]the arguments object is not a real array, while rest parameters are \
        Array instances, meaning methods like sort, map, forEach or pop can be \
        applied on it directly;[li]\
        [li]the arguments object has additional functionality specific to itself \
        (like the callee property).[li]',
        code: `function f(a, b, ...theArgs) {
            //...
        }`,
    },
    {
        category: 'Operators',
        title: 'Spread syntax',
        urlfrag: 'Spread_syntax',
        info: 'Spread syntax expands or "spreads" iterables like arrays and \
        objects.\n Spread syntax can be used to\
        [li]replace Function.prototype.apply[li]\
        [li]to copy arrays[li]\
        [li]concatenate arrays[li]\
        [li]clone objects[li]\
        [li]merge objects[li]',
        code: `function sum(x, y, z) {
            return x + y + z;
        }
        const numbers = [1, 2, 3];
        sum(...numbers); // 6`,
    },
    {
        category: 'Expressions',
        title: 'Destructuring assignment',
        urlfrag: 'Destructuring_assignment',
        info: 'The destructuring assignment syntax unpacks values from objects \
        and assigns them to variables. It\'s somewhat similar to spread syntax \
        because they both unpack values. It can be used with rest syntax.',
        code: `var [a, ...b] = [1, 2, 3]
        // a = 1
        // b = [2, 3]`,
    },
    {
        category: 'Object',
        title: 'Object.freeze()',
        urlfrag: 'Object.freeze()',
        info: 'The Object.freeze() method freezes an object. In other words, \
        it prevents data mutation of the object passed into it.',
        code: `Object.freeze(obj)`,
    },
    {
        category: 'Functions',
        title: 'Default parameters',
        urlfrag: 'Default_parameters',
        info: 'Default function parameters allow formal parameters to be \
        initialized with default values if no value or undefined is passed (MDN).',
        code: `function multiply(a, b = 1) {
            return a * b;
        }
          
        multiply(5);
        // 5`,
    },

];

// Turn JS object into JSON string
const dataJSONString = JSON.stringify(data);
console.log(dataJSONString);

// export default data;