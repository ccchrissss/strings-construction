function stringsConstruction(a, b) {

  arrA = a.split('')
  // console.log('arrA: ', arrA)

  const occurrences = b.split('').reduce( (acc, curr) => {
    return acc[curr] ? ++acc[curr] : acc[curr] = 1, acc
  }, {});
  
  let entriesB = Object.entries(occurrences)
  // console.log('entriesB: ', entriesB)

  function filterByPosition(array, letter, position) {
    return array.filter(innerArray => innerArray[position] == letter);
  }

  let filteredEntriesB = []
  let values = []

  for (let i = 0; i < arrA.length; i++) {
    filteredEntriesB.push(filterByPosition(entriesB, arrA[i], 0))
    values.push(filteredEntriesB[i].map( e => {return e[1]}))
  }

  // console.log('filteredEntriesB: ', filteredEntriesB)
  // console.log('this is values: ', values)

  let min = Math.min.apply(null, values);
  // console.log('this is min: ', min)

  return min
}

console.log(stringsConstruction('xsy', 'xxxxssxxxxyzzyzzzq'))

// parameters: A, B
// return: integer of times A can be constructed using letters of B only once
// e.g. stringsConstruction()
// results in 1
