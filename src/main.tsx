import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes";
import { GlobalProvider } from "./context/GlobalContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <GlobalProvider>
    <RouterProvider router={router} />
  </GlobalProvider>
);
