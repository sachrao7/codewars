function candies(kids){
  let sum = 0
  if (kids.length > 1) {
    kids.forEach (item => {
      sum = sum + (Math.max(...kids) - item )
    })
    return sum
  }
  return -1
}
