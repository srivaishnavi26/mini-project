const express = require('express');
const path = require('path');
const bodyParser = require ('body-parser');
const knex = require ('knex');

const db = knex({
    client: 'pg',
    connection:{
        host: '127.0.0.1',
        user: 'postgres',
        password: 'vaishu2614',
        database: 'loginform'
    }
})

const app = express();

let initialPath = path.join(__dirname,"public");

app.use(bodyParser.json());
app.use(express.static(initialPath));

app.get('index.html', (req, res) =>{
    res.sendFile(path.join(initialPath, "index.html"))
})

app.get('ui.html', (req, res) =>{
    res.sendFile(path.join(initialPath, "ui.html"))
})


app.post('ui.html', (req, res) =>{
    const { name, email, password } = req.body;

    if(!name.length || !email.length || !password.length){
        res.json('please fill all the fields');
    }else{
        db("users").insert({
          name: name,
          email: email,
          password: password  
        })
        .returning(["name","email"])
        .then(data => {
            res.json(data[0])
        })
        .catch(err=>{
            if(err.details.includes('already exsists')){
                res.json('email already exsists');
            }
        })
    }
})

app.post('ui.html',(req, res) =>{
    const { email, password } = req.body;

    db.select('name','email')
    .from('users')
    .where ({
        email: email,
        password: password
    })
    .then(data => {
        if(data.length){
            res.json(data[0]);
        } else{
            res.json('email or password is incorrect');
        }
    })
})

app.listen(3000,(req, res) => {
    console.log('listening on port 3000......')
})

const logOut = document.querySelector('.logout');

logOut.onload = () => {
  sessionStorage.clear();
  location.reload();
};
