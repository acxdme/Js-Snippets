// Implements a js function that flattens a nested array into a single-dimension array

let res = [];
function flatten(arr,depth){
  for(let i =0 ; i < arr.length ; i++){
     if(Array.isArray(arr[i]) && depth > 0){
        flatten(arr[i],depth-1);
     }
     else{
       res.push(arr[i]);
     }
  }
}

let arr = [1,2,3,[4,5,6,[7,8,[9,10,[11]]]]];
depth = 2;
flatten(arr,depth);

console.log(res);
