$('document').ready(() => {

    $('#upgradeMenuButton').on('click', () => {
        const btm = $('#upgradeMenu').css('bottom');
        (btm==='0px')?closeMenu():openMenu();        
    });

    let costs = [10,100,100,200, 1000,100,200,400,800,1200];
    let speedUp = [2,10,50,100,200,1,2,5,7,10];

    let count = +($("#counter").text()); // initial count value
    let delta = 1; // initial change in count per click
    let rate = 0;
    
    $("#coinIcon").click(function(){
        count = count + delta;
        $("#counter").text(count);
    });

    const purchaseUpgrade = (upNum) => {
        if(count >= costs[upNum]){
            count = count - costs[upNum];
            delta = delta + speedUp[upNum];
            costs[upNum] = Math.ceil(costs[upNum] * 1.03);
        }
        else{
            alert("insufficient currency");
        }
        $("#counter").text(count);
    }

    const purchaseSpeed = (upNum) => {
        if(count >= costs[upNum]){
            count = count - costs[upNum];
            rate = rate + speedUp[upNum];
            costs[upNum] = Math.ceil(costs[upNum] * 1.03);
        }
        else{
            alert("insufficient currency");
        }
        $("#counter").text(count);
    }



    setInterval(function(){
        count = count + rate;
        $("#counter").text(count);
    },500);

    $("#rig1").click(function(){
       purchaseUpgrade(0);
    });

    $("#speed1").click(function(){
        purchaseSpeed(5);
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

const purchaseUpgrade = () => {
    
}