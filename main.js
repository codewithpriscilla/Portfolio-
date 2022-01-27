if (typeof $ == 'undefined'){
    console.log('oops! I still have to link my jQuery properly!');
} else {
    console.log('I did it! I linked jQuery and this js file properly!')
};

 
// ...............................................
//      N A V - B A R

$(".menuicon").click(function() {
    let x = document.getElementById("myLinks");

    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
})

