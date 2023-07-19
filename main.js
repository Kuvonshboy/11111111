// set qilish usullari
// 1-usul

let mep1 = new Map()
console.log(mep1);
mep1.set('info', {name: "Jek", aga: 20 });
console.log(mep1.get("Jek"));

let  mep2 = new Map()
console.log(mep2);
mep2.set('narsa', {name: "Kitob", aga: 50})

let mep3 = new Map()
console.log(mep3);
mep3.set ('buyum', {name: "Telefon", aga: 100})

let mep4 = new Map()
console.log(mep4);
mep4.set('Ism', {name: "Eshmad", aga: 50})

let mep5 = new Map()
console.log(mep5);
mep5.set('Famila',{name:"Toshmad", aga: 50})

// 2-usul

const Mevalar = new Map([
    ["olma", 510],
    ["uzum", 300],
    ["gilos", 400]
])
console.log(Mevalar);
console.log(Mevalar.get("gilos"));

const Telefon = new Map([
    ["Iphone", 11],
    ["Samsung", 23],
    ["Redmi", 7]
])
console.log(Telefon);
console.log(Telefon.get("Redmi"));

const Kitob =new Map([
    ["Badiy kitob", 20],
    ["Asarlar", 50],
    ["Hikoyalar", 100]
])
console.log(Kitob);
console.log(Kitob.get("Asarlar"));
const narsa = new Map([
    ["Kitob", 40],
    ["Noutbuk", 15],
    ["Telefon", 100]
])
console.log(narsa);
console.log(narsa.get("Telefon"));

const Ism = new Map([
    ["Anvar", 20 ],
    ["Doston", 23],
    ["Alibek", 22]
])
console.log(Ism);
console.log(Ism.get("Alibek"));

// 3-usul

const mashinalar = new Map()
mashinalar.set("BMV", 500),
mashinalar.set("Tesla", 800),
mashinalar.set("BVD", 200)
console.log(mashinalar);
console.log(mashinalar.get("BMV"));
// mashinalar.has('Tesla')

const shirinliklar = new Map()
shirinliklar.set("Chokacrem", 200)
shirinliklar.set("siniker", 2)
shirinliklar.set("Crafers", 5)
console.log(shirinliklar);
console.log(shirinliklar.get("Crafers"));

const Noutbuklar =new Map()
Noutbuklar.set("Aser", 3)
Noutbuklar.set("Hp", 5)
Noutbuklar.set("Asus", 7)
console.log(Noutbuklar);
console.log(Noutbuklar.get("Asus"));

const Noushniklar = new Map()
Noutbuklar.set("AirPos", 3)
Noushniklar.set("Hoco", 35)
console.log(Noushniklar);
console.log(Noushniklar.get("Hoco"));

// DOM haqida
// console.log(document);

// console.log(document.all);

// console.log(document.body);

// console.log(document. title);

// console.log(document.all[6]);
// document.all[6].textContent ="N8";

console.log(document.forms);

// console.log(document.links);
let link = document.links
for (let i = 0; i<link.length; i++){
   link[i].textContent = "Salomlar"
   link[i].style.backgroundColor = "red"
   link[i].style.color = "yellow"

}





