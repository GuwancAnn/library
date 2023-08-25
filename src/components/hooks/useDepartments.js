import { useState, useEffect } from "react";
import supabase from "../client";

export const useDepartments = () => {
  const [departments, setDepartments] = useState([]);

  const getData = async () => {
    const { data, error } = await supabase.from("department").select(`*`);

    if (data) {
      console.log(data);
      setDepartments(data);
    }
    if (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return {
    departments,
    setDepartments,
  };
};
