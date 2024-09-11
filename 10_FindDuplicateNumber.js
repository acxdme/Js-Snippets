// Using Map method

var findDuplicate = function(nums) {
    let myMap =  new Map();
    let n = nums.length;
    for(let i =0 ; i < n ;i++){
        if(!myMap.has(nums[i])){
            myMap.set(nums[i],1);
        }
        else{
            return nums[i];
        }
    }
    
};
