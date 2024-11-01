import "/src/sass/main.css";
import "/node_modules/bootstrap-icons/font/bootstrap-icons.css";

const ShareButton = () => {
  return (
    <a
      type="button"
      className="btn btn-primary col-sm-1"
      id="tweet-quote"
      target="_blank"
      href={`https://www.twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=`}
    >
      <i className="bi bi-twitter-x"></i>
    </a>
  );
};

export default ShareButton;
