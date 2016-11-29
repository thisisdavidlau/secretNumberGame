var randomNumber = Math.floor((Math.random() * 100) + 1)
var tries = 10
var guess = 0
var btn = document.getElementById('btn')
console.log(randomNumber)

var retry = document.getElementById('retry')

retry.addEventListener('click', function refresh() {
	window.location.reload();

}, false)

function getInfo() {

	var userInput = document.getElementById('userInput').value
	var text = document.getElementById('text')
	var chances = document.getElementById('chances')
	var circle = document.getElementById('circle')
	var wrap = document.getElementById('wrap')
	var lose = document.getElementById('lose')
	var h1finish = document.getElementById('h1finish')
	var h2finish = document.getElementById('h2finish')
	console.log(userInput)

	if (userInput == "") {
		guess = 0
	}

	else if (userInput < randomNumber) {
		text.innerHTML = '<p id="text">your number is<br>too low!</p>'
		guess++
		circle.className = "unset"
		chances.textContent = guess+"/"+tries
	}else if (userInput > randomNumber) {
		text.innerHTML = '<p id="text">your number is<br>too high!</p>'
		guess++
		circle.className = "unset"
		chances.textContent = guess+"/"+tries
	}else if (userInput == randomNumber) {
		lose.className = "unset"
		h1finish.textContent = 'you win! the random number is ' + randomNumber
		h2finish.textContent = 'play again?'
	}

	if (guess == tries) {
		circle.className = "unset redBack"
		lose.className = "unset"
	}
	
}


btn.onkeydown = function(e){
	if(e.keyCode == 13) {
		//prevent refresh when enter key is pressed
		e.preventDefault();
		//run function getInfo()
		getInfo();
	}
};

