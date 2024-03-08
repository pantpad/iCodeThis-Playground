import { createBrowserRouter } from "react-router-dom";
import Landing from "../components/Landing";
import GlowButton from "../pages/Buttons/GlowButton";
import NotFoundPage from "../components/NotFoundPage";
import TodoPage from "../pages/TodoPage/TodoPage";
import FormDarkTheme from "../pages/FormDarkTheme/FormDarkTheme";
import Hamburger from "../pages/Hamburger/Hamburger";

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
  {
    path: "/FormDarkTheme",
    element: <FormDarkTheme />,
  },
  {
    path: "/Hamburger",
    element: <Hamburger />,
  },
]);
export { pageRouter };
