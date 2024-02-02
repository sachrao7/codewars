function areConsecutive(arr)
{
    // checking the adjacent elements
    for (var i = 1; i < arr.length; i++)
        if(arr[i]!=arr[i-1]+1)
            return false;
             
    return true;
}


function consecutiveNums(arr, groupLen) {
  
  if (groupLen == 1) {
    return true
  }
  if (arr.length % groupLen != 0 ) {
    return false
  }
  
  let arrSorted = arr.sort( (a,b) => a-b)
  console.log(arrSorted)
  for (let i = 0; i<arrSorted.length; i+= groupLen) {
    const chunk = arrSorted.slice(i, i+groupLen)
    console.log('chunked')
    console.log(chunk)
    if (!areConsecutive(chunk)) {
      return false
    }
  }
  return true
}
