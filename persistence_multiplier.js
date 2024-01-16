function persistence(num) {

	const str = String(num)
  if (str.length ==1) {
  	return 0
  }
  
  const nextNum = str.split('').reduce( (a,b) => a *b, 1 )
	return 1+ persistence(nextNum)
}

