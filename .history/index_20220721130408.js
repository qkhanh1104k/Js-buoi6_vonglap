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
  var n = 0;
  do {
    n++;
    total += x**n;
  } while (n <= value);
  document.getElementById("resultBt2").innerHTML = total;
}
