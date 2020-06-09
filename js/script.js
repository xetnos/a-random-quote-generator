/******************************************
Treehouse FSJS Techdegree: Project 1 - A Random Quote Generator
******************************************/

// `quotes` array with Extra Credit #1: Additional quote object property

const quotes = [
  {
    quote: "Waste no more time arguing what a good man should be. Be one.    ",
    source: "Marcus Aurelius, Meditations ",
    year: "(c. 121–180 AD)",
    category: "Philosophy"
  },
  {
    quote: "If it is not right, do not do it, if it is not true, do not say it. ",
    source: "Marcus Aurelius, Meditations ",
    year: "(c. 121–180 AD)",
    category: "Philosophy"
  },
  {
    quote: "Remember that neither the future nor the past pains thee, but only the present. But this is reduced to a very little, if thou only circumscribest it, and chidest thy mind, if it is unable to hold out against even this.",
    source: "Marcus Aurelius, Meditations ",
    year: "(c. 121–180 AD)",
    category: "Philosophy"
  },
  {
    quote: "But life is very short and anxious for those who forget the past, neglect the present, and fear the future.",
    source: "Seneca, On the Shortness of Life",
    category: "Philosophy"
  },
  {
    quote: "A man provided with paper, pencil, and rubber, and subject to strict discipline, is in effect a universal machine.",
    source: "Intelligent Machinery: A Report by A. M. Turing",
    year: "1948",
    category: "Science"
  },
  {
    quote: "Can machines think?... The new form of the problem can be described in terms of a game which we call the 'imitation game.",
    source: "Alan Turning, Mind – A Quarterly Review of Psychology and Philosophy, vol. 59",
    year: "1950",
    category: "Science"
  },
  {
    quote: "We can only see a short distance ahead, but we can see plenty there that needs to be done.    ",
    source: "Alan Turning, Mind – A Quarterly Review of Psychology and Philosophy, vol. 59",
    year: "1950",
    category: "Science"
  },
  {
    quote: "An observer studying the Solar system dispassionately, and finding himself capable of bringing the four giant planets to his notice, could reasonably say that the Solar system consisted of one star, four planets, and some traces of debris.",
    source: "Isaac Asimov, The Secret of the Universe",
    year: "1992",
    category: "Science"
  },
  {
    quote: "I consider one of the most important duties of any scientist the teaching of science to students and to the general public.    ",
    source: "Isaac Asimov, Academe and I",
    year: "1992",
    category: "Science"
  },
  {
    quote: "If your actions inspire others to dream more, learn more, do more and become more, you are a leader.",
    source: "Simon Sinek, Leaders Eat Last",
    year: "2013",
    category: "Motivational"
  },
  {
    quote: "Working hard for something we don't care about is called stress: Working hard for something we love is called passion.",
    source: "Simon Sinek",
    category: "Motivational"
  },
  {
    quote: "You don’t hire for skills, you hire for attitude. You can always teach skills.",
    source: "Simon Sinek,  Start with Why",
    year: "2009",
    category: "Motivational"
  },
  {
    quote: "What man actually needs is not a tensionless state but rather the striving and struggling for some goal worthy of him. What he needs is not the discharge of tension at any cost, but the call of a potential meaning waiting to be fulfilled by him.",
    year: "Victor Frankl",
    category: "Philosophy"
  },
  {
    quote: "When we are no longer able to change a situation, we are challenged to change ourselves",
    source: "Viktor Frankl",
    category: "Motivational"
  },
  {
    quote: " I will not be out-worked, period. You might have more talent than me, you might be smarter than me, you might be sexier than me, you might be all of those things you got it on me in nine categories. But if we get on the treadmill together, right, there’s two things. You’re getting off first, or I’m going to die. It’s really that simple, right?",
    source: "Will Smith, interview on The Tavis Smiley Show",
    year: "2007",
    category: "Motivational"
  },
  {
    quote: "The best educators are the ones that inspire their students. That inspiration comes from a passion that teachers have for the subject they're teaching. Most commonly, that person spent their lives studying that subject, and they bring an infectious enthusiasm to the audience.",
    source: "Neil deGrasse Tyson, Global Ideas from Pluto's Challenger",
    year: "2009",
    category: "Science"
  },
  {
    quote: "If you want to know who your friends are, get yourself a jail sentence.",
    source: "Charles Bukowski, Notes of a Dirty Old Man",
    year: "1969",
    category: "Literature"
  },
  {
    quote: "Whatever you would make habitual, practice it; and if you would not make a thing habitual, do not practice it, but accustom yourself to something else.",
    source: "Epictetus",
    category: "Philosophy"
  },
  {
    quote: "Some things are in our control and others not. Things in our control are opinion, pursuit, desire, aversion, and, in a word, whatever are our own actions. Things not in our control are body, property, reputation, command, and, in one word, whatever are not our own actions.",
    source: "Epictetus, The Enchiridion",
    year: "c. 135",
    category: "Philosophy"
  }
];


// Extra Credit #2: Random background colors
let randomColor = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  return rgbColor = 'rgb(' + red + ', ' + green + ', ' + blue + ')';
}

// `getRandomQuote` function
const getRandomQuote = () => {
  let getRandomNumber = Math.floor(Math.random() * quotes.length);
  // Preventing Repeat quotes in order
  if (quotes[getRandomNumber].quote == document.querySelector('.quote').textContent) {
    return getRandomQuote();
  }
  return quotes[getRandomNumber];
};

//  `printQuote` function
const printQuote = () => {
  let randomQuote = getRandomQuote();
  let toHTML = `
    <p class="quote">${randomQuote.quote}</p>
    <p class="source">${randomQuote.source}
  `;
  // Validate there is a property in existance
  if (randomQuote.hasOwnProperty('year')) {
    toHTML += `<span class="year">${randomQuote.year} </span>`;
  }
  // Adding the quotes to the quote-box div
  toHTML += `<span class="category">- ${randomQuote.category}</span></p>`;
  // Adding the quotes to the quote-box div
  document.getElementById('quote-box').innerHTML = toHTML;
  // Adding the randomColor to the background
  document.body.style.backgroundColor = randomColor();
  // Resetting printQuote
  clearInterval(autoPrintQuote);
  autoPrintQuote = setInterval(printQuote, 15000);
};

// EXTRA CREDIT #3: Auto-refreshed quotes
let autoPrintQuote = setInterval(printQuote, 15000);

// Calling the function
printQuote();

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);