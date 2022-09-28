const minute = document.getElementById("minutes");
const second = document.getElementById("seconds");
const ten = document.getElementById("tens");
let myInterval;

const start = () => {
  myInterval = setInterval(() => {
    ten.innerText = Number(ten.innerText) + 1;


    if (Number(ten.innerText) == 99) {
      second.innerText = Number(second.innerText) + 1;
      ten.innerText = 00;
    }


    if (Number(second.innerText == 60)) {
      minute.innerText = Number(minute.innerText) + 1;
      second.innerText = 00;
      ten.innerText = 00;
    }


  }, 10);
};

const pause = () => {
  clearInterval(myInterval);
};


