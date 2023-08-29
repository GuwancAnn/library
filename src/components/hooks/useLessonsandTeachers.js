import { useState, useEffect } from "react";
import supabase from "../client";

export const useLessonsandTeachers = () => {
  const [lessonsandteachers, setLessonsandTeachers] = useState([]);

  const getData = async () => {
    const { data, error } = await supabase
      .from("lesson_teachers")
      .select(`"*", lessons(*),teachers(*)`);

    if (data) {
      setLessonsandTeachers(data);
      console.log(data);
    } else {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  return {
    lessonsandteachers,
  };
};
