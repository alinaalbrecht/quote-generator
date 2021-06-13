import "./RandomQuoteMachine.css";
import React from "react";

let possibleQuotes = [
  "Never argue with stupid people, they will drag you down to their level and then beat you with experience.",
  "Remember, today is the tomorrow you worried about yesterday.",
  "The difference between stupidity and genius is that genius has its limits.",
  "The road to success is always under construction.",
  "The man who says his wife can't take a joke, forgets that she took him.",
  "Marriage is a great institution, but I'm not ready for an institution.",
];

let possibleAuthors = [
  "Mark Twain",
  "Dale Carnegie",
  "Albert Einstein",
  "Lily Tomlin",
  "Oscar Wilde",
  "Mae West",
];
let initialIndex = Math.floor(Math.random() * possibleQuotes.length);

export class RandomQuoteMachine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: possibleQuotes[initialIndex],
      author: possibleAuthors[initialIndex],
      color: "hsl(314, 100%, 30%)",
      twitterLink: "https://twitter.com/intent/tweet?text=",
    };
    this.newQuote = this.newQuote.bind(this);
  }

  newQuote() {
    let hue = Math.floor(Math.random() * 359);
    let color = `hsl(${hue}, 100%, 30%)`;

    document.querySelector("body").style.backgroundColor = color;

    let index = Math.floor(Math.random() * possibleQuotes.length);
    this.setState({
      color: color,
      quote: possibleQuotes[index],
      author: possibleAuthors[index],
    });
  }

  render() {
    return (
      <div style={{ color: this.state.color }} id="quote-box">
        <div id="text">{this.state.quote}</div>
        <div id="author">{this.state.author}</div>
        <button
          style={{ backgroundColor: this.state.color }}
          id="new-quote"
          onClick={this.newQuote}
        >
          New Quote
        </button>
        <a
          id="tweet-quote"
          href={this.state.twitterLink.concat(this.state.quote)}
          target="_blank"
        >
          tweet quote
        </a>
      </div>
    );
  }
}

/* export default App;
 */
