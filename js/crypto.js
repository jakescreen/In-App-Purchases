var count = +($("#counter").text())

$(document).ready(function() {
    
    $("#coinIcon").click(function(){
        count = count + 1;
        $("#counter").text(count);
    });

    $("#saveButton").click(function(){
        localStorage.setItem('Count', count);
    });

    $("#loadButton").click(function(){
        count = +(localStorage.getItem('Count'));
        $("#counter").text(count);
    });



});