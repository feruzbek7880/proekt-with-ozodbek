let p1 = document.getElementById('p1')
let p2 = document.getElementById('p2')
let p3 = document.getElementById('p3')
let son = 0
function next(){
    son++
    if (son === 1){
        p1.style.top = -700+'px'
        p2.style.top =   0
        p3.style.top = 700+'px'

        karusel_text_div1.style.top = -250+'px'
        karusel_text_div2.style.top = 0
        karusel_text_div3.style.top = 250+'px'
    }
    if (son === 2){
        p1.style.top = -1400+'px'
        p2.style.top =   -700+'px'
        p3.style.top = 0
        karusel_text_div1.style.top = -500+'px'
        karusel_text_div2.style.top = -250+"px"
        karusel_text_div3.style.top = 0
    }
    if (son === 3){
        son = 0
    }
    if (son === 0){
        p1.style.top = 0
        p2.style.top =   700+'px'
        p3.style.top = 1400+'px'
        karusel_text_div1.style.top = 0
        karusel_text_div2.style.top = 250+'px'
        karusel_text_div3.style.top = 500+'px'
    }

    // p1.style.top = -600+'px'
    // p2.style.top =   0
    // p3.style.top = 600+'px'
    console.log(son)
}