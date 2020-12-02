export const compose = (...functions) => (args) => functions.reduce((arg, fn) => fn(arg), args);
export const sleep = (ms) => new Promise((res) => setTimeout(res, ms));
export const capitalize = (text) => `${text.charAt(0).toUpperCase()}${text.slice(1)}`;
export const getIdFromPathname = (pathname) => pathname.split('/')[pathname.split('/').length - 1];
