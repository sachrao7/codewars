function wave(str){
  // Code here
  let result = []
  
  for (let i =0; i<str.length; i++) {
    let new_str = ''
    if (str[i] != ' ') {
        for (let j=0; j< str.length; j++) {
          if (j==i) {
            new_str += str[j].toUpperCase()
          }
          else {
            new_str += str[j]
          }
        }
     result.push(new_str)
    }



  }
  return result
}
