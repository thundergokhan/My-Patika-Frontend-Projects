const menu = [
  {
    id: 1,
    title: "Tteokbokki",
    category: "Korea",
    price: 10.99,
    img: "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
    desc: `Spicy rice cakes, serving with fish cake.`,
  },
  {
    id: 2,
    title: "Chicken Ramen",
    category: "Japan",
    price: 7.99,
    img: "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
    desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
  },
  {
    id: 3,
    title: "Bibimbap",
    category: "Korea",
    price: 8.99,
    img: "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
    desc: `Boiling vegetables, serving with special hot sauce`,
  },
  {
    id: 4,
    title: "Dan Dan Mian",
    category: "China",
    price: 5.99,
    img: "https://www.savingdessert.com/wp-content/uploads/2019/02/Dan-Dan-Noodles-10.jpg",
    desc: `Dan dan noodle, serving with green onion `,
  },
  {
    id: 5,
    title: "Yangzhou Fried Rice",
    category: "China",
    price: 12.99,
    img: "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
    desc: `Yangzhou style fried rice, serving with bean and pickles `,
  },
  {
    id: 6,
    title: "Onigiri",
    category: "Japan",
    price: 9.99,
    img: "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
    desc: `Rice Sandwich, serving with soy sauce`,
  },
  {
    id: 7,
    title: "Jajangmyeon",
    category: "Korea",
    price: 15.99,
    img: "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
    desc: `Black bean sauce noodle, serving with green onion `,
  },
  {
    id: 8,
    title: "Ma Yi Shang Shu",
    category: "China",
    price: 12.99,
    img: "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
    desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
  },
  {
    id: 9,
    title: "Doroyaki",
    category: "Japan",
    price: 3.99,
    img: "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
    desc: `Red bean paste dessert, serving with honey.`,
  },
];
let MenuSet = new Set(["All"]); //Navigation bar için kategorileri çekecek "set"

let MenuDOM = document.querySelector(".btn-container"); //"Navigation bar"ı ekliceğimiz yeri atama
//"Navigation bar" buttonları için style özellikleri
let btnStyle = `
display: inline-block;
font-weight: 400;
line-height: 1.5;
text-align: center;
text-decoration: none;
vertical-align: middle;
user-select: none;
background-color: transparent;
border: 1px solid;
padding: 0.375rem 0.75rem;
font-size: 1rem;
border-radius: 0.25rem;
color: #212529
cursor: pointer;
`;

menu.forEach(function (element) {
  //"menu" objesinden kategorileri "set"e çekme
  MenuSet.add(element.category);
});

MenuSet.forEach(function (element) {
  //"Set"teki bilgilerle button oluşturma
  let btnDOM = document.createElement("span"); //button için "span" oluşturma
  btnDOM.classList.add("btn-item"); //"class" ekleme
  btnDOM.style = btnStyle; //yukardaki "style" özelliklerini ekleme
  btnDOM.setAttribute("id", `${element}`); //"id" atama
  btnDOM.innerHTML = `${element}`; //buttonun içindeki yazı
  MenuDOM.appendChild(btnDOM); //oluşturduğumuz buttonu ekleme
});

let foodDOM = document.querySelector(".section-center"); //Yemek listesini ekliyeceğimiz yeri atama
menu.forEach(AddList); //Yemek listesini ekleyecek fonksiyon
function AddList(element) {
  let divDOM = document.createElement("div"); //burdan sonra iç içe yapılar ekliyoruz (div yapısı)
  divDOM.classList.add("menu-items", "col-lg-6", "col-sm-12"); //"col-lg-6", "col-sm-12" pencere boyutuna göre width belirliyor
  divDOM.setAttribute("name", element.category); //sonradan kolay ulaşabilmek için "name" atama
  divDOM.setAttribute("id", element.id); //"id" atama
  let imgDOM = document.createElement("img"); //"img" oluşturma
  imgDOM.src = element.img; //resim linki
  imgDOM.alt = element.title; //resim açıklaması
  imgDOM.classList.add("photo"); //resim "class"ı
  divDOM.appendChild(imgDOM); //"img"i "div"e ekleme (div>img)

  let infoDOM = document.createElement("div"); //Yemek bilgileri için ayrı "div"
  infoDOM.classList.add("menu-info");
  let dtitleDOM = document.createElement("div"); //Yemek ismi ve parası için "div"
  dtitleDOM.classList.add("menu-title");
  let titleDOM = document.createElement("h4"); //Yemek ismi için yapı ve bilgileri
  titleDOM.innerHTML = element.title;
  dtitleDOM.appendChild(titleDOM); //Ekleme işlemi

  let priceDOM = document.createElement("h4"); //Yemek parası için yapı ve bilgileri
  priceDOM.classList.add("price");
  priceDOM.innerHTML = element.price;
  dtitleDOM.appendChild(priceDOM); //Ekleme işlemi

  infoDOM.appendChild(dtitleDOM); //Ekleme işlemi

  let textDOM = document.createElement("div"); //Yemek açıklaması için yapı ve bilgileri
  textDOM.classList.add("menu-text");
  textDOM.innerHTML = element.desc;
  infoDOM.appendChild(textDOM); //Ekleme işlemi

  divDOM.appendChild(infoDOM); //Ekleme işlemi

  foodDOM.appendChild(divDOM); //Ekleme işlemi
}

