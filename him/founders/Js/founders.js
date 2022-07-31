let card1 = document.getElementById('founder_row_card1')
let card2 = document.getElementById('founder_row_card2')
let card3 = document.getElementById('founder_row_card3')
let founders = document.getElementById('founders')
let founders_row = document.getElementById('founders_row')
let founder_row_button = document.getElementById('founder_row_button')
let founders_title = document.getElementById('founders_title')
let bussines_text = document.getElementById('bussines-text')
if (window.screen.width <= 500){
	founder_row_button.style.display = 'none'
	bussines_text.style.width = 300+'px'
	bussines_text.style.marginBottom = 20+'px'
	bussines_text.style.marginTop = 20+'px'
	founders_title.style.marginBottom =  0
	card1.style.position = 'static'
	card2.style.position = 'static'
	card3.style.position = 'static'
	card1.style.width = 400+'px'
	card2.style.width = 400+'px'
	card3.style.width = 400+'px'
	card1.style.marginBottom = 40+'px'
	card2.style.marginBottom = 40+'px'
	card3.style.marginBottom = 70+'px'
	founders.style.width = 500+'px'
	founders.style.height = 1200+'px'
	founders.style.backgroundSize = 1000+'px'+' '+ 1200+'px'
	founders_row.style.position = 'static'
	founders_row.style.width = 490+'px'
	founders_row.style.overflow = 'visible'
	founders_row.style.display = 'flex'
	founders_row.style.flexDirection = 'column'
	founders_row.style.alignItems = 'flex-start'
	founders_row.style.justifyContent = 'space-around'
	founders_row.style.marginTop = -230+'px'
	founders_title.style.marginTop = -180+'px'
}


function slide(){
	console.log('salom')
	if (card1.style.left ==	 60+'px') {
	card1.style.left = -950+'px'
	card2.style.left = 60 +'px'
	card3.style.left = 760 + 'px'
	console.log('orig')

	}

	else {
	card1.style.left = 60+'px'
	card2.style.left = 760 +'px'
	card3.style.left = 1500 + 'px'		
	console.log('neorig')
	}
}