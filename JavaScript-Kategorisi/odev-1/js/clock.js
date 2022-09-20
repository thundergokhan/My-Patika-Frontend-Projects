let username = prompt("Adınızı Giriniz:");
let myName = document.querySelector("#myName");

myName.innerHTML = `${
  username.length > 0 ? username : "Kullanıcı Adı Bulunamadı"
}`;

let days = [
  "Pazar",
  "Pazartesi",
  "Salı",
  "Çarşamba",
  "Perşembe",
  "Cuma",
  "Cumartesi",
];

function showTime() {
  const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  let d = days[today.getDay()];
  let info = document.querySelector("#myClock");
  info.innerHTML = `${h}:${m}:${s} ${d}`;
}

setInterval(showTime, 1000);

showTime();
