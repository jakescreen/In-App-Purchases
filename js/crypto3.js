$('document').ready(() => {

    username = localStorage.getItem('username');
    password = localStorage.getItem('password');
    if(username && password) {
        $('#clickerLink').remove('disabled');
        $('#investLink').remove('disabled');
        $('.landing').show();
    } else {
        $('.register').show();
    }
    $('#submitLogin').on('click', ()=>{
        if(document.getElementById('submitLogin').innerHTML=='Register') {
            register($('#inputEmail').val(), $('#inputPassword1').val(), $('#inputPassword2').val());
        }
    });

});

const register = (email, p1, p2) => {
    if(p1!=p2) {
        alert('Passwords Do Not Match');
        return;
    }
    if(!checkEmail(email)) {
        alert('Invalid Email');
        return;
    }
};

const checkEmail = (email) => {
    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(email);
};