const http = require('http');

const server = http.createServer( (req,res)=>{
   if(req.url === '/'){
    res.end('Hello to our webpage')
   }

   if(req.url === '/about'){
       res.end('this is the page for about section if you want to come back there is button under me')
       
   }

   res.end(`
       <h1>Oops there was error</h1>
       <a href = "/">back home </a>
       `)
   
    
    
})

server.listen(5000)