const twopaxPrev = document.getElementById('twopaxPrev');
const fourpaxPrev = document.getElementById('fourpaxPrev');
var paxNo = 0;


twopaxPrev.style.display = "none";
fourpaxPrev.style.display = "none";

function twoPax(){
    twopaxPrev.style.display = "block";
    fourpaxPrev.style.display = "none";
    changePax(2);
    document.getElementById("duoSeatSelector").style.display = "block";
    document.getElementById("fourSeatSelector").style.display = "none";
    }

function fourPax(){
    fourpaxPrev.style.display = "block";
    twopaxPrev.style.display = "none";
    changePax(4);
    document.getElementById("fourSeatSelector").style.display = "block";
    document.getElementById("duoSeatSelector").style.display = "none";
    
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
}
