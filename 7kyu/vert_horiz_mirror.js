function vertMirror(strng) {
    // Your code
  //reverse each entry
  return strng.split('\n').map( str => {
    new_str = ''
    for (let i=str.length - 1; i >= 0; i--) {
      new_str += str[i]
    }
    return new_str
  }).join('\n')
}
function horMirror(strng) {
  return strng.split('\n').reverse().join('\n')
}
function oper(fct, s) {
  return fct(s)
}
