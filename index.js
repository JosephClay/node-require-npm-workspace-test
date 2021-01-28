// to reproduce:
// 1. press ctrl+shift+1
// 2. type @custom

// expected output
const message = require('@custom/test')
// or
// import message from '@custom/test';
console.log(message); // hello world!