import { createBrowserRouter } from "react-router-dom";
import About from "../pages/About";
import NotFound from "../pages/error/NotFound";
import Homepage from "../pages/homepage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
