function wordCounter(string){
   var words = string.split(/[\s,\.]/),
       dictionary = {};
   words.forEach(function(word){
      let entry = word.toLowerCase();
      if (word.length > 0){
         if (dictionary[entry]){
            dictionary[entry] += 1;
         } else {
            dictionary[entry] = 1;
         }
      }
   });
   return dictionary;
}

console.log(wordCounter("This is a test sentence. Hopefully it will count the words in this sentence."));
