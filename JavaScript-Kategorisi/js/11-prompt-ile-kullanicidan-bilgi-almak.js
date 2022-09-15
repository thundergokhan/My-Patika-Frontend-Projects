// ********** prompt ile Kullanicidan Bilgi Almak **********
// https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt

let fullName = prompt("Lutfen Adinizi Giriniz: ");

let greeting = document.querySelector("#greeting");

greeting.innerHTML = `${greeting.innerHTML} <small style="color:red">${fullName}</small>`;

// Javascript kullanıcı ile iletişim kurmamızı sağlayabilen etkileşimli
//  bir dildir ve biliyoruz ki kullanıcı ile etkileşimi
//  sağlamının bir yolu kullanıcıdan bilgi istemektir.
