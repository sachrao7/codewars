function oddOrEven(array) {
   //enter code here
  let sum = array.reduce(  (accum, current) => accum + current, 0 )
  return sum %2 == 0? "even" : "odd"
}
