import BookForm from "./components/BookForm";
import BookList from "./components/BookList";
import Navigation from "./components/Navigation";
import Foot from "./components/Foot";
import BookEdit from "./components/BookEdit";
import { Routes, Route } from "react-router";
import { useState } from "react";

function App() {
  const [update, setUpdate] = useState(1);

  return (
    <>
      <Navigation />
      <Routes>
        <Route
          path="/"
          element={<BookList update={update} setUpdate={setUpdate} />}
        />
        <Route path="/book/:bookid" element={<BookEdit setUpdate={setUpdate} />} />
        <Route path="/bookform" element={<BookForm setUpdate={setUpdate} book={null} />} />
      </Routes>
      <Foot />
    </>
  );
}

export default App;
