function memoize(fn) {
    const cache = new Map();
  
    return function (...args) {
      const key = JSON.stringify(args); 
  
      if (cache.has(key)) {
        return cache.get(key);
      } else {
        
        const result = fn(...args);
        cache.set(key, result);
        return result;
      }
    };
  }
  
  
  function add(a, b) {
    console.log("Додаю:", a, b);
    return a + b;
  }
  
  const memoizedAdd = memoize(add);
  
  console.log(memoizedAdd(1, 2));
  console.log(memoizedAdd(1, 2));
  console.log(memoizedAdd(3, 4));
  console.log(memoizedAdd(1, 2));