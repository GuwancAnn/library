import React from "react";
import { useParams } from "react-router-dom";
import "./style.css";
import { useBooksandTeachers } from "./hooks/useBooksandTeachers";
import { useBooks } from "./hooks/useBooks";
function BookTable() {
  const params = useParams();
  const teacherId = parseInt(params.teacherId);
  console.log(teacherId);
  const { booksandteachers } = useBooksandTeachers();
  const { books } = useBooks();
  console.log(params);
  return (
    <div className="w-[64.5%]">
      <table className="table-auto mt-5  ">
        <thead>
          <tr className="bg-gray-100 text-left  ">
            <th className="w-56 py-1 px-2">Awtory </th>
            <th className="w-56 py-1">Kitabyn Ady</th>
            <th className="w-56 py-1">Nesiryaty</th>
            <th className="w-56 py-1">Cap edilen senesi</th>
          </tr>
        </thead>
        {booksandteachers.map((book) => {
          console.log(book);
          if (book.teachers.id === teacherId) {
            return (
              <tbody>
                <tr className="bg-slate-50  ">
                  <td className="text-lg py-3 px-2 ">
                    {book.teachers.teach_name}{" "}
                  </td>
                  <td>{book.books.book_name} </td>
                  <td>(Next Stop, Pottersville)</td>
                  <td>1961</td>
                </tr>
              </tbody>
            );
          }
        })}{" "}
      </table>
    </div>
  );
}

export default BookTable;
