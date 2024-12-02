import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getOne } from "../helpers/get";
import BookForm from "./BookForm";

export default function BookEdit({setUpdate}) {
  const { bookid } = useParams();
  const [book, setBook] = useState({});
  const [error, setError] = useState("");

  const fetchData = async () => {
    try {
      const data = await getOne(bookid);
      setBook(data);      
    } catch (error) {
      setError(error.message);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [bookid]);

  return (
    <>
      <h1>
        {bookid}
        
      </h1>
      <BookForm setUpdate={setUpdate} book={book} />
      {error}
    </>
  );
}
