# comfy-coding-challenge
Comfy's coding challenge/take home project.

2020-02-20th: Wrote a function that takes a _String_ as input, and returns a map/dictionary of the words + their number of occurences in the string, ignoring upper or lowercase.

2020-02-20th 16:18: Have some questions about input/output:
- Does my solution need to be able to read a _file_, or just read a string?
- How should the HTML file look like (does the output need to be displayed inside `<div>`s, for example)?
- Are there other bodies of text I can verify my output against?
- If I'm building this as a Node.js script, am I allowed to leverage built in Node.js modules (e.g. `fs`)?

<details><summary>Challenge description</summary>

Using Javascrit print a list of all the words used in a sample of text. For each word you must also provide the number of times that word appears. Consider the following text from J.D. Salinger’s The Catcher in the Rye:

"Anyway, I keep picturing all these little kids playing some game in this big field of rye and all. Thousands of little kids, and nobody's around - nobody big, I mean - except me. And I'm standing on the edge of some crazy cliff. What I have to do, I have to catch everybody if they start to go over the cliff - I mean if they're running and they don't look where they're going I have to come out from somewhere and catch them. That's all I do all day. I'd just be the catcher in the rye and all. I know it's crazy, but that's the only thing I'd really like to be. "

The output of your code should resemble the following:

anyway=1
i=8
keep=1
picturing=1
all=5
these=1
little=2
kids=2
playing=1
some=1
game=1
in=2
this=1
big=2
field=1
of=3
rye=2
and=6
...

Rules:

* Do not use any third party software
* Please return one HTML file
* Please focus on the Javascript.  HTML and CSS should be minimal.
* This isn't a grammar test. You may ignore abbreviations, hyphenation, and most other punctuation.
* The only punctuation that you do need to be concerned about is the single quote. Contractions should be seen as single words: "can't" should stay "can't" not "can" and "t". By the same token possessives should be
maintained: "Jack's" should be counted separately than "Jack".
* The tally should be case insensitive. "Hello" and "hello" are the same word.
* The output data must consist of each word and the number of instances for each word.
* Be prepared to explain your approach.
* Ask questions to clarify any requirements.
</details>
