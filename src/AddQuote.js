export const AddQuote = (props) => {
  return (
    <div className="quote-form">
      {!props.showForm && (
        <button className="quote-form__button" onClick={props.toggleForm}>
          Add new quote
        </button>
      )}
      {props.showForm && (
        <form>
          <input
            className="quote-form__input"
            onChange={props.handleChange}
            id="quote"
            type="text"
            placeholder="quote"
          />
          <br />
          <input
            className="quote-form__input"
            onChange={props.handleChange}
            id="author"
            type="text"
            placeholder="author"
          />
          <br />
          <button className="quote-form__button" onClick={props.handleSubmit}>
            Submit
          </button>
          <p onClick={props.toggleForm} className="quote-form__button--hide">
            hide
          </p>
        </form>
      )}
    </div>
  );
};
