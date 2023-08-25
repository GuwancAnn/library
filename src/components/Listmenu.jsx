import React, { useState } from "react";
import { useBooks } from "./hooks/useBooks";
import { useTeachers } from "./hooks/useTeachers";
import { useLessons } from "./hooks/useLessons";
import { Link } from "react-router-dom";
import { useDepartments } from "./hooks/useDepartments";
import { useParams } from "react-router-dom";
import { useBooksandTeachers } from "./hooks/useBooksandTeachers";
import { useLessonsandTeachers } from "./hooks/useLessonsandTeachers";
function List() {
  const [openkf, setOpenkf] = useState(false);
  const [openteach, setTeach] = useState(false);
  const [openlesson, setOpenlesson] = useState(false);
  const { books } = useBooks();
  const { teachers } = useTeachers();
  const { lessons } = useLessons();
  const { departments } = useDepartments();
  const { booksandteachers } = useBooksandTeachers();
  const { lessonsandteachers } = useLessonsandTeachers();
  const [departmentId, setDepartmentId] = useState();
  const [lessonId, setLessonId] = useState();
  const [teachId, setTeachId] = useState();
  console.log(lessonsandteachers);
  // const params = useParams();
  // console.log(params);
  // const departmentId = parseInt(params.departmentId);
  //console.log(teachers);
  console.log(booksandteachers);
  const dropOpenkf = (id) => {
    // console.log(id);
    const departmentFind = departments.find((dep) => dep.id === id);

    setDepartmentId(departmentFind.id);
    // console.log(departmentFind.id);
    setOpenkf(!openkf);
    if (openlesson == true || teachOpen == true) {
      setOpenlesson(false);
      setTeach(false);
    }
  };

  const lessonOpen = (id) => {
    console.log(id);
    console.log(id);
    const lessonFind = lessons.find((less) => less.id === id);
    console.log(lessonFind.id, "ledfinid");
    setLessonId(lessonFind.id);
    setOpenlesson(!openlesson);
  };

  const teachOpen = (id) => {
    console.log(id);
    console.log(id);
    const teachFind = teachers.find((teach) => teach.id === id);
    setTeachId(teachFind.id);
    console.log(teachFind.id, "teaxh");
    setTeach(!openteach);
  };
  return (
    <>
      <div className=" border-gray-200 border rounded-xl mt-5  pl-3  w-2/6 pr-3 h-screen pt-4">
        {departments.map((department) => {
          return (
            <>
              <div
                className=" pb-3"
                key={department.id}
                style={
                  openkf && department.id === departmentId
                    ? {
                        borderBottom: "1px solid #C3C3C3",
                      }
                    : { borderBottom: " none" }
                }
              >
                <div className="flex items-center justify-between">
                  <button
                    onClick={() => dropOpenkf(department.id)}
                    className="text-xl  font-[Poppins]"
                  >
                    {department.dep_name}
                  </button>

                  <svg
                    style={
                      openkf && department.id === departmentId
                        ? {
                            transform: "rotate(90deg)",
                            transition: "transform 0.2s linear",
                          }
                        : {
                            transform: "none",
                            transition: "transform 0.2s linear",
                          }
                    }
                    className="arrow"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.29504 16.59L12.875 12L8.29504 7.41L9.70504 6L15.705 12L9.70504 18L8.29504 16.59Z"
                      fill="black"
                      fillOpacity="0.8"
                    />
                  </svg>
                </div>
              </div>
              {openkf && department.id === departmentId ? (
                <>
                  <div
                    className="py-3 bg-white"
                    key={department.id}
                    style={
                      openlesson
                        ? {
                            borderBottom: "1px solid #C3C3C3",
                          }
                        : { borderBottom: " none" }
                    }
                  >
                    {lessons.map((less) => {
                      if (less.department.id == departmentId) {
                        return (
                          <>
                            <div className="flex items-center justify-between">
                              <button
                                onClick={() => lessonOpen(less.id)}
                                className="text-lg font-normal  font-[Poppins]"
                              >
                                {less.les_name}
                              </button>
                              <svg
                                style={
                                  openlesson && less.id === lessonId
                                    ? {
                                        transform: "rotate(90deg)",
                                        transition: "transform 0.2s linear",
                                      }
                                    : {
                                        transform: "none",
                                        transition: "transform 0.2s linear",
                                      }
                                }
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M8.29504 16.59L12.875 12L8.29504 7.41L9.70504 6L15.705 12L9.70504 18L8.29504 16.59Z"
                                  fill="black"
                                  fillOpacity="0.8"
                                />
                              </svg>
                            </div>
                          </>
                        );
                      }
                    })}
                  </div>
                  {booksandteachers.map((bookandteach) => {
                    console.log(bookandteach.teachers.id);
                    return openlesson ? (
                      <>
                        <div className="py-3">
                          <div className="flex items-center justify-between">
                            <button
                              className="text-lg font-normal  font-[Poppins]"
                              onClick={() =>
                                teachOpen(bookandteach.teachers.id)
                              }
                            >
                              {bookandteach.teachers.teach_name}
                            </button>
                          </div>
                        </div>
                      </>
                    ) : (
                      ""
                    );
                  })}
                </>
              ) : (
                ""
              )}
            </>
          );
        })}
      </div>
    </>
  );
}

export default List;
