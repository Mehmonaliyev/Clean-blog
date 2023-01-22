const {Router} = require('express');
const {insertPost,insertPost2, openPost, openPost0, openPost2, openPost3, openPost4, openPost5, openPost6, openPost7} = require('../controller/post')
const route = Router();
// /api/admin/dashboard/edit
route.post('/create-post', insertPost);
route.post('/admin/dashboard', insertPost2);

route.get('/create-post', openPost);
route.get('/home', openPost0);
route.get('/post', openPost2);
route.get('/about', openPost3);
route.get('/massage/:id', openPost4);
route.get('/admin/dashboard', openPost5);
route.get('/admin/dashboard/delete/:id', openPost6);
route.get('/admin/edit/:id', openPost7);



 module.exports = route;