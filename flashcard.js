
// dependency for inquirer npm package
var inquirer = require("inquirer");
var fs = require("fs");
var cards = []; //storing cards in this array
// constructor function used to create programmer objects
function BasicFlashCard(front, back) {
  this.front = front;
  this.back = back;
  this.type = "basic";
  this.showCard = function(){
    back = this.back;
    console.log(""); //console log what the answer is
    console.log("Front: " + this.front); 
     inquirer.prompt([
            {
                type: "input",
                message: "What is on the back?",
                name: "input",
            }
            ]).then(function(response){
            //show the result
            if (response.input === back) {
                console.log("You are correct!");
            } else {
                console.log("Nope.  The back was: " + back);
            }
            //re-start the loop
            startflashcard();
        })
    };
};
  


// creates the printInfo method and applies it to all programmer objects
BasicFlashCard.prototype.printInfo = function() {
  console.log("front: " + this.front + "\nback: " + this.back +
  "\ntype: " + this.type + "\nshowCard: " + this.showCard);
  console.log("---------------");
};
// variable we will use to count how many times our questions have been asked
var count = 0;
// array in which we will store each of our new programmer objects
var BasicFlashCardArray = [];

var askQuestion = function() {
  // if statement to ensure that our questions are only asked five times
  if (count < 5) {
    console.log("What is on the back?");
    // runs inquirer and asks the user a series of questions whose replies are
    // stored within the variable answers inside of the .then statement
    inquirer.prompt([
      {
        name: "front",
        message: "Who was the only American President to be unanimously elected?"
      }, {
        name: "front",
        message: "Why was Chester A. Arthur nicknamed Elegant Arthur?"
      }, {
        name: "front",
        message: "Who was the first President to have a Christmas Tree in the White House?"
      }, {
        name: "front",
        message: "Who was the first President to hold a press conference on television?"
      }
       ]).then(function(answers) {
      // initializes the variable newuser to be a programmer object which will
      // take in all of the user's answers to the questions above
      var newUser = new BasicFlashCard(
        answers.front,
        answers.back,
        answers.type,
        answers.showCard);
      // pushes newuser object into our array
      BasicFlashCardArray.push(newUser);
      // add one to count to increment our recursive loop by one
      count++;
      // run the askquestion function again so as to either end the loop or ask the questions again
      askQuestion();
    });
    // else statement which runs a for loop that will execute .printInfo() for each object inside of our array
  }
  else {
    for (var x = 0; x < BasicFlashCardArray.length; x++) {
      BasicFlashCardArray[x].printInfo();
    }
  }
};

// call askQuestion to run our code
askQuestion();
//======================================================================================

// var inquirer = require("inquirer");
// var fs = require("fs");
// var BasicFlashCard = require("./basic.js");
// // var ClozeFlashCard = require("./cloze.js");

// //======================================================================================

// function writeToFile(){
//     //only read the file here
//     fs.readFile("cardLog.txt", "utf8", mergeArrays);

//     function mergeArrays(err, data)  //this 
//     {
//         if(err)
//         {
//             console.log("Error reading card file: " + err);
//             process.exit(2);
//         }
//         if(data !== null && data.length != 0 )
//         {
//             var cardDataFromFile = JSON.parse(data);
//             var oldDeck = new CardDeck();
//             for(var i = 0; i < cardDataFromFile.length; i++)
//             {
//                 var cardObject = cardDataFromFile[i];
//                 var card = null;
//                 if(cardObject.hasOwnProperty('front')){
//                     card = new BasicFlashCard(cardObject['front'], cardObject['back']);
//                 }
//                 else{
//                     card = new ClozeFlashCard(cardObject['cloze'], cardObject['rest']);
//                 }
                
//                 oldDeck.addCard(card);
//             }
//                 deck = oldDeck.mergeDecks(deck);

          
//         }

        
//         fs.writeFile("cardLog.txt",JSON.stringify(deck.getCards()), function(err){
//             if(err){
//                 console.log("Flash card write error: " + err);
//                 process.exit(1);
//             }
//             //clear the current deck for the next time
//             deck.clearDeck();
//             mainMenu();
//         });
//     }
// }


// function readCards()
// {
//         fs.readFile("cardLog.txt", "utf8", processCards);

//         function processCards(err, data) {
//             if (err) {
//                 console.log("Error reading card file: " + err);
//                 process.exit(2);
//             }
//             if(data !== null && data.length != 0 )
//             {
//                 var cardDataFromFile = JSON.parse(data);
//             // console.log(cardDataFromFile);
//                 for(var i = 0; i < cardDataFromFile.length; i++)
//                 {
//                     var cardObject = cardDataFromFile[i];
//                 // console.log(JSON.parse(JSON.stringify(cardObject)));
//                 for (var card in cardObject)
//                     {
//                         console.log(card + ": " + cardObject[card]);
//                     }
//                     console.log("-----------------------");
//                 }
//                 console.log("*********************");
//             }
//             else{
//                 console.log("There is no card data in the file.");
//             }
// //              
//         }

// }


