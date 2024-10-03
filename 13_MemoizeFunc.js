function memoize(fn) {
  const cache = new Map();  // Using Map for better performance with non-string keys

  return function(...args) {
    const key = JSON.stringify(args);  // Convert arguments to a string key
    if (cache.has(key)) {
      return cache.get(key);  // Return cached result if it exists
    }

    const result = fn.apply(this, args);  // Call the original function
    cache.set(key, result);  // Store the result in cache
    return result;
  };
}
