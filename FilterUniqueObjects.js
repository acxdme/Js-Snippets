
let originalArr = [{name: "ayush"}, {name: "1111"}, {name: "ayush"}, {name: true}];

let uniqueArr = originalArr.filter((item, index, self) => 
    index === self.findIndex((t) => (
        t.name === item.name
    ))
);

console.log(uniqueArr);
