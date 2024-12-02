import { useEffect, useState } from "react";
import { getData } from "../helpers/get";
import Book from "./Book";

export default function BookList({update, setUpdate}) {
  const [books, setBooks] = useState([]);
  const [error, setError] = useState("");

  const fetchData = async () => {
    try {
      const data = await getData();
      setBooks(data);
    } catch (error) {
      setError(error.message);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [update]);

  return (
    <>

      <div className="grid gap-4 grid-cols-3">
        {!error &&
          books.map((book) => (
              <Book book={book} setUpdate={setUpdate} key={book.id} />
          ))}
      </div>
      {error && <p>{error}</p>}
    </>
  );
}
