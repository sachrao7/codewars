function smaller(nums) {
//code me
  
  return nums.map( (item, index) => {
      return nums.slice(index).filter( item2 => item > item2).length
  })
  
  
}
