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
    <div className="m-2 border border-sky-800 bg-slate-100 p-2">
        <h1 className="text-xl">{book.title}</h1>
        <h2 className="text-sm">{book.author}</h2>
        <p className="text-xs">{book.category}</p>
        <p className="text-xs">{book.price}</p>
        <img className="w-32 h-40 object-contain text-xs border border-slate-300" src={book.cover} alt={`cover of ${book.title}`} />
        {book.reserved === "false" && (
          <button className="rounded-md border border-red-500 px-3 py-1 bg-red-400 hover:bg-sky-200" onClick={() => reserveBook(book)}>Išduoti skaitytojui</button>
        )}
        {book.reserved === "true" && (
          <button className="rounded-md border border-blue-500 px-3 py-1 bg-lime-400 hover:bg-sky-200" onClick={() => giveBack(book)}>Grąžinti</button>
        )}
        <Link to={`/book/${book.id}`}>
          <button className="rounded-md border border-blue-500 px-3 py-1 bg-blue-400 hover:bg-sky-200">Redaguoti</button>
        </Link>
        </div>
    </>
  );
}
