// The second argument/parameter is expected to be a function
function findWaldo(arr, found) {
  arr.forEach(function(element, index) {
    if (element === "Waldo") {
      found(index);   // execute callback
    }
  });
}

function actionWhenFound(indexNumber) {
  console.log("Found him!");
  console.log("Waldo found at index: " + indexNumber);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);