// Hook Babel into all require calls for server app so that it can be written
// using ES6-style javascript code.
require('babel/register');  
require('./app.js');
