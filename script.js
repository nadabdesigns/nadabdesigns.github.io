let manuscript = document.getElementById('01')
let spread = document.getElementById('02')
let binding = document.getElementById('03')
let links = document.getElementById('04')
let functions = document.getElementById('05')

let background = document.getElementsByTagName('body')[0]
let text = document.getElementById('01text')


manuscript.addEventListener('mouseover', (e) => {
	background.style.backgroundImage = "url('assets/desktop/01.png')";
	console.log(background)
	text.textContent = '01';
	text.style.color = 'black';
	// e.target.style.background = 'black';
	// e.target.style.color = 'purple';

})
manuscript.addEventListener('mouseout', (e) => {
	// background image
	background.style.backgroundImage = "url('assets/IMAG0031.jpg')";
	// big text color
	e.target.style.color = 'black'
	// small text syle
	e.target.style.background = 'none';
	
	text.style.color = 'white';
	text.textContent = '00'
})
spread.addEventListener('mouseover', (e) => {
	background.style.backgroundImage = "url('assets/desktop/02.png')";
	console.log(background)
	text.textContent = '02';
	text.style.color = 'black';
	// e.target.style.color = 'purple';

})
spread.addEventListener('mouseout', (e) => {
	background.style.backgroundImage = "url('assets/IMAG0031.jpg')";
	// e.target.style.color = 'black'
	text.style.color = 'white';
	text.textContent = '00'
})
binding.addEventListener('mouseover', (e) => {
	background.style.backgroundImage = "url('assets/desktop/03.png')";
	console.log(background)
	text.textContent = '03';
	text.style.color = 'white';
	// e.target.style.color = 'purple';

})
binding.addEventListener('mouseout', (e) => {
	background.style.backgroundImage = "url('assets/IMAG0031.jpg')";
	// e.target.style.color = 'black'
	text.style.color = 'white';
	text.textContent = '00'
})
links.addEventListener('mouseover', (e) => {
	background.style.backgroundImage = "url('assets/desktop/04.png')";
	console.log(background)
	text.textContent = '04';
	text.style.color = 'black';
	// e.target.style.color = 'purple';

})
links.addEventListener('mouseout', (e) => {
	background.style.backgroundImage = "url('assets/IMAG0031.jpg')";
	// e.target.style.color = 'black'
	text.style.color = 'white';
	text.textContent = '00'
})
functions.addEventListener('mouseover', (e) => {
	background.style.backgroundImage = "url('assets/desktop/05.png')";
	console.log(background)
	text.textContent = '05';
	text.style.color = 'white';
	text.style.mixBlendMode = 'exclusion';
	// e.target.style.color = 'purple';

})
functions.addEventListener('mouseout', (e) => {
	background.style.backgroundImage = "url('assets/IMAG0031.jpg')";
	// e.target.style.color = 'black'
	text.style.color = 'white';
	
	text.textContent = '00'
	text.style.mixBlendMode = 'normal';
})







