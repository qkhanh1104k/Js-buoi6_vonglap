function demoWhile() {
  var i = 0;
  var total = 0;
  do {
    i++;
    total += i;
  } while (total < 10000);
  //   while (total > 10000) {
  //     i++;
  //     total += i;
  //   }
  document.getElementById("resultBt1").innerHTML = i;
}

// bài tập 2:
function demoWhile2() {
  var x = +document.getElementById("txtNumBt21").value;
  var value = +document.getElementById("txtNumBt22").value;
  var total = 0;
  var i = 0;
  do {
    i++;
    total += x**i;
  } while (i < value);
  document.getElementById("resBt2").innerHTML = total ;
}
// bài tập 3:
function demoWhile3() {
    var value = +document.getElementById("txtNumBt3").value;
    var total = 1;
    var i = 0;
    do {
      i++;
      total = total*(total+i);
    } while (i < value);
    document.getElementById("resBt3").innerHTML = total ;
  }