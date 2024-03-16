const wifi = document.getElementById("wifi");
const internet = document.getElementById("internet");
const rounds = document.querySelectorAll(".round");
const sound = document.getElementById("sound");
const progress = document.getElementsByClassName("progress");
const bright = document.getElementById("brightness");
const progress0 = document.getElementsByClassName("progress0");
const sun = document.getElementsByClassName("fa-sun");
const music = document.getElementsByClassName("fa-music");
const mute = document.getElementsByClassName("mute");
const bell = document.getElementById("fabell");
const main = document.getElementById("main");

wifi.addEventListener("click", () => {
  if (wifi.children[1].children[1].textContent === "off") {
    wifi.style.backgroundColor = "rgb(59, 108, 255)";
    wifi.children[1].children[1].textContent = "on";
  } else {
    wifi.style.backgroundColor = "rgba(255, 255, 255, 0.2)";
    wifi.children[1].children[1].textContent = "off";
  }
});

internet.addEventListener("click", () => {
  if (internet.children[1].children[1].textContent === "off") {
    internet.style.backgroundColor = "rgb(6, 194, 90)";
    internet.children[1].children[1].textContent = "on";
  } else {
    internet.style.backgroundColor = "rgba(255, 255, 255, 0.2)";
    internet.children[1].children[1].textContent = "off";
  }
});

rounds.forEach((round) => {
  round.addEventListener("click", () => {
    if (round.style.backgroundColor === "rgb(59, 108, 255)") {
      round.style.backgroundColor = "rgba(255, 255, 255, 0.2)";
      round.style.transform = "rotate(360deg)";
      round.style.transition = "transform 0.5s 0.1s linear";
    } else {
      round.style.backgroundColor = "rgb(59, 108, 255)";
      round.style.transform = "rotate(-360deg)";
      round.style.transition = "transform 0.5s 0.1s linear";
    }
  });
});
sound.addEventListener("mouseup", (e) => {
  e.screenY <= 320
    ? (music[0].style.color = "grey")
    : (music[0].style.color = "white");
  progress[0].style.backgroundColor = "white";
  progress[0].style.height =
    e.screenY <= 200
      ? "100%"
      : e.screenY <= 240
      ? "80%"
      : e.screenY <= 260
      ? "60%"
      : e.screenY <= 300
      ? "40%"
      : e.screenY <= 320
      ? "20%"
      : "0%";
  if (e.screenY <= 200) {
    progress[0].style.borderRadius = "10px";
  } else {
    progress[0].style.borderRadius = "0px";
    progress[0].style.borderBottomLeftRadius = "10px";
    progress[0].style.borderBottomRightRadius = "10px";
  }
});

bright.addEventListener("mouseup", (e) => {
  e.screenY <= 320
    ? (sun[0].style.color = "grey")
    : (sun[0].style.color = "white");
  progress0[0].style.backgroundColor = "white";
  progress0[0].style.height =
    e.screenY <= 200
      ? "100%"
      : e.screenY <= 240
      ? "80%"
      : e.screenY <= 260
      ? "60%"
      : e.screenY <= 300
      ? "40%"
      : e.screenY <= 320
      ? "20%"
      : "0%";
  main.style.opacity =
    e.screenY <= 200
      ? "1.4"
      : e.screenY <= 240
      ? "1"
      : e.screenY <= 260
      ? "0.8"
      : e.screenY <= 300
      ? "0.6"
      : e.screenY <= 320
      ? "0.4"
      : "0.2";
  if (e.screenY <= 200) {
    progress0[0].style.borderRadius = "10px";
  } else {
    progress0[0].style.borderRadius = "0px";
    progress0[0].style.borderBottomLeftRadius = "10px";
    progress0[0].style.borderBottomRightRadius = "10px";
  }
});

mute[0].addEventListener("click", () => {
  if (bell.className === "fa-solid fa-bell") {
    bell.className = "fa-solid fa-bell-slash";
  } else {
    bell.className = "fa-solid fa-bell";
  }
});
