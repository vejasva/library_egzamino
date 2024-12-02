import { Link } from "react-router";
import updateData from "../helpers/update";

export default function Book({ book, setUpdate }) {
  const reserveBook = async (book) => {
    const res = await updateData(book.id, { ...book, reserved: "true" });
    if (res) alert("knyga rezervuota");
    setUpdate((prev) => (prev = prev + 1));
  };

  const giveBack = async (book) => {
    const res = await updateData(book.id, { ...book, reserved: "false" });
    if (res) alert("knyga grazinta");
    setUpdate((prev) => (prev = prev + 1));
  };

  return (
    <>
      <h1>{book.title}</h1>
      <h2>{book.author}</h2>
      <p>{book.category}</p>
      <p>{book.price}</p>
      {/* <img src={book.cover} alt={`cover of ${book.title}`} /> */}
      {book.reserved === "false" && (
        <button onClick={() => reserveBook(book)}>Išduoti skaitytojui</button>
      )}
      {book.reserved === "true" && (
        <button onClick={() => giveBack(book)}>Grąžinti</button>
      )}
      <Link to={`/book/${book.id}`}><button>Redaguoti</button></Link>
    </>
  );
}
