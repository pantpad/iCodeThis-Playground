import { createBrowserRouter } from "react-router-dom";
import Landing from "../components/Landing";
import GlowButton from "../ui/Buttons/GlowButton";
import NotFoundPage from "../components/NotFoundPage";

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
]);
export { pageRouter };
