let inputButton = document.querySelector(".inputmark");
let rankingButton = document.querySelector(".ranking");

rankingButton.addEventListener("click", function() {
  if (
    inputButton.value < 0 ||
    inputButton.value > 10 ||
    inputButton.value == ""
  )
    alert("Điểm trung bình không hợp lệ");
  else if (inputButton.value <= 4.9) alert("Yếu");
  else if (inputButton.value >= 5 && inputButton.value <= 6.4)
    alert("Trung Bình");
  else if (inputButton.value >= 6.5 && inputButton.value <= 7.9) alert("Khá");
  else if (inputButton.value >= 8 && inputButton.value <= 10) alert("Giỏi");
});
