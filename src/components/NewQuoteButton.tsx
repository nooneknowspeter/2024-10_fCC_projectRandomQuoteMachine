import "/src/sass/main.css";
import "/node_modules/bootstrap-icons/font/bootstrap-icons.css";
import gsap from "gsap/all";

{
  /*
   syntax for defining primitive: {prop}: {prop:primitypeType}
   primitives/types = [string, number, boolean, symbol, null, undefined, object]
   https://www.typescriptlang.org/docs/handbook/2/everyday-types.html
   */
}

const MouseOn = (event: object) => {
  if (event.isTrusted) {
    // console.log(true);
    // gsap anim
    gsap.to("#new-quote", {
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
    gsap.to("#new-quote", {
      boxShadow: "0px 0px 0px 0px rgba(0, 0, 0, 0)",
      duration: 0.5,
      ease: "power2.out",
    });
  }
};

const NewQuoteButton = (props: { onClick: () => void }) => {
  return (
    <button
      type="button"
      className="btn btn-primary col-sm-2 fw-light btn-sm"
      id="new-quote"
      onClick={props.onClick}
      onMouseMove={MouseOn}
      onMouseOut={MouseOff}
    >
      New Quote
    </button>
  );
};

export default NewQuoteButton;
