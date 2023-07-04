const Koa = require('koa');
const app = new Koa();

// response
app.use(ctx => {

    if(ctx.path === "/") {
        
        ctx.body = "<h1>INDEX PAGE</h1>";
    }
    else if ( ctx.path === "/about") {
        
        ctx.body = "<h1>ABOUT PAGE</h1>";
    }
    else if ( ctx.path === "/contact") {
        
        ctx.body = "<h1>CONTACT PAGE</h1>";
    }else{
        
        ctx.body = "<h1>404 NOT FOUND</h1>";
    }
});



const port = 3000;
app.listen(port, () => {
    console.log(`${port} has been started.`)
});