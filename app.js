const body = document.querySelector("body");
const button = document.querySelector("button");
const colors = ["black","#e30e63", "white", "#0ee319", "red",
 "yellow", "blue", "#e6ed15","#6d13a1", "#1ddecb", "#de1da1"];

button.addEventListener("click", changeBackground);
let sira = 0;

function changeBackground() {
    //RAst Gele Renk Secme
    // const rastGeleSayi = Math.floor(Math.random() * colors.length);
    
   //  const secilenRenk = colors [rastGeleSayi];
    // console.log(rastGeleSayi);
   //  body.style.backgroundColor = secilenRenk;

// SIrayla Arka Plan Rengi secme

if(sira == 10 ) sira = 0;
const secilenRenk = colors[sira];
sira++;
body.style.backgroundColor = secilenRenk;

}


