var words = ["ground", "control", "to", "major", "tom"];


function map(array, callback) {
  var newArray = [];
  for (var element of array) {
  newArray.push(callback(element));
  //newArray.push(element);
  }
  return newArray;
  console.log(newArray);
}

var wordLength = map(words, function(word) {
  return word.length;
});
