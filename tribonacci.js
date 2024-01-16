function tribonacci(signature,n){
  let result = []
  for (let i =0; i< n; i++) {
    if (i<3) {result.push(signature[i])}

    else {result.push(result.slice(i-3, i).reduce((accum, current) => accum+current, 0))    
      }	
  }
  return result
}

