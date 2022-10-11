function Search() {
  return (
    <div className="flex items-end justify-between gap-2 pt-14">
      <div className="flex flex-col gap-2">
        <p className="text-sm text-[#A3A4AE]">Symbol</p>
        <div className="flex items-center justify-between bg-[#1b1b24] w-48 rounded-sm p-2">
          <span className="pl-1 text-[#A3A4AE] text-sm">All</span>
          <span className="pr-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-3 h-3 text-[#73747E]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <p className="text-sm text-[#A3A4AE]">Broker</p>
        <div className="flex items-center justify-between bg-[#1b1b24] w-48 rounded-sm p-2">
          <span className="pl-1 text-[#A3A4AE] text-sm">-</span>
          <span className="pr-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-3 h-3 text-[#73747E]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <p className="text-sm text-[#A3A4AE]">Category</p>
        <div className="flex items-center justify-between bg-[#1b1b24] w-48 rounded-sm p-2">
          <span className="pl-1 text-[#A3A4AE] text-sm">-</span>
          <span className="pr-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-3 h-3 text-[#73747E]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-sm text-[#A3A4AE]">Category</p>
        <div className="flex items-center justify-between bg-[#1b1b24] w-48 rounded-sm p-2">
          <span className="pl-1 text-[#A3A4AE] text-sm">-</span>
          <span className="pr-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-3 h-3 text-[#73747E]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-sm text-[#A3A4AE]">Price</p>
        <div className="flex items-center justify-between bg-[#1b1b24] w-48 rounded-sm p-2">
          <span className="pl-1 text-[#A3A4AE] text-sm">$100.000</span>
          <span className="pr-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4 text-[#73747E]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 7.5L7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5"
              />
            </svg>
          </span>
        </div>
      </div>

      <div className="flex justify-end items-end bg-gradient-to-r from-[#FBAD25] to-[#FA4B68] px-6 py-2 rounded-md">
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Search;
