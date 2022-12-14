
$("p").css({"color":"green"});
$(".trigger").on("click", function(){
    $("h1").css({"color":"red"})
});
$("p").on("click", function(){
    $(this).css({"color":"red"})
});
$("p").on("mouseover", function(){
    $(this).css({"color":"blue"})
});
$("#box1").on("click",function(){
    if($(this).hasClass("redbox")){
        $(this).removeClass("redbox");
    }else{
        $(this).addClass("redbox");
    }; 
});
$("#box2").on("click",function(){
    $(this).toggleClass("redbox");
});