const {Router } = require('express');
const {insertPost} = require('../controller/post')
const route = Router()

route.use('/api', require('./post'));
route.use('/api', require('./main'));



module.exports = route;