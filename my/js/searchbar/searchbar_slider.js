let container = document.getElementById('container')
let slider = document.getElementById('search_slide_item')
let slider_onclicker = document.getElementById('searchbar_slider')

//'#f5421c' === orange

//'#1d1d1f' === whitegrey
function d(){
    console.log(window.pageYOffset)
}
function searchbar_slider_open(target){
        slider.style.display = 'block'

}
function searchbar_slider_close(target){
    slider.style.display = 'none'

}