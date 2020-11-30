export const compose = (...functions) => (args) => functions.reduce((arg, fn) => fn(arg), args);
export const sleep = (ms) => new Promise((res) => setTimeout(res, ms));
