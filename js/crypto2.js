$('document').ready(() => {

    $('#upgradeMenuButton').on('click', () => {
        const btm = $('#upgradeMenu').css('bottom');
        (btm==='0px')?closeMenu():openMenu();        
    });

    let count = +($("#counter").text()); // initial count value
    let delta = 1; // initial change in count per click
    
    $("#coinIcon").click(function(){
        count = count + delta;
        $("#counter").text(count);
    });

    $("#saveButton").click(function(){
        localStorage.setItem('Count', count);
        localStorage.setItem('Delta', delta);
    });

    $("#loadButton").click(function(){
        count = +(localStorage.getItem('Count'));
        delta = +(localStorage.getItem('Delta'));
        $("#counter").text(count);
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