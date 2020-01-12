/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

/******************************************
Returning a Random Quote Object From an 
Array and Writing It to the Webpage
******************************************/

// array of quote objects to rotate on the Random Quotes page

var quotes = [
  {
    quote: "Don’t beat yourself up for where you are right now. It’s YOUR timeline, not anyone else’s, and nothing is off schedule.",
    source: "Emily Maroutian",
    citation: "The Book of Relief: Passages and Exercises to Relieve Negative Emotion and Create More Ease in The Body",
    year: 2017,
    category: "self-acceptance",
    sourcedesc: "is an Armenian-American author, poet, and philosopher"
  },
  {
    quote: "Talent is cheaper than table salt. What separates the talented individual from the successful one is a lot of hard work.",
    source: "Stephen King",
    citation: "Interview in London Independent",
    year: 1996,
    category: "success",
    sourcedesc: "is a best-selling American novelist"
  },
  {
    quote: "So many people walk around with a meaningless life. They seem half-asleep, even when they’re busy doing things they think are important. This is because they’re chasing the wrong things. The way you get meaning into your life is to devote yourself to loving others, devote yourself to your community around you, and devote yourself to creating something that gives you purpose and meaning.",
    source: "Morrie Schwartz",
    citation: "Tuesdays with Morrie by Mitch Albom",
    year: 1995,
    category: "guidance",
    sourcedesc: "was an American author and professor of sociology at Brandeis University"
  },
  {
    quote: "Do what you feel in your heart to be right — for you'll be criticized anyway.",
    source: "Eleanor Roosevelt",
    citation: "How to Stop Worrying and Start Living by Dale Carnegie",
    year: 1944,
    category: "guidance",
    sourcedesc: "was an American diplomat and activist, and served as First Lady to President Franklin D. Roosevelt"
  },
  {
    quote: "I am a great believer in luck. The harder I work, the more of it I seem to have.",
    source: "Coleman Cox",
    citation: "Listen to This",
    year: 1922,
    category: "success",
    sourcedesc: "was an American author"
  },
  {
    quote: "Mistakes have the power to turn you into something better than you were before.",
    source: "Oscar Auliq-Ice",
    citation: "Let's Face It",
    category: "mistakes",
    sourcedesc: "is a German-American author, philanthropist, and social investor"
  },
  {
    quote: "People who succeed have momentum. The more they succeed, the more they want to succeed, and the more they find a way to succeed. Similarly, when someone is failing, the tendency is to get on a downward spiral that can even become a self-fulfilling prophecy.",
    source: "Tony Robbins",
    category: "success",
    sourcedesc: "is an American author, philanthropist, and motivational speaker"
  },
  {
    quote: "You yourself, as much as anybody in the entire universe, deserve your love and affection.",
    source: "Sharon Salzberg",
    category: "self-compassion",
    sourcedesc: "is a best-selling American author and spiritual teacher"
  },
  {
    quote: "The scariest moment is always just before you start. After that, things can only get better.",
    source: "Stephen King",
    citation: "On Writing: A Memoir of the Craft",
    year: 2000,
    category: "motivation",
    sourcedesc: "is a best-selling American novelist"
  },
  {
    quote: "Mistakes are proof that you're trying.",
    source: "Unknown",
    category: "mistakes"
  }
];

// returns a random quote object from the quotes array

function getRandomQuote() {
  var randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
}

// prints all properties in selected quote object to the page

function printQuote() {
  var randomQuote = getRandomQuote();
  var quoteString = '';
  quoteString += '<p class="quote">' + randomQuote.quote + '</p>';
  quoteString += '<p class="source">' + randomQuote.source;
  if (randomQuote.citation) {
    quoteString += '<span class="citation">' + randomQuote.citation + '</span>';
  }
  if (randomQuote.year) {
    quoteString += '<span class="year">' + randomQuote.year + '</span>';
  }
  quoteString += '</p>';
  if (randomQuote.category) {
    quoteString += '<p class="category">category: ' + randomQuote.category + '</p>';
  }
  if (randomQuote.sourcedesc) {
    quoteString += '<p class="source-description">' + randomQuote.source + ' ' + randomQuote.sourcedesc + '.</p>';
  }
  var outputDiv = document.getElementById('quote-box');
  outputDiv.innerHTML = quoteString;
}

/******************************************
Generating a Random Color and Using It
to Change the Background Color of the Page
******************************************/

// returns a random number between 1 and 255

function randomRGB() {
  return Math.floor(Math.random() * 256 );
}

// returns 3 random numbers between 1 and 255 and turns them into rgb color format

function randomColor() {
   var color = 'rgb(';
   color += randomRGB() + ',';
   color += randomRGB() + ',';
   color += randomRGB() + ')';
   return color;
}

// changes the page's background color to the randomly generated color

function changeBgColor() {
  document.body.style.background = randomColor();
}

/******************************************
Changing Quote and Background Color with 
Mouse Click of Button
******************************************/

// runs function to change quote upon mouse click

document.getElementById('load-quote').addEventListener("click", printQuote, false);

// runs function to change background color upon mouse click

document.getElementById('load-quote').addEventListener("click", changeBgColor, false);

// runs function to change quote every 25 seconds

var quoteInterval = window.setInterval(printQuote, 25000);

// runs function to change background color every 25 seconds

var colorInterval = window.setInterval(changeBgColor, 25000);