const btnEl = document.querySelector(".btnH");
const boxes = document.querySelectorAll("#boxes");
const returnbtn = document.querySelector(".btnR");
btnEl.addEventListener("click", (event) => {
  $("#boxes").children("#even").hide();
});

returnbtn.addEventListener("click", (event) => {
  alert("When you click here!, we'll restore the missing boxes.");
  $("#boxes").children("#even").show();
});
