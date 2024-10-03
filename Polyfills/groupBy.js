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

//polyfill groupBy----------------------------------------------------------------------------
function groupBy(array, property) {
  return array.reduce((acc, item) => {
    const key = item[property];  // Get the key based on the provided property
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(item);  // Push the current item into the respective group
    return acc;
  }, {});
}

const employees = [
  { name: 'Alice', age: 25, department: 'Engineering' },
  { name: 'Bob', age: 30, department: 'Marketing' },
  { name: 'Charlie', age: 25, department: 'Engineering' },
  { name: 'David', age: 30, department: 'Marketing' },
  { name: 'Eve', age: 35, department: 'HR' }
];
// Group employees by department
const groupedByDepartment = groupBy(employees, 'department');
console.log(groupedByDepartment);

// Group employees by age
// const groupedByAge = groupBy(employees, 'age');
// console.log(groupedByAge);

