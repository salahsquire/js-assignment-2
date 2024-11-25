let quotes = [
  { text: "The greatest glory in living lies not in never falling, but in rising every time we fall.", author: "Nelson Mandela" },
  { text: "The way to get started is to quit talking and begin doing.", author: "Walt Disney" },
  { text: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
  { text: "If life were predictable it would cease to be life, and be without flavor.", author: "Eleanor Roosevelt" },
  { text: "You only live once, but if you do it right, once is enough.", author: "Mae West" }
];

let quoteText = document.getElementById('quote');
let authorText = document.createElement('p');
authorText.id = 'author';
authorText.style.marginTop = '10px';
authorText.style.fontStyle = 'italic';
authorText.style.color = '#333';

document.querySelector('.quote-box').appendChild(authorText);

let newQuoteButton = document.getElementById('new-quote');

newQuoteButton.addEventListener('click', () => {
  let randomIndex = Math.floor(Math.random() * quotes.length);
  let randomQuote = quotes[randomIndex];
  quoteText.textContent = `"${randomQuote.text}"`;
  authorText.textContent = `-- ${randomQuote.author}`;
});
