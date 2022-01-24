const mongoose = require('mongoose')
const BlogPost = require('./models/BlogPost')  //lấy khuôn

mongoose.connect('mongodb://localhost/test_my_database', { useNewUrlParser: true });//Kết nối với database

//CRUD
// BlogPost.create({    
//     title: 'Nodejs cơ bản',
//     body: 'Nếu bạn đam mê với Javascript và muốn khám phá cách xây dựng ứng dụng với Node.js thì đây là cuốn sách dành cho bạn.'
// }, (error, blogpost) => {
//     console.log(error, blogpost)
// })

// BlogPost.create({
//     title: 'Javascript nâng cao',
//     body: 'Nếu bạn đam mê với Javascript và muốn khám phá cách xây dựng ứng dụng với Node.js thì đây là cuốn sách dành cho bạn.'
// }, (error, blogpost) => {
//     console.log(error, blogpost)
// })

// BlogPost.find({}, (error, blogspot) => {
//     console.log(error, blogspot)
// })
BlogPost.find({
    title: 'Nodejs cơ bản'
   }, (error, blogspot) => {
    console.log(error, blogspot)
   })

const id='6102b92bb486171004e43c60';
BlogPost.findByIdAndUpdate(id, {
    title: 'Updated title5'
   }, (error, blogspot) => {
    
   })
   
BlogPost.findByIdAndDelete(id,(error,blogpost)=>
{
    
})

    
   





















