function demoWhile() {
  var i = 0;
  var total = 0;
  do{
      i++
      total += i;
  }while(total > 10000);
//   while (total > 10000) {
//     i++;
//     total += i;
//   }
  document.getElementById("resultBt1").innerHTML = i;
}
