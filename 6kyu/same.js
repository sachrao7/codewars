function comp(array1, array2){
  //your code here
  
  if (array2 && array1) {
  array1.forEach (item => {
    if (array2.includes(item**2)) {
      array2.splice(array2.indexOf(item**2),1)
    }
  })
  return array2.length ==0 ? true: false
}
  return false
  }
