import "/src/sass/main.css";
import "/node_modules/bootstrap-icons/font/bootstrap-icons.css";
import Background from "./components/Background";
import NewQuoteButton from "./components/NewQuoteButton";
import QuoteAssembly from "./components/QuoteAssembly";
import ShareButton from "./components/ShareButton";
import { useEffect } from "react";

function App() {
  // API links
  const quotesjson =
    "https://gist.githubusercontent.com/nasrulhazim/54b659e43b1035215cd0ba1d4577ee80/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";

  async function fetchData() {
    try {
      const res = await fetch(quotesjson);
      const data = res.json();
      dataDestructure(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData();
  });

  const dataDestructure = (data: object) => {
    console.log(data);
  };

  const changeQuote = () => {
    console.log(Math.round(Math.random() * 100));
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
          <NewQuoteButton onClick={changeQuote} />
        </div>
      </div>
    </>
  );
}

export default App;
