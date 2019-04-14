/*** 
  Array with multiple Quotes Objects
***/
var quotes = [
  {
    quote: "Don't cry because it's over, smile because it happened.",
    source: "Dr. Seuss",
    citation: "publication",
    year: 1992,
    tags: ["humor", "business"]
  },
  {
    quote: "Be yourself; everyone else is already taken.",
    source: "Oscar Wilde"
  },
  {
    quote: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    source: "Albert Einstein"
  },
  {
    quote: "So many books, so little time.",
    source: "Frank Zappa"
  },
  {
    quote: "A room without books is like a body without a soul.",
    source: "Marcus Tullius Cicero"
  }
];


/***
  Generate a Random Quote
***/

function getRandomQuote() {
  var randomNumber = Math.floor(Math.random() * quotes.length);
  return quotes[randomNumber];
}

/***
  Generate a random Quote with the getRandomQuote() function and creates the HTML for the it
***/
function printQuote() {
  var quote = getRandomQuote();
  var html = '';
  html = `<p class="quote">${quote.quote}</p>
          <p class="source">${quote.source}`;
          if(quote.citation){
            html += `<span class="citation"> ${quote.citation}</span>`;
          } 
          if (quote.year){
            html += `<span class="year"> ${quote.year}</span>`;
          }
          if (quote.tags && quote.tags.length > 0){
            html += `<span class="tags">, tags: ${quote.tags.join(", ")}</span>`;
          }
  html += "</p>";
  var div = document.getElementById("quote-box");
  div.innerHTML = html;

  // Change background of body to a random Color
  document.body.style.backgroundColor = getRandomColor();
}

/* Generates a Random Color and returns it
   source: https://stackoverflow.com/questions/1484506/random-color-generator
*/
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

/***
  Generate a Quote and displays it in the loadQuote div, it uses the printQuote Function
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);

// Change Quote and Background every 30 sec
setInterval(printQuote, 30000);
