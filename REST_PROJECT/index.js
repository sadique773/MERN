const express = require('express')
const app = express()
const port = 3000
const path = require("path");

app.use(express.urlencoded({extended:true}));

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")));


let posts = [
    {

        id:"1a",
        Name:"Sadique Hussain",
        username:"Sadique7080",
        content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam consequatur quas a earum eius ut commodi fuga, sed error nemo.",

    },
    {
      id:"1b",
        Name:"Huzefa Khanam",
        username:"Huzefa773",
        content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam consequatur quas a earum eius ut commodi fuga, sed error nemo.",

    },
    {
      id:"1c",
      Name:"Dr Aarif",
        username:"Aarif9934",
        content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam consequatur quas a earum eius ut commodi fuga, sed error nemo.",

    }
]

app.get('/posts', (req, res) => {
  res.render('index',{posts})
})

app.get('/posts/new', (req, res) => {
  res.render('new')
})

app.post('/posts', (req, res) => {
  let {Name,username,content} = req.body;
  posts.push({username,Name,content}) 
  res.redirect('/posts')
})

app.get("/posts/:id", (req, res) => {
  let {id} = req.params;
  let post = posts.find((p)=> id === p.id)
  console.log(post)
  res.render("show",{post})
}) 


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

