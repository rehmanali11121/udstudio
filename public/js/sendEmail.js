(function(){
    emailjs.init("9BH-8IDugsSitZZNw");
})();
    document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    // send email using EmailJS
    var template_params = {
    "user_name": document.getElementsByName("user_name")[0].value,
    "user_phone": document.getElementsByName("user_phone")[0].value,
    "user_company": document.getElementsByName("user_company")[0].value,
    "user_email": document.getElementsByName("user_email")[0].value,
    "message": document.getElementsByName("message")[0].value,
    "contact_number": Math.random() * 100000 | 0
};

    var service_id = "service_ji5w7wa";
    var template_id = "template_pvc6p5u";
    emailjs.send(service_id, template_id, template_params)
    .then(function(response) {
    console.log("SUCCESS", response);
}, function(error) {
    console.log("FAILED", error);
});

});

function sendContactForm(){
    emailjs.sendForm('service_ji5w7wa', 'template_pvc6p5u', '#contact-form')
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
        }, function(error) {
            console.log('FAILED...', error);
        });
}
