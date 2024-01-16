function longest(s1, s2) {
  // your code
  
  return [...new Set(s1+s2)].sort().join('')
}
