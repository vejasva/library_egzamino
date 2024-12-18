import { useForm } from "react-hook-form";
import postData from "../helpers/post";
import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import putData from "../helpers/put";

export default function BookForm({ setUpdate, book }) {
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: "",
      author: "",
      category: "",
      price: "",
      cover: "",
    },
  });

  const bookSubmitHandle = async (data) => {
    try {
      if (book) await putData(book.id, { ...data, reserved: book.reserved });
      else await postData({ ...data, reserved: "false" });
      setUpdate((prev) => (prev = prev + 1));
      reset();
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    if (book) {
      let { title, author, category, price, cover } = book;
      let defaultValues = {};
      defaultValues.title = title;
      defaultValues.author = author;
      defaultValues.category = category;
      defaultValues.price = price;
      defaultValues.cover = cover;
      reset({ ...defaultValues });
    }
  }, [book, reset]);

  return (
    <>
      {book ? (
        <h1 className="text-xl text-center">Redaguoti knyga {book.id} </h1>
      ) : (
        <h1 className="text-xl text-center">Knygu pridejimas</h1>
      )}
      <form
        className="grid col-span-2 justify-center"
        onSubmit={handleSubmit(bookSubmitHandle)}
        noValidate
      >
        <label>Knygos Pavadinimas</label>
        <input
          type="text"
          id="title"
          {...register("title", {
            required: "Laukas yra privalomas",
            validate: {
              lenghtShort: (fieldValue) =>
                fieldValue.length >= 3 ||
                "pavadinimas negali buti trumpesnis nei 3 simboliai",
              lengthLong: (fieldValue) =>
                fieldValue.length < 100 || "pavadinimas per ilgas",
            },
          })}
        />
        <div>{errors.title?.message}</div>
          <label>
            Autorius
            </label>
            <input
              type="text"
              id="author"
              {...register("author", {
                required: "Laukas yra privalomas",
                pattern: {
                  value: /[A-z]+/,
                  message: "neleistini simboliai",
                },
              })}
            />
          <label>
            Kategorija
            </label>
            <select
              id="category"
              {...register("category", { required: "Laukas yra privalomas" })}
            >
              <option value=""></option>
              <option value="Fiction">Fiction</option>
              <option value="Science">Science</option>
              <option value="Biography">Biography</option>
              <option value="Science Fiction">Science Fiction</option>
              <option value="Dystopian">Dystopian</option>
              <option value="Romance">Romance</option>
              <option value="Fantasy">Fantasy</option>
              <option value="Adventure">Adventure</option>
            </select>
          <div>{errors.category?.message}</div>
          <label>
            Kaina
            </label>
            <input
              type="text"
              id="price"
              {...register("price", {
                required: "Laukas yra privalomas",
                validate: {
                  isnumber: (fieldValue) =>
                    fieldValue >= 0 || "turi buti teigiamas skaicius",
                },
              })}
            />
          <div>{errors.price?.message}</div>
          <label>
            Virselis
            </label>
            <input
              type="text"
              id="cover"
              {...register("cover", {
                required: "Laukas yra privalomas",
                pattern: {
                  value:
                    /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/,
                  message: "netinkama nuorada",
                },
              })}
            />
          <div>{errors.cover?.message}</div>
        <div>
          <input className="rounded-md border border-blue-500 px-3 py-1 bg-blue-400 hover:bg-sky-200" type="submit" value="Issaugoti" />
        </div>
      </form>
      <div>{error && <p>{error}</p>}</div>
    </>
  );
}
//
/**
Author – gali būti tik raidės ir tarpai.
Price – didesnis už 0, teigiamas skaičius.
Cover – paveikslėlio URL, atitinka regex: /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/
 * 
 */
