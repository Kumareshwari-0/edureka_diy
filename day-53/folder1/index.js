let http=require("http")
let url=require("url")

let server=http.createServer((req,res)=>{
    let parse=url.parse(req.url,true)
    if(parse.pathname==="/"){
        res.writeHead(200,{"content-type": "text/html"})
        res.end(`<h1>This is home page</h1>`)
    }
    else{
        res.end(`<h1>this is 404 error</h1>`)
    }
})
server.listen("3000",()=>{
    console.log("server running on http://localhost:3000");
})