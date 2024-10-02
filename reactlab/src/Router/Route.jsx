import {
  createBrowserRouter,
} from "react-router-dom";
import App from '../App.jsx'
import Caracter from "../pages/Caracter.jsx";



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,

  },
  {
    path: "/character/:id",
    element: <Caracter />,
  },
]);
export default router;
