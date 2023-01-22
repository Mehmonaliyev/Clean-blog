const pool = require('../config');



const insertPost = async (req, res) => {
    try {
        const {user_name, title, descr } = req.body;
        console.log('req body => ', req.body);
        if (!user_name || !title || !descr) {
            res.render('createPost')
        } else {
            let data =await pool.query("INSERT INTO create_post(user_name, title, descr) VALUES($1, $2, $3)", [user_name, title, descr]);
            res.redirect('/api/home');
        }
    } catch (error) {
        console.log(error);
    }
}
const openPost0 = async (req, res) => {
    let data = await pool.query('SELECT * FROM create_post ORDER BY id DESC LIMIT 3');
    res.render('index', {users: data.rows})
    // res.render('home')
}

const openPost = async (req, res) => {
    res.render('createPost')
}
const openPost2 = async (req, res) => {
    res.render('post')
}

const openPost3 = async (req, res) => {
    res.render('about')
}
const openPost4 = async (req, res) => {
   const data = await pool.query('SELECT * FROM create_post');
    res.render('massage',{massage: data.rows} )
}

const openPost5 = async (req, res) => {
    const data = await pool.query('SELECT * FROM create_post');
     res.render('admin/dashboard',{massage: data.rows} )
 }




module.exports = { insertPost ,openPost, openPost0, openPost2, openPost3, openPost4, openPost5}