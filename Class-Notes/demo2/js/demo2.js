//$("#menu_1>.menu_btn").on("click",function(){
//    console.log("click"); 
//    $("#menu_1>.menu_list").toggleClass("show1");
//});

$("#menu_1>.menu_btn").click(function(){
//    console.log("click"); 
    $("#menu_1>.menu_list").toggleClass("show1");
});

$("#menu_2>.menu_btn").click(function(){
    $("#menu_2 > .menu_list").toggleClass("show2");
});
