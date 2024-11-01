import "/src/sass/main.css";
import "/node_modules/bootstrap-icons/font/bootstrap-icons.css";

const NewQuoteButton = () => {
  return (
    <button
      type="button"
      className="btn btn-primary col-sm-2 fw-semibold"
      id="new-quote"
    >
      New Quote
    </button>
  );
};

export default NewQuoteButton;
