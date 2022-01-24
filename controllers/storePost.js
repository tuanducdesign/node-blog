const BlogPost=require('../models/BlogPost');// kết nối với collection BlogPost

module.exports=(req,res)=>
{
    BlogPost.create(req.body,(error,post)=>
    {
        res.redirect('/');
    })
}











