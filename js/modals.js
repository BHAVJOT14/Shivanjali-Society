
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


//  page-2 lightblue modal
var modal4 = document.getElementById("blue-modal");
var btn3 = document.getElementById("modalBlue1");
var closebtn3 = document.getElementById("closebtn");

function openModal3() {
    modal4.style.display = "block";
}
btn3.addEventListener("click", openModal3);

function closeModal3() {
    closebtn3.addEventListener("click", closeModal3);
}

// page-2 lightgreen modal
var modal5 = document.getElementById("lightgreen-modal");
var btn4 = document.getElementById("modalightgreen1");
var closebtn4 = document.getElementById("closebtn1");

function openModal4() {
    modal5.style.display = "block";   
}
btn4.addEventListener("click", openModal4);

function closeModal4() {
    modal5.style.display = "none";
}
closebtn4.addEventListener("click", closeModal4);

// page-2 darkgreen modal
var modal6 = document.getElementById("darkgreen-modal");
var btn5 = document.getElementById("modaldarkgreen1");
var closebtn5 = document.getElementById("closebtn2");

function openModal5() {
    modal6.style.display = "block";
}
btn5.addEventListener("click", openModal5);

function closeModal5() {
    modal6.style.display = "none";
}
closebtn5.addEventListener("click", closeModal5);