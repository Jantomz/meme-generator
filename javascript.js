function showMeme() {
  const randomMeme = getRandomData("memes");
  const memeElem = document.createElement("img");
  const parentDiv = document.querySelector(".display-container");
  const oldMeme = document.getElementsByClassName("meme-image");
  const oldJoke = document.getElementsByClassName("joke-text");
  const oldQuote = document.getElementsByClassName("quote-text");
  const oldQuoteAuthor = document.getElementsByClassName("quote-author");
  const oldRiddle = document.getElementsByClassName("riddle-question");
  const oldRiddleAnswer = document.getElementsByClassName("riddle-answer");

  if (oldMeme.length > 0) {
    oldMeme.item(0).remove();
  }
  if (oldJoke.length > 0) {
    oldJoke.item(0).remove();
  }
  if (oldQuote.length > 0) {
    oldQuote.item(0).remove();
    oldQuoteAuthor.item(0).remove();
  }
  if (oldRiddle.length > 0) {
    oldRiddle.item(0).remove();
  }
  if (oldRiddleAnswer.length > 0) {
    oldRiddleAnswer.item(0).remove();
  }

  memeElem.setAttribute("src", randomMeme);
  memeElem.setAttribute("width", 300);
  memeElem.setAttribute("class", "meme-image");
  parentDiv.insertBefore(memeElem, document.querySelectorAll("h3").item(1));
}

function showJoke() {
  const randomJoke = getRandomData("jokes");
  const jokeElem = document.createElement("p");
  const parentDiv = document.querySelector(".display-container");
  jokeElem.textContent = randomJoke;
  const oldJoke = document.getElementsByClassName("joke-text");
  const oldMeme = document.getElementsByClassName("meme-image");
  const oldQuote = document.getElementsByClassName("quote-text");
  const oldQuoteAuthor = document.getElementsByClassName("quote-author");
  const oldRiddle = document.getElementsByClassName("riddle-question");
  const oldRiddleAnswer = document.getElementsByClassName("riddle-answer");

  if (oldMeme.length > 0) {
    oldMeme.item(0).remove();
  }

  if (oldJoke.length > 0) {
    oldJoke.item(0).remove();
  }
  if (oldQuote.length > 0) {
    oldQuote.item(0).remove();
    oldQuoteAuthor.item(0).remove();
  }
  if (oldRiddle.length > 0) {
    oldRiddle.item(0).remove();
  }
  if (oldRiddleAnswer.length > 0) {
    oldRiddleAnswer.item(0).remove();
  }
  jokeElem.setAttribute("class", "joke-text");
  parentDiv.insertBefore(jokeElem, document.querySelectorAll("h3").item(2));
}

function showQuote() {
  const randomQuote = getRandomData("quotes");
  const quoteElem = document.createElement("p");
  const quoteAuthorElem = document.createElement("p");
  const parentDiv = document.querySelector(".display-container");
  quoteElem.textContent = randomQuote.quote;
  quoteAuthorElem.textContent = "- " + randomQuote.author;
  const oldMeme = document.getElementsByClassName("meme-image");
  const oldJoke = document.getElementsByClassName("joke-text");
  const oldQuote = document.getElementsByClassName("quote-text");
  const oldQuoteAuthor = document.getElementsByClassName("quote-author");
  const oldRiddle = document.getElementsByClassName("riddle-question");
  const oldRiddleAnswer = document.getElementsByClassName("riddle-answer");

  if (oldMeme.length > 0) {
    oldMeme.item(0).remove();
  }
  if (oldJoke.length > 0) {
    oldJoke.item(0).remove();
  }
  if (oldQuote.length > 0) {
    oldQuote.item(0).remove();
    oldQuoteAuthor.item(0).remove();
  }
  if (oldRiddle.length > 0) {
    oldRiddle.item(0).remove();
  }
  if (oldRiddleAnswer.length > 0) {
    oldRiddleAnswer.item(0).remove();
  }

  quoteElem.setAttribute("class", "quote-text");
  quoteAuthorElem.setAttribute("class", "quote-author");
  parentDiv.insertBefore(quoteElem, document.querySelectorAll("h3").item(3));
  parentDiv.insertBefore(
    quoteAuthorElem,
    document.querySelectorAll("h3").item(3)
  );
}

