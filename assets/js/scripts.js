// $(document).ready(()=> {
//     console.log("Ready");
// });

var shown = false;

$(()=>{
    $(".cuadro").hide();
});

 $("#showRed").click(() => {
    if(shown == true){
         $(".cuadro").slideUp();
     } else if (shown == false) {
         $(".cuadro").slideDown();
     }
     shown = !shown;
 });

 
// Nav bar
var show = false;

$("#btnBar").click(() => {
    if(show == true){
        $(".navBar").slideUp();
    } else if (show == false) {
        $(".navBar").slideDown();
    }
    show = !show;
});

// Animación
$("#animateElements").click(() => {
    $(".cuadro").animate({
        left : '+=250px',
        height: '500px',
        padding: '500px',
        borderRadius: '50%'
    }, "fast");
});