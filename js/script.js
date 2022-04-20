// =============== variables ===============
// next buttons
const firstNextBtn = document.getElementById("firstNextBtn"),
      secondNextBtn = document.getElementById("secondNextBtn"),
      thirdNextBtn = document.getElementById("thirdNextBtn");
// previous buttons
const secondPrevBtn = document.getElementById("secondPrevBtn"),
      thirdPrevBtn = document.getElementById("thirdPrevBtn"),
      fourthPrevBtn = document.getElementById("fourthPrevBtn");
// submit button
const submitBtn = document.getElementById("submitBtn");
// valid
let valid = true,
    inputValid = true,
    passwordValid = true;

// function to fill the select with years, months, days
function addingBirthDate() {
  const day = document.querySelector("#day"),
        month = document.querySelector("#month"),
        year = document.querySelector("#year");
  let date = new Date();
  for(let i = 1; i <= 31 ; i++) {
    day.insertAdjacentHTML("beforeend", `<option value="${i}">${i}</option>`);
  }
  for(let i = 0; i < 12; i++) {
    let monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    month.insertAdjacentHTML("beforeend", `<option value="${monthNames[i].toLowerCase()}">${monthNames[i]}</option>`);
  }
  for(let i = 1952; i <= date.getFullYear() - 6; i++) {
    year.insertAdjacentHTML("beforeend",`<option value="${i}">${i}</option>`);
  }
}

// =============== next buttons functions ===============
// first next button click
firstNextBtn.addEventListener("click", (e) => {
  checkPersonalInfo();
  if (!valid || !inputValid ||!passwordValid) {
    e.preventDefault();
  }
  else {
    document.querySelector(".personal-info").classList.remove("active");
    document.querySelector(".certificate-info").classList.add("active");
  }
});
// second next button click
secondNextBtn.addEventListener("click", (e) => {
  checkCertificateInfo();
  if (!valid) {
    e.preventDefault();
  }
  else {
    document.querySelector(".certificate-info").classList.remove("active");
    document.querySelector(".national-info").classList.add("active");
  }
});
// third next button click
thirdNextBtn.addEventListener("click", (e) => {
  checkNationalInfo();
  if (!valid) {
    e.preventDefault();
  }
  else {
    document.querySelector(".national-info").classList.remove("active");
    document.querySelector(".profile-info").classList.add("active");
  }
});
// submit button click
submitBtn.addEventListener("click", (e) => {
  checkProfileInfo();
  if (!valid) {
    e.preventDefault();
  }
});

// =============== previous buttons functions ===============
// second prev button click
secondPrevBtn.addEventListener("click", (e) => {
  document.querySelector(".certificate-info").classList.remove("active");
  document.querySelector(".personal-info").classList.add("active");
});
// third prev button click
thirdPrevBtn.addEventListener("click", (e) => {
  document.querySelector(".national-info").classList.remove("active");
  document.querySelector(".certificate-info").classList.add("active");
});
// fourth prev button click
fourthPrevBtn.addEventListener("click", (e) => {
  document.querySelector(".profile-info").classList.remove("active");
  document.querySelector(".national-info").classList.add("active");
});

// =============== check functions ===============
// function to check personal info
function checkPersonalInfo() {
  // ====== function variables ======
  // select inputs
  const selectInputs = document.querySelectorAll(".selectInput");
  // inputs
  const inputs = document.querySelectorAll(".input");
  // password and confirm password
  const password = document.getElementById("password"),
        confirmPassword = document.getElementById("confirmPassword"),
        notMatch = document.getElementById("notMatch");

  // empty check
  inputs.forEach(input => {
    if (input.value === "") {
      input.style.borderColor = "#f00";
      input.parentElement.nextElementSibling.classList.add("active");
      inputValid = false;
    }
    else {
      if (input.parentElement.nextElementSibling.classList.contains("active")) {
        input.style.borderColor = "rgba(0, 0, 0, 0.4)";
        input.parentElement.nextElementSibling.classList.remove("active");
        inputValid = true;
      }
    }
  });
  // password check
  if (password.value !== "" && confirmPassword.value !== "") {
    if (password.value !== confirmPassword.value) {
      notMatch.style.display = "block";
      passwordValid = false;
    }
    else {
      notMatch.style.display = "none";
      passwordValid = true;
    }
  }
  // select check
  selectInputs.forEach(selectInput => {
    if (selectInput.value === "unknown") {
      selectInput.style.borderColor = "#f00";
      selectInput.nextElementSibling.classList.add("active");
      valid = false;
    }
    else {
      if (selectInput.nextElementSibling.classList.contains("active")) {
        selectInput.style.borderColor = "rgba(0, 0, 0, 0.4)";
        selectInput.nextElementSibling.classList.remove("active");
        valid = true;
      }
    }
  });
  return valid;
}
// function to check certificate info
function checkCertificateInfo() {
  // ====== function variables ======
  // file input
  const certificate = document.getElementById("certificate");
  // certificate check
  if (!certificate.value) {
    certificate.parentElement.nextElementSibling.classList.add("active");
    valid = false;
  }
  else {
    if (certificate.parentElement.nextElementSibling.classList.contains("active")) {
      certificate.parentElement.nextElementSibling.classList.remove("active");
      valid = true;
    }
  }
  return valid;
}
// function to check national info
function checkNationalInfo() {
  // ====== function variables ======
  // front file input
  const frontNational = document.getElementById("frontNational");
  // back file input
  const backtNational = document.getElementById("backtNational");

  // front national check
  if (!frontNational.value) {
    frontNational.parentElement.nextElementSibling.classList.add("active");
    valid = false;
  }
  else {
    if (frontNational.parentElement.nextElementSibling.classList.contains("active")) {
      frontNational.parentElement.nextElementSibling.classList.remove("active");
      valid = true;
    }
  }
  // back national check
  if (!backtNational.value) {
    backtNational.parentElement.nextElementSibling.classList.add("active");
    valid = false;
  }
  else {
    if (backtNational.parentElement.nextElementSibling.classList.contains("active")) {
      backtNational.parentElement.nextElementSibling.classList.remove("active");
      valid = true;
    }
  }
  return valid;
}
// function to check profile into
function checkProfileInfo() {
  // ====== function variables ======
  // profile picture file input
  const profilePicture = document.getElementById("profilePicture");
  // back file input
  const bio = document.getElementById("bio");
  
  // profile check
  if (!profilePicture.value) {
    profilePicture.parentElement.nextElementSibling.classList.add("active");
    valid = false;
  }
  else {
    if (profilePicture.parentElement.nextElementSibling.classList.contains("active")) {
      profilePicture.parentElement.nextElementSibling.classList.remove("active");
      valid = true;
    }
  }
  // bio check
  if (bio.value === "") {
    bio.style.borderColor = "#f00";
    bio.parentElement.nextElementSibling.classList.add("active");
    valid = false;
  }
  else {
    if (bio.parentElement.nextElementSibling.classList.contains("active")) {
      bio.style.borderColor = "rgba(0, 0, 0, 0.4)";
      bio.parentElement.nextElementSibling.classList.remove("active");
      valid = true;
    }
  }
  return valid;
}

// execute functions
addingBirthDate();


const profileImg = document.getElementById("imagePreview"),
      profileFile = document.getElementById("profilePicture");

profileFile.addEventListener("change", function() {
  const choosedFile = this.files[0];
  if (choosedFile) {
    // FileReader is a predefined function of JS
    const reader = new FileReader();
    reader.addEventListener("load", () => {
      // putting result on src of profile picture
      profileImg.setAttribute("src", reader.result);
    });
    reader.readAsDataURL(choosedFile);
  }
});