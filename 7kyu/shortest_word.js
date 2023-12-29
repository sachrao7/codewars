function findShort(s){
  let arr = s.split(' ')
  let minLength = arr[0].length
  arr.forEach( item => {
    if (item.length < minLength) {
      minLength = item.length
    }
  })
  return minLength
}
