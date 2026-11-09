var prevScrollpos = window.pageYOffset;

window.onscroll = function(){
    var curScrollpos = window.pageYOffset;
    if (prevScrollpos > curScrollpos){
        document.getElementById("navbar").style.top = "0";
        document.getElementById("navbar").style.border = "none";
    }
    else{
        document.getElementById("navbar").style.top = "-60px";
        document.getElementById("navbar").style.borderBottom = "dashed #FFE2D1 3px";
    }
    prevScrollpos = curScrollpos;
} 

    var barOpen = "true";

function toggleSidebar(){
    if (barOpen == "false"){
        document.getElementById("navVertical").style.transform = "translateX(0em)";
        barOpen = "true";
        document.getElementById("pullNav").innerHTML = "<";
    } 
    else if (barOpen == "true"){
        document.getElementById("navVertical").style.transform = "translateX(-17em)";
        barOpen = "false";
        document.getElementById("pullNav").innerHTML = ">";
    }
}