/**
WAP to calculate => let str = 'a.b.c.d.e'
Output :- { a: { b: { c: { d: e, }, }, }, }
**/

function buildNestedObject(str) {
    const parts = str.split('.');
    let result = {};

    let current = result;

    for (let i = 0; i < parts.length; i++) {
        // If we are at the last part, assign it directly
        if (i === parts.length - 1) {
            current[parts[i]] = null; // or you can assign a value like `e`
        } else {
            // Create a new object for the next level if it doesn't exist
            current[parts[i]] = current[parts[i]] || {};
            current = current[parts[i]];
        }
    }

    return result;
}

let str = 'a.b.c.d.e';
let output = buildNestedObject(str);
console.log(JSON.stringify(output, null, 2));
