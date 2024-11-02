import { useEffect, useState } from "react";
import "/src/sass/main.css";
import "/node_modules/bootstrap-icons/font/bootstrap-icons.css";
import Background from "./components/Background";
import NewQuoteButton from "./components/NewQuoteButton";
import QuoteAssembly from "./components/QuoteAssembly";
import ShareButton from "./components/ShareButton";
import GitHubRepoButton from "./components/GitHubRepoButton";

function App() {
  // API links
  const quotesjson =
    "https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json";

  const [quotes, setQuotes] = useState<{ quote: string; author: string }[]>([]);

  // how data looks from json
  //   [{ quote: "quote", author: "author" },...]

  async function fetchData() {
    try {
      const res = await fetch(quotesjson);
      const data = await res.json();
      setQuotes(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  const changeQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    console.log(randomQuote);
  };

  return (
    <>
      <Background />
      <div
        className="container text-secondary position-absolute top-50 start-50 translate-middle text-wrap mx-auto p-2"
        style={{ maxWidth: 800, minWidth: 250 }}
        id="quote-box"
      >
        <QuoteAssembly quoteText={quotes[0].quote} quoteAuthor="f" />
        <div className="d-flex justify-content-between">
          <ShareButton />
          <NewQuoteButton onClick={changeQuote} />
        </div>
        <GitHubRepoButton />
      </div>
    </>
  );
}

export default App;
