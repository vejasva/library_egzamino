import { Link } from "react-router";

export default function Navigation() {
  return (
    <div className="sticky inset-x-0 top-0 bg-sky-400 text-pink-100">
      <Link to="/">
        <button className="rounded-md border border-blue-500 px-3 py-1 hover:bg-sky-200">
          Knygu sarasas
        </button>
      </Link>
      <Link to="/bookform">
        <button className="rounded-md border border-blue-500 px-3 py-1 hover:bg-sky-200">
          Prideti nauja knyga
        </button>
      </Link>
    </div>
  );
}
