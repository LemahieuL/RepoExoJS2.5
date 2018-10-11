var image = [
  document.getElementById('image1'),
  document.getElementById('image2'),
  document.getElementById('image3'),
  document.getElementById('image4'),
  document.getElementById('image5'),
]
 var updimage = {
   image1 : "image/image1_2.jpg",
   image2 : "image/image2_2.jpg",
   image3 : "image/image3_2.jpg",
   image4 : "image/image4_2.jpg",
   image5 : "image/image5_2.jpg"
 }
 var baseimage = {
   image1 : "image/image1.jpg",
   image2 : "image/image2.jpg",
   image3 : "image/image3.jpg",
   image4 : "image/image4.jpg",
   image5 : "image/image5.jpg"
 }

for(var i = 0 ; i < image.length; i++){
 image[i].addEventListener("mouseover", imageBis)
 function imageBis() {
   this.src = updimage[this.id]
}
image[i].addEventListener("mouseout", imageBase)
function imageBase() {
  this.src = baseimage[this.id]
}
}
