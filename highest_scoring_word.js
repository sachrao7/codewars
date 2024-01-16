function high(x){
  
  let words = x.split(' ')
  let sum = 0
  let indexHighSum = 0
  words.forEach( (item,index) => {
    let wordSum = item.split('').reduce( (accum, current) => accum + current.charCodeAt() -96    ,0) 
    if (wordSum > sum) {
      sum = wordSum
      indexHighSum = index
    }
  })
  return words[indexHighSum]
}