let newmenu = [...menu]; //Seçilen kategoride değişecek bilgiler için yeni "object" oluşturuyoruz
let beforeSelected = ""; //Önceden seçilmiş kategorideki bilgileri silmek için değişken (önceki kategorinin ismini tutacak)

//Burdaki kullanılan dinleyiciler ve "style"ler buttondaki efect için (Bunları her button için ayrı yapmak gerekiyor)
document.getElementById("All").addEventListener("mouseenter", () => {
  //Mouse üstündekyen olacaklar
  document.getElementById("All").style.backgroundColor = "black"; //Arkaplan rengi
  document.getElementById("All").style.color = "white"; //Yazı rengi
});
document.getElementById("All").addEventListener("mouseleave", () => {
  //Mause üstünden ayrıldığında olacaklar
  document.getElementById("All").style.backgroundColor = "transparent"; //Arkaplan rengi
  document.getElementById("All").style.color = "black"; //Yazı rengi
});
//Aşağıdaklerderde diğer kategoriler için
document.getElementById("Korea").addEventListener("mouseenter", () => {
  document.getElementById("Korea").style.backgroundColor = "black";
  document.getElementById("Korea").style.color = "white";
});
document.getElementById("Korea").addEventListener("mouseleave", () => {
  document.getElementById("Korea").style.backgroundColor = "transparent";
  document.getElementById("Korea").style.color = "black";
});

document.getElementById("Japan").addEventListener("mouseenter", () => {
  document.getElementById("Japan").style.backgroundColor = "black";
  document.getElementById("Japan").style.color = "white";
});

document.getElementById("Japan").addEventListener("mouseleave", () => {
  document.getElementById("Japan").style.backgroundColor = "transparent";
  document.getElementById("Japan").style.color = "black";
});

document.getElementById("China").addEventListener("mouseenter", () => {
  document.getElementById("China").style.backgroundColor = "black";
  document.getElementById("China").style.color = "white";
});

document.getElementById("China").addEventListener("mouseleave", () => {
  document.getElementById("China").style.backgroundColor = "transparent";
  document.getElementById("China").style.color = "black";
});
//(Bu işlemi "css" üstünden daha kolay yapılıyor ama sadece "js" kullanmak istedim)

document.addEventListener(
  "click",
  (
    selected //Tıklandığında olacaklar için dinleyici ve fonksiyon
  ) => {
    if (selected.target.matches("span")) {
      //Sadece buttonlarda devreye girmesi için
      if (beforeSelected) {
        //Önceden kategori seçilmişse button bilgilerini silmek
        document.getElementById(beforeSelected).style.boxShadow = ""; //Bu butonun arkasında oluşan gölge
      }
      document.getElementById(selected.target.innerHTML).style.boxShadow =
        "0px 0px 0px 4px #898d91"; //button gölgesini oluşturma
      document.getElementById(selected.target.innerHTML).style.border =
        "1px solid black";

      beforeSelected = selected.target.innerHTML; //Tıklanan kategori ismini sonradan ulaşmak için değişkene atama
      if (beforeSelected) {
        //Önceden kategori seçilmişse bilgileri silme
        newmenu.forEach(function (item) {
          //önceki listeyi silme
          let id = document.getElementById(`${item.id}`); //id ataması
          id.remove(); //silme işlemi
        });
      }
      if (selected.target.innerHTML == "All") {
        //'All' kategorisi için
        newmenu = [...menu]; //Tüm yemek listesini yeni "object" e atama
        newmenu.forEach(AddList); //Ekleme fonksiyonunu çağırma
      } else {
        newmenu = menu.filter(function (element) {
          //'All' dışındaki kategoriler için Yemek listesini filteleme
          return element.category == selected.target.innerHTML; //Seçilen kategoriye eşitse yeni "object"e atama
        });
        newmenu.forEach(AddList); //Ekleme fonksiyonunu çağırma
      }
    } else {
      MenuSet.forEach(function (element) {
        //button dışındaki yerlere de tıklandığında gölgeyi kaldırmak için
        document.getElementById(element).style.boxShadow = "";
      });
    }
  }
);
