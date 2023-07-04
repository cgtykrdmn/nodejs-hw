### ODEV-1 - Node.JS Komut Satiri Kullanimi

<details>
<summary>Click to show CODE</summary>

const pi = Math.PI;
let givenDia = process.argv.slice(2)

function callArea(diameter){

    let area = pi*diameter*diameter;
    console.log("Diameter: " + diameter);
    console.log("Area: "  + area);

}
callArea(givenDia);
</details>
<br />

### ODEV-2 - Node.JS Post Siralama ve Ekleme

<details>
<summary>Click to show CODE</summary>

const posts = [
  { name: "Post 1", author: "Yazar 1" },
  { name: "Post 2", author: "Yazar 2" },
  { name: "Post 3", author: "Yazar 3" },
];

const listPosts = () => {
  posts.map((post) => {
    console.log(post.name);
  });
};

const addPost = (newPost) => {
  const promise1 = new Promise((resolve, reject) => {
    posts.push(newPost);
    resolve(posts);
    //reject('BIR HATA OLUSTU');
  });

  return promise1;
};

async function showPosts() {
  try {
    await addPost({ name: "Post 4", author: "Yazar 4" });
    listPosts();
  } catch (error) {
    console.log(error);
  }
}

showPosts();

</details>
<br />

### ODEV-3 - Node.JS Daire Moduler Dosyasi

<details>
<summary>Click to show CODE 1</summary>
  function circleArea(pi, r) {
    let area = pi*r*r;
    console.log("Circle Area: " + area);
}

function circleCircumference(pi, r){
    let circumference = 2*pi*r;
    console.log("Circle Circumference: " + circumference);
}

module.exports = {
    circleArea,
    circleCircumference
}

</details>

<details>
<summary>Click to show CODE 2</summary>

  const { circleArea, circleCircumference  } = require('./circle.js');

const pi = Math.PI;

circleArea(pi,2);
circleCircumference(pi,2);


</details>

<br />

### ODEV-4 - Node.JS FS MODUL CALISMASI

<details>
<summary>Click to show CODE</summary>

const fs = require("fs");

// DOSYA EKLEME

fs.writeFile('employees.json', '{"name": "Employee1 name","salaray": 2000}', 'utf8', (err, data) => {
    if (err) console.log(err);
    console.log("JSON DOSYA BASARILI BIR SEKILDE OLUSTURULDU")
}); 

// DOSYA OKUMA

fs.readFile("employees.json", "utf8", (err, data)=>{
    if (err) console.log(err);
    console.log(data);
    console.log("DOSYA OKUNDU");
});

// VERİ EKLEME

fs.appendFile('employees.json', '\n{"name": "Employee2 name","salaray": 4000}', 'utf8', (err, data) => {
    if (err) console.log(err);
    console.log("JSON DOSYASINA VERI EKLENDI")
});

// DOSYA SILME

fs.unlink('employees.json', (err, data) => {
        if (err) console.log(err);
        console.log("DOSYA SILINDI")
    }); 


</details>


<br />

### ODEV-5 - Node.JS KENDI WEB SUNUCUMUZU YAZMAK

<details>

<summary>Click to show CODE</summary>

const http = require("http");

const server = http.createServer((req, res)=> {

    const url = req.url;
    console.log(url);

    if(url == "/") {
        res.writeHead(200, {"Content-Type": "text/html"});
        res.write("<h1>INDEX PAGE</h1>");
        res.write("<h2>INDEX PAGE-xxx</h2>");
        res.write("<h2>INDEX PAGE-xxxx</h2>");
    }
    else if ( url === "/about") {
        res.writeHead(200, {"Content-Type": "text/html"});
        res.write("<h1>ABOUT PAGE</h1>");
        res.write("<h2>ABOUT PAGE-xxx</h2>");
        res.write("<h2>ABOUT PAGE-xxxx</h2>");
    }
    else if ( url === "/communication") {
        res.writeHead(200, {"Content-Type": "text/html"});
        res.write("<h1>COMMUNICATION PAGE</h1>");
        res.write("<h2>COMMUNICATION PAGE-xxx</h2>");
        res.write("<h2>COMMUNICATION PAGE-xxxx</h2>");
    }else{
        res.writeHead(404, {"Content-Type": "text/html"});
        res.write("<h1>404 NOT FOUND</h1>");
    }

    res.end();
});

const port = 3000; // port 5000 already in use

server.listen(port, ()=> {

    console.log(`${port} has been started.`);

});


</details>

</br>


### ODEV-6 - Node.JS KENDI WEB SUNUCUMUZU YAZMAK - Koa.JS

<details>

<summary>Click to show CODE</summary>


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


</details>