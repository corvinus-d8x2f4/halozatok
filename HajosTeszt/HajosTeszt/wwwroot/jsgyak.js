window.onload = function () {
document.getElementById("ide").InnerText = 1

var hova = document.getElementById("ide");
for (var s = 0; s < 10; s++) {
    let sor = document.createElement("div");
    hova.appendChild(sor);
    sor.classList.add("elem")
    sor.innerText = (s + 1);
    }
}