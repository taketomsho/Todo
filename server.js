const 
    http = require('http'),
    fs = require('fs'),
    ejs = require('ejs'),
    qs = require('querystring');

const settings = require('./settings');
const server = http.createServer();
const template = fs.readFileSync(__dirname + '/publichtml/alltask.ejs','utf-8');
let posts = [];

function displayNew(res){
    fs.readFile(__dirname + '/newtask.html','utf-8',(err,data)=>{
        if(err){
            res.writeHead(400,{'Content-Type': 'text/plain'});
            res.write("not found!");
            res.end();
        }
        res.writeHead(200,{'Content-Type': 'text/html'});
        res.write(data);
        res.end();
        });
}

function displaycss(res){
    fs.readFile(__dirname + '/css/bootstrap.css','utf-8',(err,data)=>{
        if(err){
            res.writeHead(400,{'Content-Type': 'text/plain'});
            res.write("not found!");
            res.end();
        }
        res.writeHead(200,{'Content-Type': 'text/css'});
        res.write(data);
        res.end();
        });
}

function renderAll(posts,res){
    let data =ejs.render(template,{
        posts: posts
    })
    res.writeHead(200,{'Content-Type': 'text/html'});
    res.write(data);
    res.end();
}

server.on('request',(req,res) => {
    if(req.url === '/newtask'){
        if(req.method === 'POST'){
            req.data = "";
            req.on("data",(chunk) => {
                req.data += chunk;
            });
            req.on("end", () => {
                var query = qs.parse(req.data);
                posts.push(query);
                displayNew(res);
            });
        }else{
            displayNew(res);
        }
    }else if (req.url === '/css/bootstrap.css'){
        displaycss(res);
    }else{
        renderAll(posts, res);
    }
});

server.listen(settings.port,settings.post);
console.log("server listening....");