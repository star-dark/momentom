const img = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.JPG","10.JPG"];
const backgroundImg = document.createElement("img")
const ranimg = img[Math.floor(Math.random() * img.length)];
backgroundImg.src = `./img/${ranimg}`;
document.body.appendChild(backgroundImg);