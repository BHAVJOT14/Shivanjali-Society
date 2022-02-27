// lightblue modal
var modal1 = document.getElementById("blue-modal");
var btn = document.getElementById("modalBlue");
var closbtn = document.getElementById("closebtn");

function openModal() {
    modal1.style.display = "block";
}

btn.addEventListener("click", openModal);

function closeModal() {
    modal1.style.display = "none";
}
closbtn.addEventListener("click", closeModal);

// lightgreen modal
var modal2 = document.getElementById("lightgreen-modal");
var btn1 = document.getElementById("modalightgreen");
var closebtn1 = document.getElementById("closebtn1");

function openModal1() {
    modal2.style.display = "block";   
}
btn1.addEventListener("click", openModal1);

function closeModal1() {
    modal2.style.display = "none";
}
closebtn1.addEventListener("click", closeModal1);

// darkgreen modal

var modal3 = document.getElementById("darkgreen-modal");
var btn2 = document.getElementById("modaldarkgreen");
var closebtn2 = document.getElementById("closebtn2");

function openModal2() {
    modal3.style.display = "block";   
}
btn2.addEventListener("click", openModal2);

function closeModal2() {
    modal3.style.display = "none";
}
closebtn2.addEventListener("click", closeModal2);
