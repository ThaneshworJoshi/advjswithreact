// counting words
function longestWordCount(word){
  let splitedWord = word.split(" ");
  let longestWord = "";
  for(word of splitedWord){
    if(word.length > longestWord.length){
      longestWord = word
    }
  }
  console.log(longestWord)
}
longestWordCount("There are many people right here.")