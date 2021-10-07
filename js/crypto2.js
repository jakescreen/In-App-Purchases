$('document').ready(() => {

    $('#upgradeMenuButton').on('click', () => {
        const btm = $('#upgradeMenu').css('bottom');
        (btm==='0px')?closeMenu():openMenu();        
    });

    let costs = [10,100,200,400, 1000,100,200,400,800,1200];
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
        var upLoc = "#costSpeed" + (upNum+1);
        console.log(upLoc);
        $(upLoc).text(costs[upNum]);
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
        var upLoc = "#costSpeed" + (upNum+1);
        console.log(upLoc);
        $(upLoc).text(costs[upNum]);
    }



    setInterval(function(){
        count = count + rate;
        $("#counter").text(count);
    },500);

    $("#rig1").click(function(){
       purchaseUpgrade(0);
    });
    $("#rig2").click(function(){
        purchaseUpgrade(1);
     });
     $("#rig3").click(function(){
        purchaseUpgrade(2);
     });
     $("#rig4").click(function(){
        purchaseUpgrade(3);
     });
     $("#rig5").click(function(){
        purchaseUpgrade(4);
     });

    $("#speed1").click(function(){
        purchaseSpeed(5);
     });
     $("#speed2").click(function(){
        purchaseSpeed(6);
     });
     $("#speed3").click(function(){
        purchaseSpeed(7);
     });
     $("#speed4").click(function(){
        purchaseSpeed(8);
     });
     $("#speed5").click(function(){
        purchaseSpeed(9);
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
        bottom: '-27%'
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

function playAudio(url){ //straightforward audio playing function for button objects
    new Audio(url).play();
}

