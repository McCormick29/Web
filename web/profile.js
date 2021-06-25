const btnColor = document.querySelector('#color')
const bntPlace = document.querySelector('#place')
const btnRitual = document.querySelector('#ritual')


function buttonColor(evt) {
    alert('Red')
}
function buttonPlace(evt) {
    alert('The UK')
}
function buttonRitual(evt) {
    alert('Handball')
}
btnColor.addEventListener("click", buttonColor)
bntPlace.addEventListener("click", buttonPlace)
btnRitual.addEventListener("click", buttonRitual)