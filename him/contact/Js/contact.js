let contact = document.getElementById('contact')
let contact_email_button = document.getElementById('contact-email-button')
let contact_row = document.getElementById('contact-row')
let form_contact = document.getElementById('form-contact')
if (window.screen.width <=500){
    contact.style.cssText = 'height: 800px;'
        // 'padding-top:150px;';
    contact_row.style.cssText = 'height:700px;' +
        'border-top:rgba(0,0,0,0%);'
    contact_email_button.style.cssText = 'margin-left: 15px'
    form_contact.style.cssText = 'height:500px'
}