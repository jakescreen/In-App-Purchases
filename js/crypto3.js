console.log(window.location.search);

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
    $('#inputPassword1').on('keyup', () => {
        $('#passAlert').slideUp();
        $('#passAlert2').slideUp();
    });
    $('#inputPassword2').on('keyup', () => {
        $('#passAlert').slideUp();
        $('#passAlert2').slideUp();
    });
    $('#inputEmail').on('keyup', () => {
        $('#emailAlert').slideUp();
    });

});

const register = (email, p1, p2) => {
    if(!validate(email, p1, p2)) {
        window.location = `clicker.html?${email.substring(0, email.indexOf('@'))}`;
    }
};

const validate = (email, p1, p2) => {
    let fail = 0;
    let pa = "";
    let ea = "";
    if(!checkEmail(email)) {
        ea = ('Invalid Email');
        fail = 1;
    }
    if(!checkPassword(p1)) {
        pa = ('Password must have at least eight characters, with at least one uppercase, one lowercase, and one number.');
        fail = 1;
    }
    if(p1!=p2) {
        pa = ('Passwords Do Not Match');
        fail = 1;
    }
    passAlert(pa);
    emailAlert(ea);
    return fail;
}

const checkEmail = (email) => {
    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(email);
};

const checkPassword = (pass) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    return regex.test(pass);
}

const passAlert = (alert) => {
    if(alert==="") return;
    $('#passAlert').html(alert);
    $('#passAlert2').html(alert);
    $('#passAlert').slideDown();
    $('#passAlert2').slideDown();
}

const emailAlert = (alert) => {
    if(alert==="") return;
    $('#emailAlert').html(alert);
    $('#emailAlert').slideDown();
}

const submitLogin = (e) => {
    const key = e.which;
    if(key==13) $('#submitLogin').click();
};