function longest(s1, s2) {
  // your code
  result = []
  let concated = s1+s2
  for (let i = 0; i<concated.length; i++) {
    if (!(result.includes(concated[i]))) {
      result.push(concated[i])
    }
  }
  return result.sort().join('')
}
