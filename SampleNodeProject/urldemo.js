const url = require('node:url'); // object

const myURL =
  url.parse('https://user:pass@sub.example.com:8080/p/a/t/h?query=string#hshvalue');
  console.log(myURL);
  
  const myURL2 =
  url.parse('https://en.wikipedia.org/wiki/Sachin_Tendulkar#References');
  console.log(myURL2);

  const urlObject=new URL('https://user:pass@sub.example.com:8080/p/a/t/h?query=string#hash')
  console.log(urlObject.port);
  console.log(urlObject.search);
  console.log(urlObject.hash);
  console.log(urlObject.href);
  console.log(urlObject.hostname);
  console.log(urlObject.pathname);
  console.log(urlObject.origin);
  console.log(urlObject.password);

