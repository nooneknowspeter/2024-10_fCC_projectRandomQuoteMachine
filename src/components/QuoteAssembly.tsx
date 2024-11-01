import "/src/sass/main.css";
import "/node_modules/bootstrap-icons/font/bootstrap-icons.css";

const Quote = ({ quoteText }: { quoteText: string }) => {
  return (
    <p className="text-center text-wrap fw-semibold " id="text">
      {quoteText}
    </p>
  );
};

const Author = ({ quoteAuthor }: { quoteAuthor: string }) => {
  return (
    <p className="text-end fw-medium" id="author">
      - {quoteAuthor}
    </p>
  );
};

const QuoteAssembly = (props: { quoteAuthor: string; quoteText: string }) => {
  return (
    <>
      <Quote quoteText={props.quoteText} />
      <Author quoteAuthor={props.quoteAuthor} />
    </>
  );
};

export default QuoteAssembly;
