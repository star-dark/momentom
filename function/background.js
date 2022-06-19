const img = ["1.jpg", "2.jpg", "5.jpg", "8.jpg", "9.JPG"];
const backgroundImg = document.createElement("img")
const ranimg = img[Math.floor(Math.random() * img.length)];
backgroundImg.src = `./img/${ranimg}`;
document.body.appendChild(backgroundImg);