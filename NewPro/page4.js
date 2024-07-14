var a = document.getElementById("box1");
var b = document.getElementById("box2");
var c = document.getElementById("box3");
var i = document.getElementById("image")

a.addEventListener("click",()=>{
    i.src = "./images/image.png";
})

b.addEventListener("click",()=>{
    i.src = "./images/image1.jpg";
})

c.addEventListener("click",()=>{
    i.src = "./images/image2.jpg";
})