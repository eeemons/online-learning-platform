import React from "react";
import { Link } from "react-router-dom";
const CourseCard = (props) => {
  const { imgUrl, title, lesson, students, rating, id } = props.item;
  const data = {
    title: title,
    students: students,
    rating: rating,
    id: id,
  };

  return (
    <div className="single__course__item">
      <div className="course__img">
        <img src={imgUrl} alt="" className="w-100" />
      </div>

      <div className="course__details">
        <Link
          to={{ pathname: `/course-detail/${id}`, state: { data } }}
          className="course__title mb-4"
        >
          {title}
        </Link>

        <div className=" d-flex justify-content-between align-items-center">
          <p className="lesson d-flex align-items-center gap-1">
            <i className="ri-book-open-line"></i> {lesson} Lessons
          </p>

          <p className="students d-flex align-items-center gap-1">
            <i className="ri-user-line"></i> {students}K
          </p>
        </div>

        <div className=" d-flex justify-content-between align-items-center">
          <p className="rating d-flex align-items-center gap-1">
            <i className="ri-star-fill"></i> {rating}K
          </p>

          <p className="enroll d-flex align-items-center gap-1">
            <a href="#"> Enroll Now</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