function showRiddle() {
  const randomRiddle = getRandomData("riddles");
  const riddleElem = document.createElement("p");
  const riddleAnswerElem = document.createElement("p");
  const parentDiv = document.querySelector(".display-container");
  riddleElem.textContent = randomRiddle.question;
  riddleAnswerElem.textContent = "- " + randomRiddle.answer;
  const oldMeme = document.getElementsByClassName("meme-image");
  const oldJoke = document.getElementsByClassName("joke-text");
  const oldQuote = document.getElementsByClassName("quote-text");
  const oldQuoteAuthor = document.getElementsByClassName("quote-author");
  const oldRiddle = document.getElementsByClassName("riddle-question");
  const oldRiddleAnswer = document.getElementsByClassName("riddle-answer");

  if (oldMeme.length > 0) {
    oldMeme.item(0).remove();
  }
  if (oldJoke.length > 0) {
    oldJoke.item(0).remove();
  }
  if (oldQuote.length > 0) {
    oldQuote.item(0).remove();
    oldQuoteAuthor.item(0).remove();
  }
  if (oldRiddle.length > 0) {
    oldRiddle.item(0).remove();
  }
  if (oldRiddleAnswer.length > 0) {
    oldRiddleAnswer.item(0).remove();
  }

  riddleElem.setAttribute("class", "riddle-question");
  parentDiv.appendChild(riddleElem);
}

function showRiddleAnswer() {
  const oldRiddle = document.getElementsByClassName("riddle-question");

  if (oldRiddle.length === 0) {
    alert("There is no riddle!");
  } else {
    const parentDiv = document.querySelector(".display-container");
    const oldRiddleAnswer = document.getElementsByClassName("riddle-answer");

    const currentRiddle =
      document.querySelector(".riddle-question").textContent;
    const indexOfRiddle = data["riddles"].findIndex(
      (riddleItem) => riddleItem.question === currentRiddle
    );
    const riddleAnswer = "- " + data["riddles"][indexOfRiddle].answer;
    const riddleAnswerElem = document.createElement("p");

    if (oldRiddleAnswer.length > 0) {
      oldRiddleAnswer.item(0).remove();
    }

    riddleAnswerElem.textContent = riddleAnswer;
    riddleAnswerElem.setAttribute("class", "riddle-answer");

    parentDiv.appendChild(riddleAnswerElem);
  }
}

function getRandomData(type) {
  return data[type][rn(data[type].length)];
}

const memes = [
  "https://i.redd.it/a0v87gwzoge61.jpg",
  "https://i.redd.it/q29egav34ee61.jpg",
  "https://i.redd.it/iij16swxjie61.jpg",
  "https://i.redd.it/vek7dm2hrge61.jpg",
  "https://www.testbytes.net/wp-content/uploads/2019/06/Untitled-8.png",
  "https://miro.medium.com/max/1000/0*Ua695vjzFHV6VNOX.png",
  "https://pbs.twimg.com/media/EKkPagPXkAA__Qo.jpg",
  "https://code-love.com/wp-content/uploads/2019/03/download.jpeg",
  "https://www.thecoderpedia.com/wp-content/uploads/2020/06/Programming-Memes-Programmer-while-sleeping.jpg",
  "https://www.thecoderpedia.com/wp-content/uploads/2020/06/Programming-Memes-Evolution-of-Memory-Storage-1024x996.jpg",
  "https://www.thecoderpedia.com/wp-content/uploads/2020/06/Programming-Memes-Error-in-Code-896x1024.jpg",
  "https://www.thecoderpedia.com/wp-content/uploads/2020/06/Coding-Meme-Code-Comments-be-Like-925x1024.jpg",
  "https://www.thecoderpedia.com/wp-content/uploads/2020/06/Internet-Explorer-Joke-915x1024.jpg",
];

