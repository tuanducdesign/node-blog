module.exports=(req,res,next)=>
{
    if(req.body.title==''||req.body.body==''||req.body.userName=='')
    {
        return res.redirect('/posts/new');
    }
    next();
}
























