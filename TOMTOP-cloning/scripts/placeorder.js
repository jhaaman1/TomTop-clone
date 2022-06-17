var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


document.getElementById('shiphere').addEventListener('click', myfun());

function myfun(){
    window.location.href = "./payment.html"
}