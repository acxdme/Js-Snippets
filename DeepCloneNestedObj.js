let obj = {
  name : "ayush",
  properties : {
      age : 26,
      height : 170,
      email : {
         value : "ac@gmail.com"
      }
  },
  propertyArr : [1,2,3,4,[5,6,[7,8]]]
}

function deepClone (obj){
  
  
  //base-case
  if(obj === null || typeof obj !== 'object'){
    return obj;
  }

  // Object
  if(obj instanceof Object && !Array.isArray(obj)){
    const objectClone = {}; // ref 
    for(let key in obj){
       objectClone[key] = deepClone(obj[key]);
    }
    
    return objectClone;
    
  }
  
  // Array
  if(Array.isArray(obj)){
    let arrayClone = [] // ref 
    for(let i =0 ; i < obj.length ; i++){
      arrayClone[i] = deepClone(obj[i]);
      
    }
    
    return arrayClone;
  }
  
}

console.log(deepClone(obj));
