alert("HELLO!!!");
alert("Navin");
alert("Happy Birthday");


$("h4").css("color","powderblue");
$("h1").css("color","#ff4c17");
$("p").css("color","#008080");
$("h2").css("color","#900c3f");
$("h1").click(function(){
  $("i").css("color","yellow");
});
$(document).keypress(function(event){
  $("h4").text(event.key);

});
$("button").css("background-color","#ffdb58");
$("button").css("color","#fff");

