function longestConsec(strarr, k) {
    // your code
  
  if (strarr.length != 0 && k<=strarr.length && k>0) {
    let max=0
    let str=''
    for (let i =0; i<=strarr.length-k; i++) {
      if (strarr.slice(i, i+k).join('').length > max) {
        max = strarr.slice(i, i+k).join('').length
        str = strarr.slice(i, i+k).join('')
      }  
    }
    return str
  }
  return ""
}
