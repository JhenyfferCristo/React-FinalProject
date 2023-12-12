import React, { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import EnrollTerm from "../../components/course/Enrollment";
import axios from "axios";

export default function AddCourses() {
  const [courses, setCourses] = useState([]);

  const [
    isStudent,
    studentUsers,
    currentUserSID,
    enroll,
    enrollments,
    hasEnrolled,
    drop,
  ] = useOutletContext();

  const [term, setTerm] = useState(1);

  useEffect(() => {
    axios
      .get("/api/courses/")
      .then((response) => {
        if (response.status === 200) {
          //console.log(response.data);
          setCourses(response.data);
        }
      })
      .catch((error) => {
        console.log("Error fetching course data :(", error);
      });
  }, []);

  return (
    <>
      <br />
      <div className="btn-group">
        <button
          className="button-1"
          value={1}
          onClick={(e) => setTerm(e.target.value)}
        >
          Term 1{" "}
        </button>
        <button
          className="button-1"
          value={2}
          onClick={(e) => setTerm(e.target.value)}
        >
          Term 2
        </button>
        <button
          className="button-1"
          value={3}
          onClick={(e) => setTerm(e.target.value)}
        >
          Term 3
        </button>
        <button
          className="button-1"
          value={4}
          onClick={(e) => setTerm(e.target.value)}
        >
          Term 4
        </button>
      </div>
      <EnrollTerm
        term={term}
        courses={courses}
        emptyMsg=""
        enroll={enroll}
        enrollments={enrollments}
        SID={currentUserSID.studentID}
        hasEnrolled={hasEnrolled}
        drop={drop}
      />
    </>
  );
}
