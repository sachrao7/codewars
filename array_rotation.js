function solve (arr) {
  // if sorted return A, if desending return d
  // if the min index is at 0 and the max index is at length, then A
  // if max indexis at 0 and min index at length then D
  // if min > Max then its RA, else RD
  
  
  let minIndex = arr.indexOf(Math.min(...arr))
  let maxIndex = arr.indexOf(Math.max(...arr))

  
  if (minIndex === 0 && maxIndex === arr.length -1) {
    return 'A'
  }
  if (maxIndex === 0 && minIndex === arr.length -1) {
    return 'D'
  }
  if (minIndex > maxIndex) {
    return 'RA'
  }
  return 'RD'
}
