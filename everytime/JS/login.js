const userId = document.getElementById("userId");
const userPw = document.getElementById("userPw");
const loginBtn = document.getElementById("loginBtn");

function checkLoginConditions() {
  if (userId.value.trim() !== "" && userPw.value.length >= 8) {
    loginBtn.classList.add("active");
    loginBtn.disabled = false;
  } else {
    loginBtn.classList.remove("active");
    loginBtn.disabled = true;
  }
}

userId.addEventListener("input", checkLoginConditions);
userPw.addEventListener("input", checkLoginConditions);
