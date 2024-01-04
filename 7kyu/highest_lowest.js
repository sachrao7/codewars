function highAndLow(numbers){
  arr = numbers.split(' ')
  return [Math.max(...arr), Math.min(...arr)].join(' ')
}
