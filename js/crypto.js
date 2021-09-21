var count = +($("#counter").text())

$(document).ready(function() {
    
    $("#coinIcon").click(function(){
        count = count + 1;
        $("#counter").text(count);
    });
});