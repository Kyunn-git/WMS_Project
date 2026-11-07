let slideIndex = 1;
showSlides(slideIndex);

/*For controls*/ 
function plusSlide(n){
    showSlides(slideIndex += n);
}

/*determin current slide*/
function curSlide(n){
    showSlides(slideIndex = n);
}

function showSlides(n){
    let i;
    let slides = document.getElementsByClassName("fooditem");
    if (n > slides.length){
        slideIndex = 1;
    }

    if(n < 1){
        slideIndex = slides.length
    }
}