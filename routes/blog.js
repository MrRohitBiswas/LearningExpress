const express = require("express");
const router = express.Router();
const path = require("path");
const blogs = require("../data/blogs");
const fs = require("fs");

// PORT
const port = 3000;

router.get("/", (req, res) => {
    // res.sendFile(path.join(__dirname, "../templates/index.html"));
    res.render('home')
});

router.get("/blog", (req, res) => {
    // res.sendFile(path.join(__dirname, "../templates/blogHome.html"));
    res.render('blogHome',{
        blogs: blogs
    })
});

router.get("/blogpost/:slug", (req, res) => {
    myBlog = blogs.filter((e)=>{
        return e.slug == req.params.slug;
    })
    // res.sendFile(path.join(__dirname, "../templates/blogPage.html"));    
    res.render('blogPost',{
        myBlog: myBlog
    });
});


module.exports = router;