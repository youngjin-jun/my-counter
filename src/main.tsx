import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { Global } from "@emotion/react";
import emotionReset from "emotion-reset";

createRoot(document.getElementById("root")!).render(
  <>
    <App />
    <Global styles={emotionReset} />
  </>
);