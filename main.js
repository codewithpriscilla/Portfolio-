if (typeof $ == 'undefined'){
    console.log('oops! I still have to link my jQuery properly!');
} else {
    console.log('I did it! I linked jQuery and this js file properly!')
};

 
// ...............................................
//      N A V - B A R

$(".menuicon").click(function() {
    let x = document.getElementById("pageLinks");

    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
})

$(".menuicon").hover(function(){
    $(".menuicon").toggleClass("shadow");
}, function(){
    $(".menuicon").toggleClass("shadow");
})

$("#pageLinks").hover(function(){
    $("#pageLinks").toggleClass("shadow");
}, function(){
    $("#pageLinks").toggleClass("shadow");
})





// ...............................................
//      P R O J E C T S 

$(".webpage").hover(function(){
    $(".webpage").toggleClass("shadow");
}, function(){
    $(".webpage").toggleClass("shadow");
})

$(".projectlink").hover(function(){
    $(".projectlink").toggleClass("shadow");
}, function(){
    $(".projectlink").toggleClass("shadow");
})




// ...............................................
//          C O N T A C T   M E 


$(".myLinks").hover(function(){
    $(".myLinks").toggleClass("shadow");
}, function(){
    $(".myLinks").toggleClass("shadow");
})
 
$(".email").click(function() {
    window.open('mailto:codewithpriscilla@gmail.com>');
})

$(".email").hover(function(){
    $(".email").toggleClass("shadow");
}, function(){
    $(".email").toggleClass("shadow");
})

