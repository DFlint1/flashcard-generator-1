// This block of code will create a file called "cardLog.txt" that stores the answers.
// It will then print "President, Trivia" in the file
fs.writeFile("cardLog.txt", "President, Trivia", function(err) {

  // If the code experiences any errors it will log the error to the console.
  if (err) {
    return console.log(err);
  }

  // Otherwise, it will print: "cardLog.txt was updated!"
  console.log("cardLog.txt was updated!");

});
