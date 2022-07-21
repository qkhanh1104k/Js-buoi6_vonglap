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
function demoWhile() {
  var x = +document.getElementById("txtNumBt21").value;
  var value = +document.getElementById("txtNumBt22").value;
  var total = 0;
  for (var n = 0; n < value; n++) {
    total = (x + x) ^ n;
  }

  document.getElementById("resultBt2").innerHTML = total;
}
