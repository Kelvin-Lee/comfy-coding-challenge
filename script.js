function wordCounter(string){
   var words = string.split(/[\s,\.-]/), // TODO: Replace with more generic regex?
       dictionary = {};
   words.forEach(function(word){
      let entry = word.toLowerCase();
      if (word.length > 0){ // Guard against empty-string
         if (dictionary[entry]){
            dictionary[entry] += 1;
         } else {
            dictionary[entry] = 1;
         }
      }
   });
   return dictionary;
}

console.log(wordCounter("Anyway, I keep picturing all these little kids playing some game in this big field of rye and all. Thousands of little kids, and nobody's around - nobody big, I mean - except me. And I'm standing on the edge of some crazy cliff. What I have to do, I have to catch everybody if they start to go over the cliff - I mean if they're running and they don't look where they're going I have to come out from somewhere and catch them. That's all I do all day. I'd just be the catcher in the rye and all. I know it's crazy, but that's the only thing I'd really like to be. "));
