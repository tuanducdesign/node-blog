/* 
what exactly is REST? For starters, REST stands for Representation State Transfer and is just a 
fancy way of saying that a server responds to create, read, update, and delete requests in a standard way

REST chỉ là một cách nói hoa mỹ để nói về việc server response tới các require(tạo, đọc, cập nhật, xóa) 
theo cách tiêu chuẩn

CRUD là gì? Từ khóa CRUD là viết tắt của 4 hành động: Create - Read - Update - Delete vào cơ sở dữ
liệu.
module là 1 file dùng để thực hiện 1 chức năng nào đó
    package là một hay nhiều modules(thư viện) được gói lại với nhau 
    nói đơn giản là ta tạo collection mới từ khuôn mẫu model
    schema trong model sẽ quy định các thuộc tính(các field) trong document của collection

    Cookie là thông tin được lưu trên trình duyệt(client)

    session là một phần thông tin được lưu trữ từ phía máy chủ(server) của trang web.

    Mặc dù cookie và session là khác nhau, nhưng giữa chúng có mối liên quan đến nhau.
    Session có thể lưu trữ tên người dùng và mật khẩu của bạn. Khi bạn nhận được một cookie 
    lưu trữ trên máy tính của mình, cookie này sẽ có ID cụ thể liên kết đến session trong lần 
    tiếp theo khi bạn online. Điều này xảy ra khi bạn đánh tích chọn tùy chọn Remember me, trong 
    quá trình nhập tên người dùng và mật khẩu để đăng nhập. Khi bạn mua sắm trên các cửa hàng trực tuyến, 
    các thông tin giỏ hàng của bạn cũng được lưu trữ trên các cửa hàng, ngay cả khi bạn đã đăng xuất.

    truy cập dữ liệu của session bằng req.session
    req.session.cookie={} 
    Mỗi session có một đối tượng cookie duy nhất đi kèm với nó. Điều này cho phép thay đổi session 
    cookie cho mỗi khách truy cập.

    Hàm use() là một API của ExpressJS, nó cho phép chúng ta đăng ký một middleware.
    Vì vậy, khi trình duyệt tạo một request tới server, ExpressJS sẽ thực thi tất cả những
    middleware được đăng ký bởi hàm use() trước khi xử lý request(thực hiện các middleware riêng của request) đó

                            const a=(req,res,next)=>
                            {
                                console.log(1);   
                                next();
                            }
                            const b=(req,res,next)=>
                            {
                                console.log(2);   
                                next();
                            }

                            app.use(a,b);
    VD:
    Nếu chúng ta sử dụng hàm app.use(validateMiddleWare) để apply hàm middleware này
    thì nó sẽ được gọi mỗi khi có bất kỳ request nào tới server, mà như thế thì không đúng.
    Chúng ta chỉ cần gọi validation middleware mỗi khi tạo bài post mới mà thôi. Vì vậy,
    mình sẽ apply hàm middleware thông qua URL cụ thể, như sau:

                app.use('/posts/new',validateMiddleWare)


req (request) là đối tượng mà nó nhận được từ client
(trình duyệt chẳng hạn), còn res (response) là đối tượng mà server sẽ trả về cho trình
duyệt. Chúng ta có thể làm bất cứ điều gì với hai đối tượng này

BẤT ĐỒNG BỘ: TRANG 21

muốn truy cập các thư mục thì phải thông qua router nhưng nếu khai báo là thư mục tĩnh thì k cần router
Tham số --save:mục đích là sau khi cài đặt xong vào thư mục node_modules thì
cũng thêm thông tin vào mục dependencies trong package.json. Với việc thêm
vào dependencies, sau này người khác muốn cài đặt các thư viện cần thiết cho
dự án thì cần gõ: npm install là nó tự cài đặt tất cả dependencies được liệt kê
trong package.json
 Tham số -dev:Có những thư viện chỉ dùng để hỗ trợ phát triển dự án, còn khi triển
khai thật ra thị trường thì không cần. Đó là lý do mà phần dependencies của
package.json được chia làm 2 phần: "dependencies" và "devDependencies".
Tham số -dev là để thêm vào "devDependencies"

Với những kiểu tương đối như: css/clean-blog.min.css thì khi trình duyệt đọc tệp html
này sẽ tự động nối thêm domain vào để tạo thành một link hoàn chỉnh:
http://<domain>/css/clean-blog.min.css

mongoose là một thư viện có tác dụng như cầu nối giữa nodejs và mongodb

    ------------------------------------------------------------------
Để có thể xử lý được logic trước khi trả về cho client, ví dụ như cần xác thực request
xem request này có hợp lệ không... thì bắt buộc bạn phải sử dụng routes.

Khi bạn truy cập vào một địa chỉ mà không có tên tệp tin (ví dụ https://timoday.edu.vn/html/),
 website sẽ tự động hiển thị tệp tin mặc định. Tệp tin mặc định phổ biến là index.html, default.html 

Template Engines là công cụ giúp chúng ta tách mã HTML thành các phần nhỏ hơn mà chúng ta có thể sử dụng 
lại trên nhiều tập tin HTML.

/*Thông qua api:app.set('view engine','ejs'), chúng ta thông báo cho ExpressJS biết
template engine là EJS, rằng các file có đuôi là .ejs cần phải render bởi EJS package

Models là thư mục sẽ chứa các model(đại diện cho các Collection==table trong Database)
Tạo các collection cụ thể từ khuôn mẫu các model
Mỗi model tương ứng với một collection
Schema sẽ định nghĩa các thuộc tính (các fields) của document
Có thể hiểu một cách ngắn gọn rằng khi khởi tạo new Schemas là bạn đang khởi tạo một khuân 
mẫu của collection(table)


Collection là một nhóm các documents của MongoDB
Một document là một tập hợp các cặp key-value. Documents có schema động. Schema động có nghĩa là 
documents trong cùng một collection không cần phải có cùng một nhóm các fields hay cấu trúc giống nhau

nói đơn giản là schema quy định các thuộc tính (các fields) của document trong collection


body-parser: Lấy được dữ liệu nhập vào (như trong req.body)
req.body: object chứa các cặp key-value của dữ liệu được đệ trình trong phần body của Request. 
Theo mặc định, nó là undefined, và được sinh khi bạn sử dụng một Middleware để parse phần body của request 
(ví dụ body-parser)

Thẻ <form> cơ bản có hai thuộc tính cần lưu tâm là action và method:

action: thuộc tính để thiết lập URL, là địa chỉ mà dữ liệu của form gửi đến (submit đến, post đến). Thiếu tham số này thì action bằng URL đang truy cập.
method: thuộc tính để thiết lập HTTP Method
enctype='multipart/form-data là một loại mã hóa cho phép các tệp được gửi qua POST 

Phương thức res.redirect([status,] path): chuyển hướng tới một đường truyền path cụ thể

Phương thức res.render(view [, locals] [, callback])
Truyen mot BIẾN CỤC BỘ toi view
res.render('user', { name: 'Tobi' }, function(err, html) {
// ...
});

CONDITIONAL STATEMENT WITH EJS:
So we can add simple JavaScript code in our EJS file. This code will check if the 
username in the URL is Danny or not, then will display a paragraph. Here is the code below for our Ejs file:

<h1>Hey <%= username.toUpperCase() %>, Welcome to Our site</h1>
<% if(username.toLowerCase() === "danny"){ %>
<p>Danny you are Beautiful!</p>
<% } else { %>
<p>You are not Danny, you are not Beautiful!</p>
<% } %>
You can notice that we have put JavaScript code inside Ejs tags <%> and we 
have not used equal sign this time like we have used in our previous lesson. 
Here is how the output would look like:

nếu để là <%= %> thì sẽ render ra giao diện còn để <% %> thì chỉ chạy code javascript thôi

middleware là một functions cho phép ExpressJS thực hiện một công việc sau
khi nhận được một request từ client, nó sẽ thực hiện "xào nấu" để có được
một kết quả có thể trả về cho client hoặc cho một middleware tiếp theo.
Chúng ta có thể có nhiều middleware, và chúng sẽ thực hiện theo tuần tự mà chúng ta
khai báo

middleware là một functions cho phép ExpressJS thực hiện một công việc sau
khi nhận được một request từ client
Để áp dụng middleware vào route khi tạo bài post thì cần đặt middleware trước
newPostController là được.
app.get('/posts/new', authMiddleware, newPostController)


const exMiddleWare1=(req,res,next)=>
{
    console.log('123');
    next();
}

const exMiddleWare2=(req,res,next)=>
{
    console.log('456');
    next();
}

app.use('/about', exMiddleWare1);
app.use('/about', exMiddleWare2);

Global Objects là các object mà NodeJS cung cấp sẵn cho chúng ta trong nhân của NodeJS và trong các module. Bạn không cần phải khai bái hay include nó từ các thư viện khác mà chỉ cần gọi trực tiếp nó trong dự án
 

*/

