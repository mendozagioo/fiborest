// Simple fibonacci's logic
const fibonacci = position => {
  if (isNaN(position))
    return "Error, position must be a number"

  // Reduce 1 because the array start with 0
  let pos = position - 1
  let prev = 1
  let next = 0
  let temp = null

  while(pos >= 0) {
    temp = prev
    prev = prev + next
    next = temp
    pos--
  }

  return next
}

module.exports = {
  fibonacci
}