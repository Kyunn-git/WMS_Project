const twopaxPrev = document.getElementById('twopaxPrev');
const fourpaxPrev = document.getElementById('fourpaxPrev');
var paxNo = 0;


twopaxPrev.style.display = "none";
fourpaxPrev.style.display = "none";

document.getElementById('noPax').addEventListener('change', function() {
    if (this.value === 'duo') {
        twoPax();
    } else if (this.value === 'group') {
        fourPax();
    }
});

function twoPax(){
    twopaxPrev.style.display = "block";
    fourpaxPrev.style.display = "none";
    changePax(2);
    document.getElementById("duoSeatSelector").style.display = "block";
    document.getElementById("fourSeatSelector").style.display = "none";

    document.querySelectorAll('input[name="SeatOption"]').forEach(input => {
        if (input.value === '4' || input.value === '5') input.checked = false;
    });
    document.getElementById("seatSelected").innerHTML = "";

    clearHighlightedSeats();
    updateLayoutRestrictions('duo')
    }



function fourPax(){
    fourpaxPrev.style.display = "block";
    twopaxPrev.style.display = "none";
    changePax(4);
    document.getElementById("fourSeatSelector").style.display = "block";
    document.getElementById("duoSeatSelector").style.display = "none";
    
    document.querySelectorAll('input[name="SeatOption"]').forEach(input => {
        if (['1', '2', '3', '6', '7', '8'].includes(input.value)){
            input.checked = false;
        }
    });
    document.getElementById("seatSelected").innerHTML = "";

    clearHighlightedSeats();
    updateLayoutRestrictions('four')
}

function changePax(n){
    console.log(n);
    const paxBooked = document.getElementById("paxBooked");
    if(n == 2){
        paxBooked.innerHTML = "2";
    }
    else if (n == 4){
        paxBooked.innerHTML = "3-4";
    }
    else{
        paxBooked.innerHTML = "-";
    }
}
              
function checkSeat(){
    var seatOption = document.querySelector('input[name="SeatOption"]:checked').value
    document.getElementById("seatSelected").innerHTML = seatOption;

    document.querySelectorAll('.chairitem').forEach(item => {
        item.classList.remove('selected-seat');
        if (item.getAttribute('data-seat') === seatOption) {
            item.classList.add('selected-seat');
        }
    });
}

function updateLayoutRestrictions(paxType) {
    document.querySelectorAll('.chairitem').forEach(item => {
        const seatNum = item.getAttribute('data-seat');
        if (paxType === 'duo') {
            if (seatNum === '4' || seatNum === '5') {
                item.classList.add('disabled-chair');
            } else {
                item.classList.remove('disabled-chair');
            }
        } else if (paxType === 'four') {
            if (['1', '2', '3', '6', '7', '8'].includes(seatNum)) {
                item.classList.add('disabled-chair');
            } else {
                item.classList.remove('disabled-chair');
            }
        }
    });
}

// To list movie name from Movies.html instantly in user's booking
document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const movieName = urlParams.get("movie");

    if (movieName) {
        localStorage.setItem("selectedMovie", movieName);
    }

    const movieDisplaySpan = document.getElementById("movieBooked");
    if (movieDisplaySpan) {
        movieDisplaySpan.textContent = localStorage.getItem("selectedMovie") || "None selected";
    }
});