//                              MVC (Model-View-Controller)

// chỗ login/logout/register cần phải add cả logic nữa chứ k thể xử lí mỗi giao diện không.
const express=require('express');
const app=new express();
const path=require('path');
const ejs = require('ejs');
app.set('view engine', 'ejs');

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }))

// kết nối với database
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/my_database', {useNewUrlParser: true}) 
const BlogPost = require('./models/BlogPost');
const User=require('./models/User');
const expressSession = require('express-session');
app.use(expressSession({
    secret: 'keyboard cat'
   }))

global.loggedIn=null;
app.use('*',(req,res,next)=>// áp dụng với mọi request
{
    loggedIn=req.session.userId;
    next();
})
const a=(req,res,next)=>
{
    console.log(1);   
    next();
}
const b=(req,res,next)=>
{
    console.log(2);   
    next();
}

app.use(express.static('public'))
//middleWare import
const validateMiddleWare=require('./middleWare/validation');
const newPostMiddleWare=require('./middleWare/authMiddleWare');//logic
const redirectAuthMiddleWare=require('./middleWare/redirectAuthMiddleWare');//logic
app.use('/posts/store', validateMiddleWare);



//controller import
const homeController=require('./controllers/home');
const getPostController=require('./controllers/getPost');
const storePostController=require('./controllers/storePost');
const registerController=require('./controllers/register'); 
const storeUserController=require('./controllers/storeUser');
const loginController=require('./controllers/login');
const loginUserController=require('./controllers/loginUser');
const newPostController=require('./controllers/newPost');
const logoutController=require('./controllers/logout');

app.listen(3000,()=>
{
    console.log('listening at port:', 3000);
})

app.get('/',a,b,homeController);

app.get('/index', homeController);

app.get('/about', (req, res) =>
{
    res.render('about');
})
app.get('/contact', (req, res) =>
{
    res.render('contact');
})

app.get('/post/:id', getPostController);
   
app.get('/posts/new', newPostMiddleWare, newPostController);

app.get('/auth/register', redirectAuthMiddleWare, registerController);  //REST api

app.get('/auth/login',redirectAuthMiddleWare, loginController);
app.get('/auth/logout', logoutController);

app.post('/posts/store',newPostMiddleWare, storePostController); 
app.post('/users/store',redirectAuthMiddleWare, storeUserController);
app.post('/users/login',redirectAuthMiddleWare, loginUserController);

/* app.post('/users/login', (req,res)=>
{
    console.log(req.body);  //resource: req.body
})  */






















// const id="6107f48b3fb5f93ba04eeb3e";
// User.findByIdAndDelete(id,(error,blogpost)=>{});














