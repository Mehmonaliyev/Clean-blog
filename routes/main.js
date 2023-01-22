const {Router} = require('express');
const {openIndex} = require('../controller/main')
const route = Router();

route.get('/home', openIndex);
route.get('/post', openIndex);
route.get('/about', openIndex);
route.get('/massage/:id', openIndex);
route.get('/dashboard', openIndex);
route.get('/dashboard/delete/:id', openIndex);
route.get('/dashboard/edit/:id', openIndex);

 module.exports = route;