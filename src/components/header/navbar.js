import logo from "../../img/logo.png";
function Navbar() {
  return (
    <div>
      <div className="flex items-center justify-between w-full pt-7">
        <div>
          <a href="#home">
            <img src={logo} className="inline" />
          </a>
        </div>

        <ul className="list-none flex items-center  justify-between xl:w-8/12 lg:w-10/12">
          <li className="text-xs 2xl:text-base hover:bg-[#1E1E27] p-3 rounded-xl">
            <a href="#news">Live Competitions</a>
          </li>
          <li className="text-xs 2xl:text-base hover:bg-[#1E1E27] p-3 rounded-xl">
            <a href="#contact">Leaderboard</a>
          </li>
          <li className="text-xs 2xl:text-base hover:bg-[#1E1E27] p-3 rounded-xl">
            <a href="#about">Affiliation</a>
          </li>
          <li className="text-xs 2xl:text-base hover:bg-[#1E1E27] p-3 rounded-xl">
            <a href="#about">Policies</a>
          </li>
          <li className="text-xs 2xl:text-base hover:bg-[#1E1E27] p-3 rounded-xl z-10">
            <a href="#about"> Contact Us</a>
          </li>
          <li className="text-xs 2xl:text-base z-10 hover:bg-[#1E1E27] p-3 rounded-xl">
            <a href="#about">Client Area</a>
          </li>

          <li>
            <a href="#about">
              <button
                type="button"
                className="bg-gradient-to-r from-amber-400 to-orange-600 px-4 py-2 rounded text-xs 2xl:text-base"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 mb-1 mr-1 inline"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                  />
                </svg>
                Sign Up / Sign in
              </button>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
