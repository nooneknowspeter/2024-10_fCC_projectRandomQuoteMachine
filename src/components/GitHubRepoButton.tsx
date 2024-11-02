import "/src/sass/main.css";
import "/node_modules/bootstrap-icons/font/bootstrap-icons.css";

const GitHubRepoButton = () => {
  return (
    <span className="row position-absolute start-50 translate-end">
      <a
        target="_blank"
        href="https://github.com/nooneknowspeter/2024-10_fCC_projectRandomQuoteMachine"
        type="button"
        className="col-sm-1"
      >
        <i className="bi bi-github"></i>
      </a>
    </span>
  );
};

export default GitHubRepoButton;
