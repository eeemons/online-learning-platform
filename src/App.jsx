import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import Loader from "./components/Loader/Loader";
//Lazy loaded routes
const Home = lazy(() => import("./Pages/Home"));

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </Suspense>
  );
}

export default App;
