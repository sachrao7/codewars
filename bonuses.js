bonus = function(arr, s) {
  let total = arr.reduce((a,c) => a + 1/c, 0);
  return arr.map(e => Math.round(s*(1/e)/total))
}
}
