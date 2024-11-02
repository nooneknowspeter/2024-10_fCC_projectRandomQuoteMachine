import "/src/sass/main.css";
import "/node_modules/bootstrap-icons/font/bootstrap-icons.css";

{
  /*
   syntax for defining primitive: {prop}: {prop:primitypeType}
   primitives/types = [string, number, boolean, symbol, null, undefined, object]
   */
}

const NewQuoteButton = (props: { onClick: () => void }) => {
  return (
    <button
      type="button"
      className="btn btn-primary col-sm-2 fw-semibold"
      id="new-quote"
      onClick={props.onClick}
    >
      New Quote
    </button>
  );
};

export default NewQuoteButton;
