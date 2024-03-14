const removeDuplicates = array => Array.from(new Set(array));
const findLargestNumber = numbers => Math.max(...numbers);
const calculateFactorial = n => n === 0 ? 1 : n * calculateFactorial(n - 1);
const memoize = fn => { const cache = new Map(); return (...args) => { const key = JSON.stringify(args); return cache.has(key) ? cache.get(key) : (cache.set(key, fn(...args)), cache.get(key)); }; };
const variableName = getRandomNumber();
apple - banana
const getRandomSubset = (array, size) => array.slice(0, size);
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

