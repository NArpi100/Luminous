alert("HELLO");
alert("Navin 💌");


$("h4").css("color","powderblue");
$("h1").css("color","#e4d00a");
$("p").css("color","#008080");
$("h2").css("color","#dc143c");
$("h1").click(function(){
  $("i").css("color","#f5ba13");
});

$(document).keypress(function(event){
  $("h4").text(event.key);

});


