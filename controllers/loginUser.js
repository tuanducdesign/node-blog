const User=require('../models/User');

module.exports=(req,res)=>
{
    User.findOne({ userName:req.body.userName },(error,user)=>
    {
        if(user)
        {
            if(user.password==req.body.password)
            {
                req.session.userId=user._id;
                res.redirect('/');
            }
            else
            {
                res.redirect('/auth/login')
            }
        }
        else
        {
            res.redirect('/auth/login');
        }
    })
}




