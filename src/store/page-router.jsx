import { createBrowserRouter } from "react-router-dom";
import Landing from "../components/Landing";
import GlowButton from "../pages/Buttons/GlowButton";
import NotFoundPage from "../components/NotFoundPage";
import TodoPage from "../pages/TodoPage/TodoPage";

const pageRouter = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/buttons/glowButton",
    element: <GlowButton />,
  },
  {
    path: "/TodoPage",
    element: <TodoPage />,
  },
]);
export { pageRouter };
