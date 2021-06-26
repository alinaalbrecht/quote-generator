import { AddQuote } from "./AddQuote";
import { FaTwitter } from "react-icons/fa";

export const QuoteBox = (props) => {
  return (
    <div style={{ color: props.color }} className="quote-box">
      <div className="quote-box__quote">{props.quote}</div>
      <div className="quote-box__author">{props.author}</div>
      <button
        className="quote-box__button--change-quote"
        style={{ backgroundColor: props.color }}
        onClick={props.changeQuote}
      >
        Next
      </button>
      <AddQuote
        toggleForm={props.toggleForm}
        handleChange={props.handleChange}
        handleSubmit={props.handleSubmit}
        showForm={props.showForm}
      />
      <a
        className="quote-box__button--tweet-quote"
        href={`https://twitter.com/intent/tweet?text= ${props.quote} -- ${props.author}`}
        target="_blank"
        rel="noreferrer"
      >
        <FaTwitter />
      </a>
    </div>
  );
};
