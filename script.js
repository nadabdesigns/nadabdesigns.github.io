let manuscript = document.getElementById('01')
let background = document.getElementsByTagName('body')[0]
let text = document.getElementById('01text')

manuscript.addEventListener('mouseover',(e)=>{
	background.style.backgroundImage = "url('assets/desktop/01.png')";
	console.log(background)
	text.textContent = '01';
	text.style.color = 'black';

	

	e.target.style.color ='purple'
	
})
manuscript.addEventListener('mouseout',(e)=>{
	background.style.backgroundImage = "url('assets/IMAG0031.jpg')";
	e.target.style.color ='black'
	text.textContent = '00'
})

 
