import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="items-center justify-between flex bg-gray-800 bg-opacity-90 px-5 py-4 mb-6 mx-auto shadow-2xl w-full">
      <div class="text-2xl text-white font-semibold inline-flex items-center">
        <span>
          <Link to="/">Mga Tula</Link>
        </span>
      </div>
      <div class="object-right text-white font-semibold text-base inline-flex items-center px-4">
        <Link to="about">Tungkol sa may Akda</Link>
      </div>
    </div>
  );
}

export default Nav;
