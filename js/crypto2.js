$('document').ready(() => {

    $('#upgradeMenuButton').on('click', () => {
        const btm = $('#upgradeMenu').css('bottom');
        (btm==='0px')?closeMenu():openMenu();        
    });

});

const closeMenu = () => {
    $('#upgradeMenu').animate({
        bottom: '-32%'
    });
    $('#click').animate({
        width: '100%',
        left: '0%'
    });
}

const openMenu = () => {
    $('#upgradeMenu').animate({
        bottom: '0%'
    });
    $('#click').animate({
        width: '65%',
        left: '20%'
    });
}