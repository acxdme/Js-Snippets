/**Proxy Pattern:
●	Type: Structural Pattern
●	Purpose: Provides a placeholder for another object to control access to it.
●	Usage: Used to add a layer of indirection to support controlled access, logging, remote access, or caching for objects.
●	Example: Implementing lazy initialization, access control, or logging for sensitive operations or remote resources.
**/
const Person={
    name:"john",
    age:34,
    email:"srikt@gmail.ock"

}

let personProxy=new Proxy(Person,{
    get:(target,prop)=>{
        console.log("intercept get",prop)
        return target[prop]

    },
    set:(target,prop,value)=>{

        console.log("intercepted in set",value)
        target[prop]=value
        return true
        
    }
})
personProxy.name //intercept get name
personProxy.age="45" //intercepted in set 45
