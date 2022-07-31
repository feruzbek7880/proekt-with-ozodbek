let footer_background_image = document.getElementById('footer-background-image')
let footer_background_image_text = document.getElementById('footer-background-image-text')
let footer_background_image_text_title = document.getElementById('footer-background-image-text-title')
let footer_background_image_text_buttons = document.getElementById('footer-background-image-text-buttons')
let footer_menu_about = document.getElementById('footer-menu-about')
let footer_main_row = document.getElementById('footer-main-row')
let footer_bottom_row = document.getElementById('footer-bottom-row')


let mobilka_menu = document.getElementById('mobilka_menu')
let footer_icons = document.getElementById('footer_icons')

if (window.screen.width <= 500){
    footer_icons.style.cssText = 'width: 50%;'
    footer_background_image.style.cssText = 'height:650px;' +
        'background-size: 500px 650px;' +
        'background-image: url("../../him/footer/foto/img.png");';
    footer_background_image_text_title.style.cssText = 'text-align : center;';
    footer_background_image_text_buttons.style.cssText = 'flex-direction: column;' +
        'align-items: center;' +
        'justify-content:space-around;';
    footer_main_row.style.cssText = 'width: 500px;' +
        'height: 1500px';
    footer_menu_about.style.cssText = 'display: flex;' +
        'flex-direction: column;' +
        'width: 500px;' +
        'height: 1500px';
    footer_bottom_row.style.cssText = 'height:1200px;' +
        'align-items:center;'
}


function mobilka_menu_open(){

if (mobilka_menu.style.display === 'flex'){
    mobilka_menu.style.display = 'none'
}
else{
    mobilka_menu.style.display = 'flex'
}
}