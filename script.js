let svgbk = document.getElementById('svgbk');
let svgarrow = document.getElementById('svgarrow');
let textchange = document.getElementById('textcolor');
let manuscript = document.getElementById('01');
let spread = document.getElementById('02');
let binding = document.getElementById('03');
let links = document.getElementById('04');
let functions = document.getElementById('05');
let background = document.getElementsByTagName('body')[0];
let text = document.getElementById('01text');

// manuscript
manuscript.addEventListener('mouseover', () => {
	background.style.backgroundImage = "url('assets/desktop/01.png')";
	
	text.textContent = '01';
	text.style.color = 'white';
	svgbk.style.backgroundImage = "url('assets/blank.svg')";
});

manuscript.addEventListener('mouseout', () => {
	svgbk.style.backgroundImage = "url('assets/cow.svg')";
	background.style.backgroundImage = "url('assets/IMAG0031.jpg')";
	text.style.color = 'white';
	text.textContent = '00';
	
});

// spread
spread.addEventListener('mouseover', () => {
	background.style.backgroundImage = "url('assets/desktop/02.png')";
	text.textContent = '02';
	text.style.color = 'black';
});

spread.addEventListener('mouseout', () => {
	background.style.backgroundImage = "url('assets/IMAG0031.jpg')";
	text.style.color = 'white';
	text.textContent = '00';
});

// binding
binding.addEventListener('mouseover', () => {
	background.style.backgroundImage = "url('assets/desktop/03.png')";
	text.textContent = '03';
	text.style.color = 'white';
	svgbk.style.backgroundImage = "url('assets/red.svg')";
	textchange.style.color = 'white';
	svgarrow.src = 'assets/Arrowwhite.svg';
});

binding.addEventListener('mouseout', () => {
	background.style.backgroundImage = "url('assets/IMAG0031.jpg')";
	svgbk.style.backgroundImage = "url('assets/cow.svg')";
	text.style.color = 'white';
	text.textContent = '00';
	textchange.style.color = 'black';
	svgarrow.src = 'assets/Arrow.svg';
});

//links
links.addEventListener('mouseover', () => {
	background.style.backgroundImage = "url('assets/desktop/04.png')";
	text.textContent = '04';
	text.style.color = 'black';
	svgbk.style.backgroundImage = "url('assets/yellow.svg')";
	textchange.style.color = 'black';
	svgarrow.src = 'assets/Arrow.svg';
});

links.addEventListener('mouseout', () => {
	background.style.backgroundImage = "url('assets/IMAG0031.jpg')";
	text.textContent = '00';
	text.style.color = 'white';
	svgbk.style.backgroundImage = "url('assets/cow.svg')";
	textchange.style.color = 'black';
	svgarrow.src = 'assets/Arrow.svg';
});

//Functions 
functions.addEventListener('mouseover', () => {
	background.style.backgroundImage = "url('assets/desktop/05.png')";
	text.textContent = '05';
	text.style.color = 'white';
	text.style.mixBlendMode = 'exclusion';
	svgbk.style.backgroundImage = "url('assets/blank.svg')";
});

functions.addEventListener('mouseout', () => {
	background.style.backgroundImage = "url('assets/IMAG0031.jpg')";
	text.style.color = 'white';
	text.textContent = '00';
	text.style.mixBlendMode = 'normal';
});




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




