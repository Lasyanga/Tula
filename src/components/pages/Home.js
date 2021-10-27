import { Link } from "react-router-dom";
function Home() {
  return (
    <div class="w-5/6 py-4 rounded-lg border-2 shadow-lg bg-white mx-auto space-y-2 items-middle flex-grow">
      <h1 class="text-blue-600 border-l-0 border-r-0 border-t-0 border-b-2 border-gray-400 pl-2">
        Talaan ng Nilalaman
      </h1>
      <div class="pl-4">
        <Link to="ako">Ako</Link>
        <br />
        <Link to="binibini">Binibini</Link>
        <br />
        <Link to="ilaw">Ilaw</Link>
        <br />
        <Link to="pahina">Pahina</Link>
        <br />
      </div>
    </div>
  );
}

export default Home;
