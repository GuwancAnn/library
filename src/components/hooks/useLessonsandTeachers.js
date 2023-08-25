import { useState, useEffect } from "react";
import supabase from "../client";

export const useLessonsandTeachers = () => {
  const [lessonsandteachers, setLessonsandTeachers] = useState([]);

  const getData = async () => {
    const { data, error } = await supabase
      .from("lessonsandteachers")
      .select("id");

    if (data) {
      console.log(data);
      setLessonsandTeachers(data);
    }
    if (error) {
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
