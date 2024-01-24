function gimme(triplet) {
  console.log(Math.max(...triplet));
  return triplet.findIndex((item, idx, arr) => {
    return item < Math.max(...arr) && item > Math.min(...arr)
    });
}
