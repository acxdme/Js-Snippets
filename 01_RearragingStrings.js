let name1 = "ayush";
let name2 = "piyush";

function isConvertable(name1,name2){
  let len = 26;
  let arr1 = new Array(len).fill(0);
  let arr2 = new Array(len).fill(0);
  
  if(name1.length !== name2.length){
    console.log("not convertable")
    return false;
  }
  /*
   The charCodeAt() method in JavaScript is used to get the Unicode (or ASCII) 
   value of a character at a specific position (or index) in a string.
  */
  
  name1.split('').forEach((item,index)=>{
      arr1[item.charCodeAt(0) - 'a'.charCodeAt(0)]++; 
  })
  name2.split('').forEach((item,index)=>{
      arr2[item.charCodeAt(0) - 'a'.charCodeAt(0)]++;
  })
  
  
  // console.log(arr1,arr2);
  
  let res = true;
  
  for(let i =0 ; i < 26 ;i++){
    if( arr1[i] !== arr2[i]){
      res = false;
      console.log("not convertable");
      break;
    }
  }
  
  if(res){
    console.log("convertable");
  }
}


let ans = isConvertable("aaabb","ababa");
































// function verifyArrays(arr1,arr2){
  
//   if(arr1.length !== arr2.length){
//     return false;
//   }
  
//   let res = true;
  
//   arr1.forEach((num,index)=>{
//       if(num*num !== arr2[index]){
//         res = false;
//       }
//   })
  
//   return res;
// }


// let answer = verifyArrays([1],[1])
// console.log(answer);
// let num1 = [1,7,8];
// let num2 = [4,5,9];

// let i = 0;
// let j = 0;

// let n1 = num1.length;
// let n2 = num2.length;

// let res = [];

// while(i < n1 && j < n2){
//   if(num1[i] <= num2[j]){
//     res.push(num1[i]);
//     i++;
//   }
//   else{
//     res.push(num2[j]);
//     j++;
//   }
// }

// while( i < n1){
//   res.push(num1[i]);
//   i++;
// }

// while( j < n2){
//   res.push(num2[j]);
//   j++;
// }

// console.log(res);
// let n = 5;

// function factorial(a){
//   if(a === 0 || a === 1) return 1;
  
//   return a * factorial(a-1);
// }


// let result = factorial(n);
// console.log(result);

// let arr = [];

// let maxi = -1;
// let count =0;
// arr.forEach((num)=>{
//     if(num === 1){ // number is 1
//         count++;
//     }
//     else{ // number is 0
//         maxi = Math.max(maxi,count);
//         count = 0;
//     }
// })

// maxi = Math.max(maxi,count);

// console.log(maxi);
