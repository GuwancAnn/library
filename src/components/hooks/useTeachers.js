import { useState, useEffect } from "react";
import supabase from "../client";

export const useTeachers = () => {
  const [teachers, setTeachers] = useState([]);

  const getData = async () => {
    const { data, error } = await supabase.from("teachers").select(`*`);

    if (data) {
      console.log(data);
      setTeachers(data);
    }
    if (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return {
    teachers,
  };
};
