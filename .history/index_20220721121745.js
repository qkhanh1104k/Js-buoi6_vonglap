function demoWhile(){
    var max = 1000;
    var i = 0;
    var total = 0;
    do{
        i++
        total += i;
    }while(total < 10000);
    document.getElementById("resultBt1").innerHTML= i;
}
