   
let son1 = 0
let son2 = 6400
let son3 = 2450
let son4 = 0
let Counter = document.getElementById('Counter')
let counterrow = document.getElementById('counter-row')
let counters_h3 = document.getElementsByClassName('counters-h3')
let counter1 = document.querySelector('#counter-1')
let counter2 = document.querySelector('#counter-2')
let counter3 = document.querySelector('#counter-3')
let counter4 = document.querySelector('#counter-4')
if (window.screen.width <= 500){
    counterrow.style.cssText =
        'display : flex;' +
        'flex-direction : column;' +
        'justify-content: space-around;'+
        'height : 600px';

    counter1.style.marginTop = 90+'px'
    counter1.style.marginBottom = 30+'px'
    counter2.style.marginBottom = 30+'px'
    counter3.style.marginBottom = 30+'px'
    counter4.style.marginBottom = 30+'px'

    counter1.style.borderRight = 'rgba(0,0,0,0%)'
    counter2.style.borderRight = 'rgba(0,0,0,0%)'
    counter3.style.borderRight = 'rgba(0,0,0,0%)'
    counter4.style.borderRight = 'rgba(0,0,0,0%)'

    Counter.style.cssText = 'height : 800px;' +
        'flex-direction : column;' +
        'align-content : space-between;' +
        'justify-content : space-between;';
}




function countNumber1(){
    son1++
    counter1.innerHTML = son1
    let func = setTimeout('countNumber1()',70)
    if(son1===15){
        clearTimeout(func)
    }
}

function countNumber2(){
    son2++
    counter2.innerHTML = son2
    let func = setTimeout('countNumber2()', 0.01)
    if(son2===7128){
        clearTimeout(func)
    }
}

function countNumber3(){
    son3++
    counter3.innerHTML = son3
    let func = setTimeout('countNumber3()',1)
    if(son3===3201){
        clearTimeout(func)
    }
}

function countNumber4(){
    son4++
    counter4.innerHTML = son4+'%'
    let func = setTimeout('countNumber4()',10)
    if(son4==100){
        clearTimeout(func)
    }
}
countNumber1(), 
countNumber2(),
countNumber3(),
countNumber4()