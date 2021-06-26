import "./RandomQuoteMachine.css";
import React from "react";
import { QuoteBox } from "./QuoteBox";

let possibleQuotes = [
  {
    quote:
      "Never argue with stupid people, they will drag you down to their level and then beat you with experience.",
    author: "Mark Twain",
  },
  {
    quote: "Remember, today is the tomorrow you worried about yesterday.",
    author: "Dale Carnegie",
  },
  {
    quote:
      "The difference between stupidity and genius is that genius has its limits.",
    author: "Albert Einstein",
  },
  {
    quote: "The road to success is always under construction.",
    author: "Lily Tomlin",
  },
  {
    quote:
      "The man who says his wife can't take a joke, forgets that she took him.",
    author: "Oscar Wilde",
  },
  {
    quote:
      "Marriage is a great institution, but I'm not ready for an institution.",
    author: "Mae West",
  },
];

let initialIndex = Math.floor(Math.random() * possibleQuotes.length);

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: possibleQuotes[initialIndex].quote,
      author: possibleQuotes[initialIndex].author,
      color: "hsl(314, 100%, 30%)",
      showForm: false,
      newQuote: "",
      newAuthor: "",
    };
    this.changeQuote = this.changeQuote.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleForm = this.toggleForm.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  changeQuote() {
    let hue = Math.floor(Math.random() * 359);
    let color = `hsl(${hue}, 100%, 30%)`;

    let index = Math.floor(Math.random() * possibleQuotes.length);
    this.setState({
      color: color,
      quote: possibleQuotes[index].quote,
      author: possibleQuotes[index].author,
    });
  }

  toggleForm() {
    this.setState((state) => ({
      showForm: !state.showForm,
    }));
  }

  handleChange(e) {
    if (e.target.id === "quote") {
      this.setState({
        newQuote: e.target.value,
      });
    } else if (e.target.id === "author") {
      this.setState({
        newAuthor: e.target.value,
      });
    }
    console.log(this.state.newAuthor);
  }

  handleSubmit(e) {
    //get value of quote
    //get value of author
    //add new quote object to possible quotes array
    e.preventDefault();
    if (this.state.newQuote !== "" && this.state.newAuthor !== "") {
      const newQuote = {
        quote: this.state.newQuote,
        author: this.state.newAuthor,
      };
      possibleQuotes.push(newQuote);
      console.log(possibleQuotes);
      this.setState((state) => ({
        showForm: !state.showForm,
      }));
    }
  }

  render() {
    return (
      <div className="app" style={{ backgroundColor: this.state.color }}>
        <h1 className="app__title">Random Quote Generator</h1>
        <QuoteBox
          changeQuote={this.changeQuote}
          quote={this.state.quote}
          author={this.state.author}
          color={this.state.color}
          toggleForm={this.toggleForm}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          showForm={this.state.showForm}
        />
      </div>
    );
  }
}
