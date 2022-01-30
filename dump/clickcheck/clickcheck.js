

let countEl = document.getElementById("count-el")


let tot = 0
function increment() {
    tot = tot + 1
    countEl.innerText = tot 
    console.log(tot)
}
