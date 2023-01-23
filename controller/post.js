const pool = require('../config');


// inset into create_post
const insertPost = async (req, res) => {
    try {
        const {user_name, title, descr } = req.body;
      
        // console.log('req body => ', req.body);
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

// update
const insertPost2 = async (req, res) => {
    try {
        const { user_name, title, descr, id} = req.body;
        console.log(req.body);
        if (!user_name || !title || !descr) {
            res.render('api/admin/edit')
        } else {
            let data =await pool.query(`UPDATE create_post SET user_name = $1, title=$2, descr=$3  WHERE id = $5`, [user_name, title, descr, id]);
            res.redirect('/api/admin/dashboard');
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

// massage
const openPost4 = async (req, res) => {
    const {id} = req.body;
    // console.log("req.body=> "+id);
   const data = await pool.query('SELECT * FROM create_post WHERE id = ($1)', [req.params.id]);
   res.render('massage',{massage: data.rows} )
}

// dashboard
const openPost5 = async (req, res) => {
    const data = await pool.query('SELECT * FROM create_post');
     res.render('admin/dashboard',{massage: data.rows} )
 }

//  delete
 const openPost6 = async (req, res) => {
    pool.query('DELETE FROM create_post WHERE id = ($1)', [req.params.id]);
    res.redirect('/api/admin/dashboard');
 }

//  edit
 const openPost7 = async (req, res) => {
        const {id} = req.body;
        const data = await pool.query('SELECT * FROM create_post WHERE id = ($1)', [req.params.id]);
        res.render('admin/edit', {massage: data.rows});
        // res.json(data.rows)
 }



module.exports = { insertPost, insertPost2 ,openPost, openPost0, openPost2, openPost3, openPost4, openPost5, openPost6, openPost7}