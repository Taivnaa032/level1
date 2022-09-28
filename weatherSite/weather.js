const input = document.getElementById("search");
const temp = document.getElementById("temp");
const nat = document.getElementById("weather");
const picd = document.getElementById("pic");
const dateChoose = document.getElementById('datee');
const myImage = new Image(100, 200);
let object;
let info;
let newData;
let timeMove;
let tem;
let time;

input.addEventListener("keydown", (el) => {
  if (el.key == "Enter") {
    getData(input.value);
  }
});

const getData = async (city) => {
  object = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=0a9b1d70e2d449a7fcadd8c7ceaaade5`
  );
  newData = await object.json();
  timing();
  objecting();
};

const timing = () => {
  let timeChoose = new Date();
  let timeZone = newData.timezone;
  timeMove = Number(timeZone) / 3600;
  time = `${timeChoose.toLocaleString("en-GB", {
    timeZone: "Europe/London",
  })}`;
  let timeEnd = time.slice(12, 14);
  timeMove = timeMove + Number(timeEnd) - 1;
  if (timeMove > 24) {
    timeMove = Number(timeMove) - 24;
  }
};

const objecting = () => {
  if (timeMove > 7 && timeMove < 18) {
    dayImage();
    tem = newData.main.temp;
    temp.innerHTML = Math.round(tem) + "° ";
    nat.innerHTML = newData.weather[0].main;
    document.getElementById("screen").style.background = "#F6F0F0";
    document.getElementById("container").style.background = "white";
    document.getElementsByTagName("body")[0].style.background = "white";
  } else {
    nightImage();
    tem = newData.main.temp;
    temp.innerHTML = Math.round(tem) + "° ";
    nat.innerHTML = newData.weather[0].main;
    document.getElementById("screen").style.background = "#053067";
    document.getElementById("container").style.background = "darkblue";
    document.getElementsByTagName("body")[0].style.background = "#033067";
  }
};

const dayImage = () => {
  switch (nat.innerHTML) {
    case "Clear":
      picd.src = "./images/icon.svg";
      break;
    case "Clouds":
      picd.src = "./images/icon (1).svg";
      break;
    case "Windy":
      picd.src = "./images/icon (2).svg";
      break;
    case "Rains":
      picd.src = "./images/icon (3).svg";
      break;
    case "Snows":
      picd.src = "./images/icon (4).svg";
      break;
    case "thunderstorm":
      picd.src = "./images/icon (5).svg";
      break;
    case "Mist":
      picd.src = "./images/icon (1).svg";
  }
};

const nightImage = () => {
  switch (nat.innerHTML) {
    case "Clear":
      picd.src = "./images/night.svg";
      break;
    case "Clouds":
      picd.src = "./images/night (1).svg";
      break;
    case "Windy":
      picd.src = "./images/night (2).svg";
      break;
    case "Rains":
      picd.src = "./images/night (3).svg";
      break;
    case "Snows":
      picd.src = "./images/night (4).svg";
      break;
    case "thunderstorm":
      picd.src = "./images/night (5).svg";
      break;
    case "Mist":
      picd.src = "./images/night (1).svg";
  }
};
