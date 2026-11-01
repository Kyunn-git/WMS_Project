var prevScrollpos = window.pageYOffset;

window.onscroll = function(){
    var curScrollpos = window.pageYOffset;
    if (prevScrollpos > curScrollpos){
        document.getElementById("navbar").style.top = "0";
    }
    else{
        document.getElementById("navbar").style.top = "-80px";
    }
    prevScrollpos = curScrollpos;
} 