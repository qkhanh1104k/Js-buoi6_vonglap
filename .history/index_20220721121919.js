function demoWhile(){
    var max = 10000;
    var i = 0;
    var total = 0;
    do{
        i++
        total += i;
    }while(total > max);
    document.getElementById("resultBt1").innerHTML= i;
}
