function count(string) {
  // TODO
  let result = {}
  
  if (string) {
  for (let i=0; i<string.length; i++) {
    if(Object.keys(result).includes(string[i] )) {
        result[string[i]] +=1 
    }
    else {
        result[string[i]] = 1
    }
  }
    return result
  }
  return {};
}
