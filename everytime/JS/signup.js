// signup.js

// 1. 필요한 요소들을 가져옵니다. (submit 버튼을 제외한 모든 input 창들)
const inputs = document.querySelectorAll(
  '#signupForm input:not([type="submit"])',
);
const regPw = document.getElementById("regPw");
const regPwConfirm = document.getElementById("regPwConfirm");
const signupBtn = document.getElementById("signupBtn");

function checkSignupConditions() {
  let allFilled = true;
  inputs.forEach((input) => {
    if (input.value.trim() === "") {
      allFilled = false;
    }
  });

  const isPasswordValid =
    regPw.value.length >= 8 && regPwConfirm.value.length >= 8;

  if (allFilled && isPasswordValid) {
    signupBtn.classList.add("active");
    signupBtn.disabled = false;
  } else {
    signupBtn.classList.remove("active");
    signupBtn.disabled = true;
  }
}

inputs.forEach((input) => {
  input.addEventListener("input", checkSignupConditions);
});
