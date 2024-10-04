class Singleton {
  constructor() {
    if (Singleton.instance) {
      return Singleton.instance;  // Return the existing instance if it exists
    }
    // Initialize the instance
    this.data = 'Initial data';
    // Store the instance
    Singleton.instance = this;    
    // Implicitly return the new instance (by default in a class constructor)
  }

  getData() {
    return this.data;
  }
  setData(newData) {
    this.data = newData;
  }
}
// Example usage
const instance1 = new Singleton();
const instance2 = new Singleton();

console.log(instance1 === instance2);  // Output: true (same instance)

instance1.setData('Updated data');
console.log(instance2.getData());  // Output: 'Updated data' (instance2 sees the same change)
/**
Key Points:

	•	Singleton.instance is a static property that stores the single instance of the class.
	•	When the constructor is called, it checks if an instance already exists.
     If it does, it returns the existing instance instead of creating a new one.
	•	All instances share the same data since they refer to the same object.
**/
