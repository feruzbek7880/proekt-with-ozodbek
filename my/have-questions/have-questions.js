let have_question_question_span1 = document.getElementById('span1')
let have_question_question_span2 = document.getElementById('span2')
let have_question_question_span3 = document.getElementById('span3')
function show_hide1(target){
    if (have_question_question_span1.style.display === 'none'){
        target.style.color = '#f5421c'
        have_question_question_span1.style.display = 'block'
        have_question_question_span1.style.color = 'black'
    }
    else{
        have_question_question_span1.style.display = 'none'
        target.style.color = 'black'
    }

}
function show_hide2(target){
    if (have_question_question_span2.style.display === 'none'){
        target.style.color = '#f5421c'
        have_question_question_span2.style.color = 'black'
        have_question_question_span2.style.display = 'block'
    }
    else{
        have_question_question_span2.style.display = 'none'
        target.style.color = 'black'
    }

}
function show_hide3(target){
    if (have_question_question_span3.style.display === 'none'){
        target.style.color = '#f5421c'
        have_question_question_span3.style.color = 'black'
        have_question_question_span3.style.display = 'block'
    }
    else{
        have_question_question_span3.style.display = 'none'
        target.style.color = 'black'
    }

}