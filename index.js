alert("HELLO!!!");
alert("Navin");
alert("Happy Birthday");


$("h4").css("color","powderblue");
$("h1").css("color","#fff");
$("p").css("color","#008080");
$("h2").css("color","#dc143c");
$("h1").click(function(){
  $("i").css("color","pink");
});
$(document).keypress(function(event){
  $("h4").text(event.key);

});
$("button").css("background-color","#008080");
$("button").css("color","#fff");




let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", " ");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

