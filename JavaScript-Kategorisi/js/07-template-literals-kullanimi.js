// ********** Template Literals Kullanimi **********
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals

let username = "gokhan";
const DOMAIN = "kodluyoruz.org";

let email = username + "@" + DOMAIN;

// console.log("Merhaba", username, "sitemize hosgeldin", "mail adresin:", email)

let info = `
Merhaba ${username} sitemize hoşgeldin.. 
mail adresin: ${email}

mail adresinin uzunlugu: ${email.length}
borcunuz: ${(2 + 3) * 10} TL
gunun saat bilgisi : ${new Date().getHours()}

kisa isminiz: ${username[0]}.
`;

console.log(info);


// String ifade yazarken, " veya ' kullanırız. 
// alt gr + ş tuşuna basılınca çıkan karakter tick, alt gr + virgül tuşuna basınca çıkan karakter backtick. 
// Burada backtick kullanmamız lazım normal tick aynı işlevi sağlamıyor.
