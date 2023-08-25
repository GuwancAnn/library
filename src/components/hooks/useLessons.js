import { useState, useEffect } from "react";
import supabase from "../client";

export const useLessons = () => {
  const [lessons, setLessons] = useState([]);

  const getData = async () => {
    const { data, error } = await supabase
      .from("lessons")
      .select(`*,department(*)`);

    if (data) {
      console.log(data);
      setLessons(data);
    }
    if (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return {
    lessons,
  };
};