// Sourced from: http://www.devtopics.com/best-programming-jokes/
const jokes = [
  "This statement",
  "Eight bytes walk into a bar.  The bartender asks, “Can I get you anything?” “Yeah,” reply the bytes.  “Make us a double.”",
  "There are only 10 kinds of people in this world: those who know binary and those who don’t.",
  "All programmers are playwrights, and all computers are lousy actors.",
  "Have you heard about the new Cray super computer?  It’s so fast, it executes an infinite loop in 6 seconds.",
  "The generation of random numbers is too important to be left to chance.",
  "Debugging: Removing the needles from the haystack.",
  "“Debugging” is like being the detective in a crime drama where you are also the murderer.",
  "There are two ways to write error-free programs; only the third one works.",
  "The best thing about a Boolean is even if you are wrong, you are only off by a bit.",
];

// source: https://www.goodreads.com/quotes/tag/programming
const quotes = [
  {
    quote:
      "Programs must be written for people to read, and only incidentally for machines to execute.",
    author: "Harold Abelson",
  },
  {
    quote:
      "Programming today is a race between software engineers striving to build bigger and better idiot-proof programs, and the Universe trying to produce bigger and better idiots. So far, the Universe is winning.",
    author: "Rick Cook",
  },
  {
    quote:
      "Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live",
    author: "John Woods",
  },
  {
    quote:
      "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    author: "Martin Fowler",
  },
  {
    quote: "Truth can only be found in one place: the code.",
    author: "Robert C. Martin",
  },
  {
    quote:
      "That's the thing about people who think they hate computers. What they really hate is lousy programmers.",
    author: "Larry Niven",
  },
  {
    quote:
      "You've baked a really lovely cake, but then you've used dog shit for frosting.",
    author: "Steve Jobs",
  },
  {
    quote:
      "A language that doesn't affect the way you think about programming is not worth knowing.",
    author: "Alan J. Perlis",
  },
  {
    quote:
      "The most disastrous thing that you can ever learn is your first programming language.",
    author: "Alan Kay",
  },
  {
    quote:
      "The computer programmer is a creator of universes for which he alone is the lawgiver. No playwright, no stage director, no emperor, however powerful, has ever exercised such absolute authority to arrange a stage or field of battle and to command such unswervingly dutiful actors or troops.",
    author: "Joseph Weizenbaum",
  },
  {
    quote:
      "Everyone knows that debugging is twice as hard as writing a program in the first place. So if you're as clever as you can be when you write it, how will you ever debug it?",
    author: "Brian Kernighan",
  },
  {
    quote:
      "No matter which field of work you want to go in, it is of great importance to learn at least one programming language.",
    author: "Ram Ray",
  },
];

// Source: https://www.rd.com/list/challenging-riddles/
const riddles = [
  {
    question:
      "I speak without a mouth and hear without ears. I have no body, but I come alive with wind. What am I?",
    answer: "An echo",
  },
  {
    question:
      "You measure my life in hours and I serve you by expiring. I’m quick when I’m thin and slow when I’m fat. The wind is my enemy. ",
    answer: "A Candle",
  },
  {
    question:
      "I have cities, but no houses. I have mountains, but no trees. I have water, but no fish. What am I? ",
    answer: "A Map",
  },
  {
    question:
      "What is seen in the middle of March and April that can’t be seen at the beginning or end of either month?",
    answer: 'The letter "R"',
  },
  {
    question:
      "You see a boat filled with people. It has not sunk, but when you look again you don’t see a single person on the boat. Why?",
    answer: "All the people were married",
  },
  {
    question:
      "What word in the English language does the following: the first two letters signify a male, the first three letters signify a female, the first four letters signify a great, while the entire world signifies a great woman. What is the word?",
    answer: "Heroine",
  },
];

// Just a little helper function
function rn(len) {
  return Math.floor(Math.random() * len);
}

const data = {
  memes,
  jokes,
  quotes,
  riddles,
};
