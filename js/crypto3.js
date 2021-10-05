let username;
let password;

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

});