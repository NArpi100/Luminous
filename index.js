//alert("HELLO!!!");
//alert("Navin");
//alert("Happy Birthday🤩");


$("h4").css("color","powderblue");
$("h1").css("color","#ff4c17");
$("p").css("color","#ff4c17");
$("h2").css("color","green");
$("h1").click(function(){
  $("i").css("color","yellow");
});
$(document).keypress(function(event){
  $("h4").text(event.key);

});
