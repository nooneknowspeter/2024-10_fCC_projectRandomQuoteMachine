import React from "react";
import "/src/sass/main.css";
import "/node_modules/bootstrap-icons/font/bootstrap-icons.css";

const Quote = () => {
  return (
    <p className="text-center text-wrap fw-semibold " id="text">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </p>
  );
};

const Author = () => {
  return (
    <p className="text-end fw-medium" id="author">
      - author
    </p>
  );
};

const QuoteAssembly = () => {
  return (
    <>
      <Quote />
      <Author />
    </>
  );
};

export default QuoteAssembly;
