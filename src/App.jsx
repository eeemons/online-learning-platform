import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import Loader from "./components/Loader/Loader";
//Lazy loaded routes
const Home = lazy(() => import("./Pages/Home"));
const About = lazy(() => import("./Pages/About"));
const Blog = lazy(() => import("./Pages/Blog"));
const Courses = lazy(() => import("./Pages/Courses"));
const Login = lazy(() => import("./Pages/Login"));
const Registration = lazy(() => import("./Pages/Registration"));
const CourseDetail = lazy(() =>
  import("./components/Course-detail/CourseDetail")
);

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="/courses" element={<Courses />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/registration" element={<Registration />}></Route>
        <Route
          path="/course-detail/:courseId"
          element={<CourseDetail />}
        ></Route>
      </Routes>
    </Suspense>
  );
}

export default App;
