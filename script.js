 const jokes = {
 setup : [
    "Why did the scarecrow win an award?",
    "Why don’t skeletons fight each other?",
    "What do you call fake spaghetti?",
    "Why did the math book look sad?",
    "Why don’t eggs tell jokes?"
  ],
  
   punchline : [
    "Because he was outstanding in his field!",
    "Because they don’t have the guts!",
    "An impasta!",
    "Because it had too many problems.",
    "They might crack up!"
  ],
  
   extraTwist : [
    "And that's how you make a corny joke!",
    "Now you know why they keep quiet!",
    "Guess it couldn't handle the pressure!",
    "Math is tough, even for books!",
    "That yolk was too fragile!"
  ]
};
const randomNumber=num=>Math.floor(Math.random()*num);
const jokeFirstLine=obj=>randomNumber(obj.setup.length);
const jokeSecondLine=obj=>randomNumber(obj.punchline.length);
const jokeThirdLine=obj=>randomNumber(obj.extraTwist.length);

const createJoke=obj=>{
    
    let line1,line2,line3;
    line1= obj.setup[jokeFirstLine(obj)];
    line2= obj.punchline[jokeSecondLine(obj)];
    line3=obj.extraTwist[jokeThirdLine(obj)];
    const joke= `${line1}\n${line2}\n${line3}`;
    document.getElementById('joke').innerHTML=joke;
    
    

}



