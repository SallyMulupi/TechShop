const http=require('node:http')
const fs=require('node:fs')
const url=require('node:url')
const replaceTemplate=require('../modules/replaceTemplate')

const productOverview=fs.readFileSync(`${__dirname}/product-overview.html`,'utf-8')
const productCard=fs.readFileSync(`${__dirname}/product-card.html`,'utf-8')
const productDetails=fs.readFileSync(`${__dirname}/product-details.html`,'utf-8')
const data=fs.readFileSync(`${__dirname}/../Data/data.json`,'utf-8')
const dataObj=JSON.parse(data)



const server=http.createServer((req,res)=>{
    // console.log(req.url);
    // console.log(url.parse(req.url,true));
    const {query,pathname}=url.parse(req.url,true);
    
    if(pathname==='/' || pathname==='/overview'){
        res.writeHead(200, {'Content-Type': 'text/html'});
        const cardHTML=dataObj.map((el)=>replaceTemplate(productCard,el)).join('');
        const output=productOverview.replace('{{PRODUCT_CARDS}}',cardHTML)
         res.end(output)
        console.log(cardHTML);
            
    }else if(pathname==='/product'){
        console.log(query);
        const product=dataObj[query.id];
        const output=replaceTemplate(productDetails,product);
        res.end(output)
    }else if (pathname==='/api'){
        res.end("This is our API")
        }else{
            res.writeHead(404, {'Content-Type': 'text/html'});
            res.end("<h1>Page Not Found</h1>")
        }
    
   
    
        

    

 })
//start server
const port = 5000;
server.listen(port, ()=>{
    console.log(`Server is running on http://localhost:${port}`);
    
});
