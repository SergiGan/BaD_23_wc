//Mini function to resolve the task
var firstUniqChar = function(string) {
    if (string.length === 0)
        return -1;

    for( let i = 0; i < string.length; i++) {
       const letter = string[i];
      // console.log(letter);
       if(string.indexOf(letter) === string.lastIndexOf(letter))
          return letter;
   }
   return -1
};
//sentence with some words
const string = 'The Tao gave birth to machine language.  Machine language gave birth to the assembler. The assembler gave birth to the compiler. Now there are ten thousand languages. Each language has its purpose, however humble. Each language expresses the Yin and Yang of software. Each language has its place within the Tao. But do not program in COBOL if you can avoid it. -- Geoffrey James, "The Tao of Programming"';
//c
const sentenceArr = string.split(' '); // sentences
let resultArr = [];
sentenceArr.forEach(word => {
  resultArr.push(firstUniqChar(word));
});
console.log(resultArr); // an array of unique character data from each word in the sentence
console.log("First unique from list of uniques is ", firstUniqChar(resultArr));
