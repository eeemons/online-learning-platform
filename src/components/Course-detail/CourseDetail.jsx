import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./courseDetail.css";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import ReactPlayer from "react-player";

import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from "reactstrap";

const CourseDetail = () => {
  const location = useLocation();
  const data = location.state?.data;

  const [open, setOpen] = useState("");
  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };
  return (
    <>
      <Header />
      <div className="course-details__container">
        <img
          src="https://i.ibb.co/QJjX9bN/project-cover.png"
          alt="project-cover"
          className="course-details__course-img"
        />
        <h6 className="course-details__about-course">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
          dolores, iure quibusdam enim corrupti impedit quo, dolor dolorem
          minima eos et mollitia minus molestiae corporis beatae. Recusandae
          odio soluta nihil.
        </h6>
        <div className="course-details__lessons">
          <div>
            <h3>Lessons</h3>
            <Accordion flush open={open} toggle={toggle}>
              <AccordionItem>
                <AccordionHeader targetId="1">Lesson 1</AccordionHeader>
                <AccordionBody accordionId="1">
                  <p>
                    <strong>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quia expedita error vitae voluptate praesentium commodi
                      porro magni soluta natus debitis nihil iusto laudantium
                      exercitationem odit nostrum tempore possimus, totam
                      quidem!
                    </strong>
                  </p>
                  <br />
                  <h5>Video Lesson</h5>
                  <ReactPlayer url="https://www.youtube.com/watch?v=ysz5S6PUM-U" />
                </AccordionBody>
              </AccordionItem>

              <AccordionItem>
                <AccordionHeader targetId="2">Lesson 2</AccordionHeader>
                <AccordionBody accordionId="2">
                  <p>
                    <strong>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quia expedita error vitae voluptate praesentium commodi
                      porro magni soluta natus debitis nihil iusto laudantium
                      exercitationem odit nostrum tempore possimus, totam
                      quidem!
                    </strong>
                  </p>
                  <br />
                  <h5>Video Lesson</h5>
                  <ReactPlayer url="https://www.youtube.com/watch?v=ysz5S6PUM-U" />
                </AccordionBody>
              </AccordionItem>

              <AccordionItem>
                <AccordionHeader targetId="3">Lesson 3</AccordionHeader>
                <AccordionBody accordionId="3">
                  <p>
                    <strong>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quia expedita error vitae voluptate praesentium commodi
                      porro magni soluta natus debitis nihil iusto laudantium
                      exercitationem odit nostrum tempore possimus, totam
                      quidem!
                    </strong>
                  </p>
                  <br />
                  <h5>Video Lesson</h5>
                  <ReactPlayer url="https://www.youtube.com/watch?v=ysz5S6PUM-U" />
                </AccordionBody>
              </AccordionItem>

              <AccordionItem>
                <AccordionHeader targetId="4">Lesson 4</AccordionHeader>
                <AccordionBody accordionId="4">
                  <p>
                    <strong>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quia expedita error vitae voluptate praesentium commodi
                      porro magni soluta natus debitis nihil iusto laudantium
                      exercitationem odit nostrum tempore possimus, totam
                      quidem!
                    </strong>
                  </p>
                  <br />
                  <h5>Video Lesson</h5>
                  <ReactPlayer url="https://www.youtube.com/watch?v=ysz5S6PUM-U" />
                </AccordionBody>
              </AccordionItem>

              <AccordionItem>
                <AccordionHeader targetId="5">Lesson 5</AccordionHeader>
                <AccordionBody accordionId="5">
                  <p>
                    <strong>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quia expedita error vitae voluptate praesentium commodi
                      porro magni soluta natus debitis nihil iusto laudantium
                      exercitationem odit nostrum tempore possimus, totam
                      quidem!
                    </strong>
                  </p>
                  <br />
                  <h5>Video Lesson</h5>
                  <ReactPlayer url="https://www.youtube.com/watch?v=ysz5S6PUM-U" />
                </AccordionBody>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
      <br />
      <Footer />
    </>
  );
};

export default CourseDetail;
