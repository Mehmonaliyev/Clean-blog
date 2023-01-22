const {Router} = require('express');
const {insertPost, openPost, openPost0, openPost2, openPost3, openPost4, openPost5} = require('../controller/post')
const route = Router();

route.post('/create-post', insertPost);
route.get('/create-post', openPost);
route.get('/home', openPost0);
route.get('/post', openPost2);
route.get('/about', openPost3);
route.get('/massage', openPost4);
route.get('/admin/dashboard', openPost5);

 module.exports = route;