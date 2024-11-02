import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "/src/sass/main.css";
import "/node_modules/bootstrap-icons/font/bootstrap-icons.css";
import App from "./App.tsx";
import Background from "./components/Background";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Background />

    <App />
  </StrictMode>
);
