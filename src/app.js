console.log("Merhaba Kodlama.io")

//JS type safe değildir
let dolarDun = 9.20

{
    let dolarDun = 9.10
}

let dolarBugun = 9.30

console.log(dolarDun)

const euroDun = 11.20
// euroDun = 11

console.log(euroDun)

let konutKredileri = ["Konut Kredisi","Emlak Konut Kredisi","Kamu Konut Kredisi"]

console.log("<ul>")
for(let i = 0;i<konutKredileri.length;i++){
    console.log("<li>"+konutKredileri[i]+"</li>")
}
console.log("</ul>")
// console.log(konutKredileri)

{/* <ul>
    <li>Konut Kredisi</li>
    <li>Emlak Konut Kredisi</li>
    <li>Kamu Konut Kredisi</li>
</ul>
 */}

 

