document.getElementById('click').addEventListener('click', randomNum)

let clicker = 0
let roulet = 0

function randomNum () {
  //user inputs a random number and convert into integer
  clicker = document.getElementById('table').value
  clicker = parseInt(clicker)

  //random numbers 1-8
  roulet = Math.random() * 8 + 1
  roulet = parseInt (roulet)

  //comparing user's guess input with roulet
  if (roulet == clicker) {
    document.getElementById('congrats').innerHTML = "Congrats Bro!"
  }
}
