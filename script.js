var imgs = [
  document.getElementById('image1'),
  document.getElementById('image2'),
  document.getElementById('image3'),
  document.getElementById('image4'),
  document.getElementById('image5'),
]
 var updimgs = {
   image1 : "image/image1_2.jpg",
   image2 : "image/image2_2.jpg",
   image3 : "image/image3_2.jpg",
   image4 : "image/image4_2.jpg",
   image5 : "image/image5_2.jpg"
 }
//Loop through
for(var i = 0 ; i < imgs.length; i++){
 imgs[i].addEventListener("mouseover", imageBis)
 function imageBis() {
   this.src = updimgs[this.id]
}
}
