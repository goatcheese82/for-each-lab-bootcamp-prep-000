function iterativeLog(array) {
  //calls .forEach() on array logs each element with ${index}: ${element} inside the callback
  array.forEach((element, i) => {console.log(`${i}: ${element}`)})
  return array
}
function iterate(callback) {
  //initialize an array, call .forEach() on array, passing callback to .forEach(), return the array
  var iceCream = ["RockyRoad", "MooseTracks", "Pickle"]
  iceCream.forEach(callback)
  return iceCream
}
function doToArray(array, callback) {
  //call .forEach() on the array, passing the callback as the forEach callback
  array.forEach(callback)
}
