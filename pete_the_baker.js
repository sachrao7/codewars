function cakes(recipe, available) {
  /*
  - if an ingredient is in recipe but is not in available then return false
  - else return the min of dividing available by recipe
  */
  let result = Infinity
  for (let key in recipe) {
    if (!(available.hasOwnProperty(key))) {
      return 0
    }
    result = Math.min(result, Math.floor(available[key]/recipe[key]))
    
  }
  return result
}
