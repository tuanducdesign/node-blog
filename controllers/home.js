const BlogPost=require('../models/BlogPost.js');

module.exports=(req,res)=>
{
    BlogPost.find({},(error,posts)=>
    {
        console.log(req.session);
        res.render('index',{
            blogposts:posts
        })
    })
}



















