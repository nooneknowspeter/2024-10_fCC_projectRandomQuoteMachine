import React from "react";
import "/src/sass/main.css";
import "/node_modules/bootstrap-icons/font/bootstrap-icons.css";

const NewQuoteButton = ({
  buttonDisplayName,
}: {
  buttonDisplayName: string;
}) => {
  return (
    <button
      type="button"
      className="btn btn-primary col-sm-2 fw-semibold"
      id="new-quote"
    >
      {buttonDisplayName}
    </button>
  );
};

export default NewQuoteButton;
