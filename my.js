$(document).ready(function(){
    $('.texts').textillate({
    minDisplayTime: 1000, 
    in: { effect: 'flipInX', sync: true }, 
    out :{  delay: 3, effect: 'lightSpeedOut', sync: true},
    loop: true
});
$('.texts').css({'font-color':'red'});    
});
