import { useEffect, useState, useRef } from "react";
import "/src/sass/main.css";
import "/node_modules/bootstrap-icons/font/bootstrap-icons.css";
import Background from "./components/Background";
import NewQuoteButton from "./components/NewQuoteButton";
import QuoteAssembly from "./components/QuoteAssembly";
import ShareButton from "./components/ShareButton";
import GitHubRepoButton from "./components/GitHubRepoButton";
import { gsap } from "gsap";
import AnimatedCursor from "react-animated-cursor";

function App() {
  // API links
  const quotesjson =
    "https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json";

  const [quotes, setQuotes] = useState<{ quote: string; author: string }[]>([]);
  const [currentQuote, setCurrentQuote] = useState<{
    quote: string;
    author: string;
  } | null>(null);
  const [initialText, setInitialText] = useState(true);

  const quoteRef = useRef<HTMLDivElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);

  // how data looks from json
  //   [{ quote: "quote", author: "author" },...]

  async function fetchData() {
    try {
      const res = await fetch(quotesjson);
      const data = await res.json();
      setQuotes(data);

      // Fade in the initial text, wait, then fade out and display first quote
      gsap.to(quoteRef.current, {
        opacity: 1,
        duration: 3,
        onComplete: () => {
          setTimeout(() => {
            gsap.to(quoteRef.current, {
              opacity: 0,
              duration: 0.5,
              onComplete: () => {
                setInitialText(false);
                setCurrentQuote(data[0]);
                gsap.to(quoteRef.current, { opacity: 1, duration: 1 });
                gsap.to(buttonsRef.current, {
                  opacity: 1,
                  duration: 1,
                  delay: 1,
                });
              },
            });
          }, 2000); // Delay before fading out initial text
        },
      });
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    gsap.set(quoteRef.current, { opacity: 0 });
    gsap.set(buttonsRef.current, { opacity: 0 });
    fetchData();
  }, []);

  const changeQuote = () => {
    if (quotes.length > 0) {
      const randomIndex = Math.floor(Math.random() * quotes.length);
      const newQuote = quotes[randomIndex];

      // GSAP fade-out, update quote, then fade-in
      gsap.to(quoteRef.current, {
        opacity: 0,
        duration: 1,
        onComplete: () => {
          setCurrentQuote(newQuote);
          gsap.to(quoteRef.current, { opacity: 1, duration: 1 });
        },
      });
    }
  };

  return (
    <>
      <Background />
      <div
        className="container text-secondary position-absolute top-50 start-50 translate-middle text-wrap mx-auto p-2"
        style={{ maxWidth: 800, minWidth: 250, maxHeight: 150, minHeight: 50 }}
        id="quote-box"
      >
        <div ref={quoteRef} style={{ opacity: 1 }}>
          {initialText ? (
            <div className="d-flex justify-content-center">
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          ) : currentQuote ? (
            <QuoteAssembly
              quoteText={currentQuote.quote}
              quoteAuthor={currentQuote.author}
            />
          ) : (
            <div className="d-flex justify-content-center">
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          )}
        </div>
        <div
          className="d-flex justify-content-between"
          ref={buttonsRef}
          style={{ opacity: 0 }}
        >
          <ShareButton
            href={
              currentQuote
                ? `"` + currentQuote.quote + `" ` + " - " + currentQuote.author
                : ""
            }
          />
          <NewQuoteButton onClick={changeQuote} />
          <GitHubRepoButton />
        </div>
      </div>
      <div className="App">
        <AnimatedCursor
          color="255, 255, 255"
          innerSize={4}
          outerSize={8}
          outerAlpha={0.2}
          innerScale={0.7}
          outerScale={5}
        />
      </div>
    </>
  );
}

export default App;
