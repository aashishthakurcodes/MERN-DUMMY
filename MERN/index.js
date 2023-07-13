require('dotenv').config()
const express = require("express");
const cors=require('cors')
const path=require('path')

//express Server
const server = express();
//Body Parser
server.use(express.json());
server.use(cors())
//Static hosting
server.use(express.static(process.env.PUBLIC_dir));

const router=express.Router();
const mongoose = require('mongoose');
const prodctControl =require('./Controller/ProductControl');
const routes =require('./routes/router')
const userData=require('./routes/userRoute')
console.log(userData);


//Mongoose Connection
main().catch(err => console.log(err));

async function main() {
  try {
    await mongoose.connect(
      'mongodb+srv://at282844:h0yFucjnUc2UPqZf@cluster0.wsdbqz4.mongodb.net/newDatabase?retryWrites=true&w=majority'
    );
    console.log('Mongoose Connection Established');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
}






//MIDDLEWARES
//Application layer middleware
server.use("/", (req, res, next) => {
  //Logger middlware is used to get more info abput requests
  //get is used to get more info from headers
  console.log(
    req.ip,
    req.hostname,
    req.method,
    req.get("User-Agent"),
    new Date()
  );
  // console.log((res.end("Response send successfully")));
  next();
});
server.use('/carts',routes.router);
server.use('/user/',userData.router);
server.use('*',(req,res)=>{
  res.sendFile(path.resolve(__dirname,'build','index.html'))
})

console.log(process.env.DB_PASSWORD);
//MOdel View Controller (MVC)

//Router level middlewares
// const auth=(req,res,next)=>{
//    // console.log(req.query);
//    if(req.body.password=='123'){
//     res.send("Welcome you are authorized user")
//       next()
//    }else{

//       res.sendStatus(401)
//    }
// }

//Rest API READ API (CRUD)

server.listen(5000, () => {
  console.log("Server started");
});




// const index =fs.readFileSync('index.html','utf-8');

//static Hosting   res.end(index); const index =fs.readFileSync('index.html','utf-8')

//Routing  switch(req.url){
//   case "/":
//     res.setHeader('Content-Type','text/html');
//     res.end(index);
//     break;

//     case "/api":
//         res.setHeader('Content-Type','application/json');
//         res.end(jsonfile);
//         break;
//      default:
//         res.writeHead(404, { 'Content-Type': 'text/plain' });
//         res.end('404 Not Found');
//         break;
//  }

//Server created using express
// res.json(jsonfile)
// res.send("Hello wolrd");
// res.sendFile('\Users\bhard\OneDrive\Desktop\AA\MERN\index.html')

// 2.49

// 4 //Rest API READ API (CRUD)
//createUser()
//getdata() an d
