import "/src/sass/main.css";
import "/node_modules/bootstrap-icons/font/bootstrap-icons.css";
import gsap from "gsap/all";

const MouseOn = (event: object) => {
  if (event) {
    // console.log(true);
    // gsap anim
    gsap.to("#github-repo-btn", {
      duration: 0.5,
      ease: "power2.out",
      color: "white",
    });
  }
};

const MouseOff = (event: object) => {
  if (event) {
    // console.log(false);

    // gsap anim
    gsap.to("#github-repo-btn", {
      duration: 0.5,
      ease: "power2.out",
      color: "#0c0c0c",
    });
  }
};

const GitHubRepoButton = () => {
  return (
    <span className="row position-absolute start-50 translate-end">
      <a
        target="_blank"
        href="https://github.com/nooneknowspeter/2024-10_fCC_projectRandomQuoteMachine"
        type="button"
        className="col-sm-1"
        onMouseMove={MouseOn}
        onMouseOut={MouseOff}
      >
        <i className="bi bi-github " id="github-repo-btn"></i>
      </a>
    </span>
  );
};

export default GitHubRepoButton;
