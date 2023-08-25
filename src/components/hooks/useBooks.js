import { useState, useEffect } from "react";
import supabase from "../client";

export const useBooks = () => {
  const [books, setBooks] = useState([]);

  const getData = async () => {
    const { data, error } = await supabase.from("books").select(`*`);

    if (data) {
      console.log(data);
      setBooks(data);
    }
    if (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return {
    books,
  };
};
