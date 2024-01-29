function makeValley(arr) {
    let sortedArr = arr.slice().sort((a, b) => b - a);
    let leftWing = sortedArr.filter((_, index) => index % 2 === 0);
    let rightWing = sortedArr.filter((_, index) => index % 2 !== 0).reverse();

    return leftWing.concat(rightWing);
}
