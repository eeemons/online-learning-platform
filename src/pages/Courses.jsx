import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import CoursesItems from "../components/Courses-section/Courses";
import FreeCourses from "../components/Free-course-section/FreeCourse";
const Courses = () => {
  return (
    <>
      <Header />
      <div>
        <CoursesItems />
        <FreeCourses />
      </div>
      <Footer />
    </>
  );
};

export default Courses;
