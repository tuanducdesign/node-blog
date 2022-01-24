// xử lí khi chưa đăng nhập mà đã route/submit vào new post

module.exports=(req, res, next)=>
{
    if(!req.session.userId)
    {
        return res.redirect('/auth/login');
    }
    next();
}























