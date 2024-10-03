const groupBy = (values, keyFinder) => {
    return values.reduce((a, b) => {
        const key = typeof keyFinder === 'function' ? keyFinder(b) : b[keyFinder];

        if (!a[key]) {
            a[key] = [b];
        } else {
            a[key] = [...a[key], b];
        }
        return a;
    }, {});
}

console.log(groupBy([6.1, 4.2, 6.3], Math.floor));

console.log(groupBy([{name : "ayush" , age :20},{name : "piyush" , age :30}], ({name}) => name));
