var incr = document.getElementById('increase'), 
decr = document.getElementById('decrease'), 
reset = document.getElementById('reset');
var oldNum = document.getElementById('oldNum');
var Total = document.getElementById('number');

incr.addEventListener('click', function () {
    Total = oldNum + 1;
    document.getElementById('number').innerText = Total;
    oldNum = Total;
})

decr.addEventListener('click', function () {
    Total = oldNum - 1;
    document.getElementById('number').innerText = Total;
    oldNum = Total;
})

reset.addEventListener('click', function(){
    Total = 0;
    oldNum  = 0;
    document.getElementById('number').innerText = Total;
})