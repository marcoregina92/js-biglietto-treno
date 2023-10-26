const km = prompt("Quanti km vorresti percorrere?")
const age = prompt("Quanti anni hai?")
const rate = 0.21

let finalPrice = km * 0.21;
console.log(finalPrice)

if ( !isFinite(km) || !isFinite(age)) {
    document.getElementById("titolo").innerHTML = `Ops, qualcosa è andato storto.`;
}
else if (age < 18) {
    finalPrice = (finalPrice * 0.8).toFixed(2)
    document.getElementById("titolo").innerHTML = `Costo totale del biglietto scontato del 20%:`;
    document.getElementById("prezzoFinale").innerHTML = `${finalPrice} €`;
}
else if (age >= 65) {
    finalPrice = (finalPrice * 0.6).toFixed(2)
    document.getElementById("titolo").innerHTML = `Costo totale del biglietto scontato del 40%:`;
    document.getElementById("prezzoFinale").innerHTML = `${finalPrice} €`;
}
else {
    document.getElementById("titolo").innerHTML = `Costo totale del biglietto:`;
    document.getElementById("prezzoFinale").innerHTML = `${finalPrice} €`;
}

