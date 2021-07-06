var slideIndex = 1;
function currentSlide(n) {
showSlides(slideIndex = n);
}
var slideIndex = 0;
showSlides();

function showSlides() {
var i;
var slides = document.getElementsByClassName("columnsSlide");
var dots = document.getElementsByClassName("dot");

for (i = 0; i < slides.length; i++) {
  slides[i].style.display = "none";  
}
slideIndex++;
if (slideIndex > slides.length) {slideIndex = 1}    
for (i = 0; i < dots.length; i++) {
  dots[i].className = dots[i].className.replace(" active", "");
}
slides[slideIndex-1].style.display = "block";  
setTimeout(showSlides, 5000); // Change image every 5 seconds
}



document.getElementById("foo").onchange = function() {
    if (this.selectedIndex!==0) {
        window.location.href = this.value;
    }        
};