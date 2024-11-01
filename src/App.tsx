import "/src/sass/main.css";
import "/node_modules/bootstrap-icons/font/bootstrap-icons.css";

function App() {
  return (
    <>
      <div
        className="container text-secondary position-absolute top-50 start-50 translate-middle text-wrap mx-auto p-2"
        style={{ maxWidth: 800, minWidth: 250 }}
      >
        <p className="text-center text-wrap fw-semibold ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <p className="text-end fw-medium">- author</p>
        <div className="d-flex justify-content-between">
          <button type="button" className="btn btn-primary col-sm-1">
            <i className="bi bi-twitter-x"></i>
          </button>
          <button
            type="button"
            className="btn btn-primary col-sm-2 fw-semibold"
          >
            New Quote
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
