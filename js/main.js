// ========================================== change image =======================================

let landingImage = document.querySelector(".landing");
let imageArr = ["bg01.jpg", "bg02.jpg", "bg03.jpg", "bg04.jpg", "bg05.jpg"];

setInterval(() => {
  let randomImageNum = Math.floor(Math.random() * imageArr.length);
  landingImage.style.backgroundImage = `url("../assets/img/${imageArr[randomImageNum]}")`;
}, 2000);

// ========================================== sitting box ===========================================

let gearContainer = document.querySelector(".gear-container");
let settingBox = document.querySelector(".setting-box");
let gear = document.querySelector(".gear");

gearContainer.onclick = function () {
  settingBox.classList.toggle("active");
  gear.classList.toggle("active");
};

let colorLi = document.querySelectorAll(".color-list li");
let localColor = localStorage.getItem("main_color");
colorLi.forEach((li) => {
    li.addEventListener("click", function () {
        let customColor = li.getAttribute("data-color"); 
        document.documentElement.style.setProperty("--main-color", customColor);
    switch (customColor) {
        case "greenyellow":
        document.documentElement.style.setProperty("--bg", "red");
        break;
        case "red":
        document.documentElement.style.setProperty("--bg", "balck");
        break;
        case "black":
        document.documentElement.style.setProperty("--bg", "blue");
        break;
        case "blue":
            document.documentElement.style.setProperty("--bg", "yellow");
            break;
            case "yellow":
        document.documentElement.style.setProperty("--bg", "#7f2626");
        break;
        default: 
        break;
    }
    localStorage.setItem("main_color", customColor);
    });
});

// ========================================== sitting box ===========================================