// xử lí khi đăng nhập rồi mà route/submit vào đăng kí/đăng nhập

module.exports=(req,res,next)=>
{
    if(req.session.userId)
    {
        return res.redirect('/');
    }
    next();
}