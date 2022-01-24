const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const BlogPostSchema = new Schema({
    title: String,
    body: String,
    userName:String,
    datePosted:{
        type:Date,
        default:new Date()
    }
});
//Export
const BlogPost = mongoose.model('BlogPost',BlogPostSchema);  //quyết định tên collection,collection nào sẽ được sử dụng
module.exports = BlogPost





/* Models là thư mục sẽ chứa các model(đại diện cho các Collection==table trong Database)
Tạo các collection cụ thể từ khuôn mẫu các model


Schema sẽ định nghĩa các thuộc tính (các fields) của document
Có thể hiểu một cách ngắn gọn rằng khi khởi tạo new Schemas là bạn đang khởi tạo một khuân 
mẫu của collection(table) và dùng nó để tạo ra các document 

Schema -> collection và collection -> document
*/



















