function isIsogram(str){
  result = []
  
  for (let i =0; i<str.length; i++) {
    if (result.includes(str[i].toLowerCase())) {
      return false
    }
    result.push(str[i].toLowerCase())
  }
      console.log(result)

  return true
}
