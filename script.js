// on hovor svg 
let svgbk = document.getElementById('svgbk')
let svgarrow = document.getElementById('svgarrow')
// text color left div
let textchange = document.getElementById('textcolor')
// on hover stuff for text
let manuscript = document.getElementById('01')
let spread = document.getElementById('02')
let binding = document.getElementById('03')
let links = document.getElementById('04')
let functions = document.getElementById('05')

let background = document.getElementsByTagName('body')[0]
let text = document.getElementById('01text')


// on hover suff for text
manuscript.addEventListener('mouseover', (e) => {
	background.style.backgroundImage = "url('assets/desktop/01.png')";
	console.log(background)
	text.textContent = '01';
	text.style.color = 'white';
	// background change
	svgbk.style.backgroundImage = "url('assets/blank.svg')";

})
manuscript.addEventListener('mouseout', (e) => {
	background.style.backgroundImage = "url('assets/IMAG0031.jpg')";

	// e.target.style.color = 'black'
	text.style.color = 'white';

	text.textContent = '00'
	svgbk.stylebackgroundImage = "url('assets/cow.svg')";
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
	svgbk.style.backgroundImage = "url('assets/red.svg')";
	textchange.style.color = 'white';
	svgarrow.src = 'assets/Arrowwhite.svg';
	//
	// 
	// e.target.style.color = 'purple';

})
binding.addEventListener('mouseout', (e) => {
	background.style.backgroundImage = "url('assets/IMAG0031.jpg')";
	svgbk.style.backgroundImage = "url('assets/cow.svg')";
	// e.target.style.color = 'black'
	text.style.color = 'white';
	text.textContent = '00'
	textchange.style.color = 'black';
	svgarrow.src = 'assets/Arrow.svg';
})
links.addEventListener('mouseover', (e) => {
	background.style.backgroundImage = "url('assets/desktop/04.png')";
	console.log(background)
	text.textContent = '04';
	text.style.color = 'black';
	svgbk.style.backgroundImage = "url('assets/yellow.svg')";
	textchange.style.color = 'black';
	svgarrow.src = 'assets/Arrow.svg';
	// e.target.style.color = 'purple';

})
links.addEventListener('mouseout', (e) => {
	background.style.backgroundImage = "url('assets/IMAG0031.jpg')";
	console.log(background)
	text.textContent = '00';
	text.style.color = 'white';
	svgbk.style.backgroundImage = "url('assets/cow.svg')";
	textchange.style.color = 'black';
	svgarrow.src = 'assets/Arrow.svg';
})
functions.addEventListener('mouseover', (e) => {
	background.style.backgroundImage = "url('assets/desktop/05.png')";
	console.log(background)
	text.textContent = '05';
	text.style.color = 'white';
	text.style.mixBlendMode = 'exclusion';
	svgbk.style.backgroundImage = "url('assets/blank.svg')";
	// e.target.style.color = 'purple';

})
functions.addEventListener('mouseout', (e) => {
	background.style.backgroundImage = "url('assets/IMAG0031.jpg')";
	// e.target.style.color = 'black'
	text.style.color = 'white';

	text.textContent = '00'
	text.style.mixBlendMode = 'normal';
})





// For MOBILE

// store data for images
let box = document.getElementById('mobile');
let images = [
  'url("assets/cow_mobile")',
  'url("assets/mobile/01.jpg")',
  'url("assets/mobile/02.jpg")',
  'url("assets/mobile/03.jpg")',
  'url("assets/mobile/04.jpg")',
  'url("assets/mobile/05.jpg")'
];
let index = 0;
// grab data and replace
setInterval(() => {
  box.style.backgroundImage = images[index];
  index = (index + 1) % images.length;
}, 3000); 

// change the number value 
let textElement = document.getElementById('numb'); 
let count = 0;

// count up from 0
setInterval(() => {
  let padded = count.toString().padStart(2, '0');
  textElement.textContent = padded;

//   if the number value is 04 change the color to black
  if (padded === '04') {
    textElement.style.color = 'black';
  } else {
    textElement.style.color = 'white';
  }

  count = (count + 1) % 6;
}, 3000);




