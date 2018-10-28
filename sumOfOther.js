function sumOfOther (arr) {
  let arr1 = [];
  for (let i = 0; i < arr.length; i++) {
    let res = arr.reduce(function(sum, current) {
      return sum + current;
    }, 0) - arr[i];
    arr1.push(res);
  }
  return arr1;
}
