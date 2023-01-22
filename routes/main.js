const {Router} = require('express');
const {openIndex} = require('../controller/main')
const route = Router();

route.get('/home', openIndex);
route.get('/post', openIndex);
route.get('/about', openIndex);
route.get('/massage', openIndex);
route.get('/dashboard', openIndex);

 module.exports = route;