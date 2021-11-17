const basket = [1, 2, 2, 3, 70, 65, 7];

basket.sort(function (a, b) {
  console.log("a:", a);
  console.log("b:", b);
  console.log(a - b);
});
