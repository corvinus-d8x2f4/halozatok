var kérdések;
fetch('/questions.json')
    .then(response => response.json())
    .then(data => letöltésBefejeződött(data)
    );

function letöltésBefejeződött(d) {
    console.log("Sikeres letöltés")
    console.log(d)
    kérdések = d;
}
function letöltés(adat) {
    let ide = document.getElementById("kérdés_szöveg")


    for (var i = 0; i < adat.length; i++) {
        consol.log(adat[i].questionText)

        let elem = document.createElement("div")
        elem.innerHTML = adat[i].questionText
        ide.appendChild(elem)
        window.onload
    }
}
fetch('https://szoft1.comeback.hu/hajo/teszt-0050.jpgn')
    .then(response => response.json())
    .then(data => letöltésBefejeződött(data)
);
function kérdésMegjelenítés(kérdés) {
    let ide = document.getElementById("kép1")


for (var i = 0; i < kérdés.length; i++) {
        consol.log(adat[i].questionText)

        let elem = document.createElement("div")
        elem.innerHTML = adat[i].questionText
    ide.appendChild(elem)
    window.onload
    }
}