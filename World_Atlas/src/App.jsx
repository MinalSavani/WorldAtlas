import "./App.css";

import AppLayout from "./components/AppLayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom"; 
import Home from "./pages/Home";
import CountryDetails from "./components/Layout/CountryDetails";
import About from "./pages/About";
import Country from "./pages/Country";
import Contact from "./pages/Contact";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([

  {
    path:"/",
    element:<AppLayout/>,
    errorElement:<ErrorPage/>,
    children:[

      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "country",
        element: <Country />,
      },
      {
        path: "country/:id",
        element: <CountryDetails />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    
],
  }
]
  
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
