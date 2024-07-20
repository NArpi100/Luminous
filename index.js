alert("HELLO");
alert("Navin 💖");


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
$("button").css("background-color","#aaff00");
$("button").css("color","#fff");

const button = document.querySelector('button');

// Add a mouseover event listener
button.addEventListener('mouseover', () => {
  // Change the button's background color
  button.style.backgroundColor = 'e4d00a';
});


