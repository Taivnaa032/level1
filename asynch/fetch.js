// let taken1 = document.getElementById('text');
// const text = async () => {
//   const response = await fetch("https://www.randomuser.me/api/?results=50");
//   const data = await response.json();
//   console.log(data);
//   taken(data);
// };
// text();

// // const take = (data) => {
// //   for (let i = 1; i <= 50; i++) {
// //     document.getElementById("text").innerHTML +=
// //       [i] + ". " + `${data.results[i].email} </br>`;
// //   }
// // };

// // const button1 = (data) => {
// //   let count = document.getElementById("sn");
// //   for (i = 0; i <= 50; i++) {
// //     count.innerHTML += [i] + ". " + `${data.results[i].email} </br>`;
// //   }
// // };



// const taken = (data)=> {
//     for(i= 0; i<50; i++){
//         taken1.innerHTML += [i] + ". " + `${data.result[i].cell} </br>`
//     }
// }


const getData = async (city) => {
  const data = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=ulaanbaatar&units=metric&appid=0a9b1d70e2d449a7fcadd8c7ceaaade5`
  );
  const info = await data.json();
  console.log(info);
};

getData("san francisco");