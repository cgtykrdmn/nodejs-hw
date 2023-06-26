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