// The second argument/parameter is expected to be a function
function findWaldo(arr, found) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === "Waldo") {
      found(i);   // execute callback
    }
  }
}

function actionWhenFound(j) {
  console.log("Found him!");
  console.log("Waldo found at index: " + j);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);