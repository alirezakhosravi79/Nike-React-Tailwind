import { BrowserRouter, Routes, Route, createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/contact",
    element: <Contact />
  },
  {
    path: "/cart",
    element: <Cart />
  },
])

function App() {
  return (
    <>
     <main className="overflow-x-hidden">
      <RouterProvider router={router} />
     </main>
    </>
  );
}

export default App;
