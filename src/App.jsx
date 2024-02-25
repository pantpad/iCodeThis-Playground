import { RouterProvider } from "react-router-dom";
import { pageRouter } from "./store/page-router";

function App() {
  return <RouterProvider router={pageRouter}></RouterProvider>;
}

export default App;
