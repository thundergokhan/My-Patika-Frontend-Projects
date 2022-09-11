// ********** String Veri Turu Islemleri **********
// https://www.w3schools.com/jsref/jsref_obj_string.asp

let email = "gokhanyildirim@gmail.com";
let firstName = "gokhan";
let lastName = "YILDIRIM";

// string karakter sayisi -> length       //karakter sayısını öğrenmek için
console.log(email.length);

// Ilk Karakteri Bulmak -> [0]:
console.log(firstName[0]); // ilk karakteri görüntülemek için
console.log(firstName.charAt(0)); // 2. yöntem

// buyuk harf / kucuk harf :
firstName = firstName.toUpperCase();
console.log(firstName);

firstName = firstName.toLowerCase();
console.log(firstName);
// String Icinde Istedigimiz Bilgiyi Aramak ve Yerini Bulmak -> search:
console.log(email.search("@"));
console.log(email[15]);

email.search("olmayan"); // -1      //olmayan bişey aratırsan -1 sonucunu getirir
email.search("g"); // gokhan da "g" var
// belli bir yere kadar al -> slice :  (domain bilgisi)
let DOMAIN = email.slice(email.search("@") + 1);
console.log(DOMAIN);

console.log(
  DOMAIN.slice(0, DOMAIN.indexOf(".")) // sadece gmail kismini aldik
);

// bilgiyi degistir -> replace :
email = email.replace("gmail.com", "kodluyoruz.org");
console.log(email);

// istedigim bilgi var mi ? -> includes :
email.includes("dkfhsd"); // false    //email.search de -1 veriyordu burda var ya da yok diye söylüyor
email.includes("@"); // true

// istedigim bilgiyle basladi mi ? bitti mi -> startsWidth, endsWidth :
console.log(email.endsWith("kodluyoruz.org"));

// Ilk Harflerini Buyuk Yapmak
firstName = "FIRST";
lastName = "LAST";
let fullName = `${firstName[0].toUpperCase()}${firstName
  .slice(1)
  .toLowerCase()} ${lastName[0].toUpperCase()}${lastName
  .slice(1)
  .toLowerCase()}`;
