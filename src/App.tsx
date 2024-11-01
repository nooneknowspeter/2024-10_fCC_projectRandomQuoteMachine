import "/src/sass/main.css";
import "/node_modules/bootstrap-icons/font/bootstrap-icons.css";
import Background from "./components/Background";
import NewQuoteButton from "./components/NewQuoteButton";
import QuoteAssembly from "./components/QuoteAssembly";
import ShareButton from "./components/ShareButton";

function App() {
  // API link https://github.com/JamesFT/Database-Quotes-JSON/blob/master/quotes.json

  // delivering data
  // const changeQuote = (data: { data: string }) => {
  //   // const { quoteText, quoteAuthor } = data;
  // };

  const fetchQuote = () => {
    console.log("working?");
  };
  return (
    <>
      <Background />
      <div
        className="container text-secondary position-absolute top-50 start-50 translate-middle text-wrap mx-auto p-2"
        style={{ maxWidth: 800, minWidth: 250 }}
        id="quote-box"
      >
        <QuoteAssembly quoteText="f" quoteAuthor="f" />
        <div className="d-flex justify-content-between">
          <ShareButton />
          <NewQuoteButton onClick={fetchQuote} />
        </div>
      </div>
    </>
  );
}

export default App;
