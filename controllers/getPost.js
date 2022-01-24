const BlogPost=require('../models/BlogPost');// gọi tới collection blogpost

module.exports=(req,res)=>
{
    BlogPost.findById(req.params.id,(error,post)=>
    {
        res.render('post', {
            post:post
        })
    })
}