// complete the function
function solution(string) {
  
  return string.split('').map( item => {
    if (item == item.toUpperCase()) {
      return ' ' + item
    }
    else {
      return item
    }
  }).join('')
    
}

