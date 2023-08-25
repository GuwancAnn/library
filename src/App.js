import { useEffect, useState } from "react";
import "./App.css";

import Header from "./components/Header";

import BookTable from "./components/BookTable";

import List from "./components/Listmenu";
import supabase from "./components/client.js";
import AddBooks from "./components/AddBooks";
import { useBooks } from "./components/hooks/useBooks";
import { useTeachers } from "./components/hooks/useTeachers";
import { useLessons } from "./components/hooks/useLessons";
import { useDepartments } from "./components/hooks/useDepartments";

function App() {
  // const { books } = useBooks();
  // const { teachers } = useTeachers();
  // const { lessons } = useLessons();
  // const { departments } = useDepartments();
  // console.log(lessons);
  // console.log(departments);
  // console.log(books);
  // console.log(teachers);
  return (
    <div className="App">
      <Header></Header>{" "}
      <div className="flex lg:container mx-auto justify-between ">
        <List></List> <BookTable></BookTable>
      </div>
      {/* <Leftbar></Leftbar>
       */}
      {/* <AddBooks></AddBooks> */}
    </div>
  );
}

export default App;
