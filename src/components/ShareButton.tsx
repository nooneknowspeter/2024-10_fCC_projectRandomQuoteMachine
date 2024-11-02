import "/src/sass/main.css";
import "/node_modules/bootstrap-icons/font/bootstrap-icons.css";
import gsap from "gsap/all";

const MouseOn = (event: object) => {
  if (event.isTrusted) {
    // console.log(true);
    // gsap anim
    gsap.to("#tweet-quote", {
      boxShadow: "0px 0px 5px 5px rgba(255, 255, 255, 0.2)",
      duration: 0.5,
      ease: "power2.out",
    });
  }
};

const MouseOff = (event: object) => {
  if (event.isTrusted) {
    // console.log(false);

    // gsap anim
    gsap.to("#tweet-quote", {
      boxShadow: "0px 0px 0px 0px rgba(0, 0, 0, 0)",
      duration: 0.5,
      ease: "power2.out",
    });
  }
};

const ShareButton = (props: { href: string }) => {
  return (
    <a
      type="button"
      className="btn btn-primary col-sm-1 btn-sm"
      id="tweet-quote"
      target="_blank"
      href={
        "https://www.twitter.com/intent/tweet?hashtags=quotes&hashtags=quotesgen&text=" +
        props.href
      }
      onMouseMove={MouseOn}
      onMouseOut={MouseOff}
    >
      <i className="bi bi-twitter-x"></i>
    </a>
  );
};

export default ShareButton;
