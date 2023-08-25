import { useState, useEffect } from "react";
import supabase from "../client";

export const useBooksandTeachers = () => {
  const [booksandteachers, setBooksandTeachers] = useState([]);

  const getData = async () => {
    const { data, error } = await supabase
      .from("bookandteacher")
      .select("*,books(*)");

    if (data) {
      console.log(data);
      setBooksandTeachers(data);
    }
    if (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return {
    booksandteachers,
  };
};
