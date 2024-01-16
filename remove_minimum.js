function removeSmallest(numbers) {
    let minValue = Math.min(...numbers)
    let minIndex = numbers.indexOf(minValue)
        
  
    return  numbers.filter( (item, index) => (index != minIndex) )
  }