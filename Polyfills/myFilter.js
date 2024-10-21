/**

filter((element, index, array) => { 

} )
**/

Array.prototype.myFilter = function(callback,context){
   let arr = this;
   let result = [];
   for(let i = 0 ; i < arr.length ; i++){
     if(callback.call(context,arr[i],i,this)){
       result.push(arr[i]);
     }
   }
   
   return result;
  
}

let ans = [1,2,3].myFilter((item,index)=>{
  return item % 2 == 1;
});

console.log(ans);
