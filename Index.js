const express = require('express');
const dot = require('dotenv');
const app = express();
const path = require('path')
const { engine } = require('express-handlebars');
const server = require('./routes/server')
const pool = require('./config');


dot.config();

// app config
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }))


app.get('/', async (req, res) => {
    let data = await pool.query('SELECT * FROM create_post ORDER BY id DESC LIMIT 3');
    res.render('index', { users: data.rows })
    // res.render('index')
})

// app.get('/about', (req, res)=>{
//     res.render('about')
// })


// app.get('/post', (req, res)=>{
//     res.render('post')
// })

// app.get('/create-post', (req, res)=>{
//     res.render('createPost')
// })

// app.get('/api/admin/dashboard/:id', async (req, res) => {
  
// })
app.get('/api/add/home/add/:id', async (req, res) => {
    const add = [req.params.id];
    res.send(add);
})

app.use('/', server)


app.engine('.hbs', engine({ extname: '.hbs' }));
app.set('view engine', '.hbs');
app.set('views', './views');


const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log('Server => ' + PORT);
})