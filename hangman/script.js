var words = ["rose", "lily", "geranium","sunflower","violet","peony","carnation","iris","hyacinth","daffodil"];

var word = words[Math.floor(Math.random() * words.length)];

// console.log("Random word is: " + word);

var answerArray = [];

for (var i = 0; i < word.length; i++){
  answerArray[i] = "_";
}

var remainingLetters = word.length;

while (remainingLetters > 0){
  // console.log("answerArray1 = " + answerArray);
  // console.log("word.length = " + word.length);
  // console.log("remainingLetters = " + remainingLetters);

  alert(answerArray.join(" "));

var guess = prompt("Guess a letter, or click Cancel to stop playing").toLowerCase();
var guessCounter = 0;

if(guess === null){
  break;
}else if(guess.length !== 1){
  // console.log("answerArray2 = " + answerArray);
  alert("Please enter a single letter.");
}else{

  guessCounter += 1;
  console.log(guessCounter);
  if(guessCounter > 10){
    console.log("out of guesses");
  }

  for (var j = 0; j < word.length; j++){
    if(word[j] === guess){
      answerArray[j] = guess;
      remainingLetters--;
    }
  }

}
}

alert(answerArray.join(" "))
alert("Good Job! You guessed: " + word + ". Refresh to play again!");
