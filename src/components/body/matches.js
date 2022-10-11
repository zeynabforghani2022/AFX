import pic1 from "../../img/4k-earth-huo9w63ktk37matc.png";
import "../../App.css";

function Matches() {
  return (
    <div className="flex justify-between pt-10">
      <div className="flex flex-col gap-10">
        <p className="text-[#D6D6D6] text-lg">
          <span className="underline underline-offset-8 decoration-2 decoration-[#FA4B68] ">
            The First Race Star
          </span>
          ts
        </p>
        <div className="flex bg-[#1B1B24] items-center justify-between rounded-md w-[596px] h-[220px]">
          <div>
            <img src={pic1} className="pl-2" />
          </div>
          <div className="flex flex-col p-2 items-start justify-between">
            <div className="flex items-center gap-2">
              <div className="w-1 h-3 bg-[#FBAD25] rounded-sm"></div>
              <p className="text-xs">Your Name Will Be Placed Here</p>
            </div>
            <div className="flex items-center justify-center pt-5">
              <div className="flex flex-col justify-center items-center m-3">
                <div className="flex justify-center items-center bg-[#2C1D40] rounded-[17px] w-[53px] h-[53px]">
                  <div className="bg-gradient-to-tr custome-gradient rounded-[14px] flex justify-center items-center w-[43px] h-[43px] font-bold">
                    <p>27</p>
                  </div>
                </div>
                <p className="pl-1 text-xs text-center text-gray-500">Days</p>
              </div>
              <div className="flex flex-col justify-center items-center m-3">
                <div className="flex justify-center items-center bg-[#2C1D40] rounded-[17px] w-[53px] h-[53px]">
                  <div className="bg-gradient-to-tr custome-gradient rounded-[14px] flex justify-center items-center w-[43px] h-[43px] font-bold">
                    <p>08</p>
                  </div>
                </div>
                <p className="pl-1 text-xs text-center text-gray-500">hour</p>
              </div>

              <div className="flex flex-col justify-center items-center m-3">
                <div className="flex justify-center items-center bg-[#2C1D40] rounded-[17px] w-[53px] h-[53px]">
                  <div className="bg-gradient-to-tr custome-gradient rounded-[14px] flex justify-center items-center w-[43px] h-[43px] font-bold">
                    <p>14</p>
                  </div>
                </div>
                <p className="pl-1 text-xs text-center text-gray-500">
                  Minutes
                </p>
              </div>
              <div className="flex flex-col justify-center items-center m-3">
                <div className="flex justify-center items-center bg-[#2C1D40] rounded-[17px] w-[53px] h-[53px]">
                  <div className="bg-gradient-to-tr custome-gradient rounded-[14px] flex justify-center items-center w-[43px] h-[43px] font-bold">
                    <p className="text-[#FF7272]">00</p>
                  </div>
                </div>
                <p className="pl-1 text-xs text-center text-gray-500">
                  Seconds
                </p>
              </div>
            </div>

            <div className="flex gap-1 pt-3">
              <div className="flex gap-16 bg-[#21212B] py-3 px-3 rounded-md items-center w-11/12 ">
                <button className="text-[#A3A4AE] text-xs">
                  View more information
                </button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-3 h-3 text-[#2F2F39]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </div>
              <button className="bg-[#21212B] p-2 rounded-md px-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4 text-[#A3A4AE"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col container">
        <div className="slider-container">
          <div className="flex gap-60 justify-between">
            <p className="text-[#D6D6D6] text-lg">
              <span className="underline underline-offset-8 decoration-[#FBAD25] decoration-2 ">
                Next Match
              </span>
              es
            </p>
            <div className="flex items-center ">
              <button className="border-[1px] border-solid border-[#73747E]  rounded-lg p-3 m-2">
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
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                  />
                </svg>
              </button>
              <div className="rounded-[50%] w-2 h-2 bg-[#545461] m-2"></div>
              <div className="rounded-[50%] w-2 h-2 bg-yellow-100 m-2"></div>
              <div className="rounded-[50%] w-2 h-2 bg-yellow-100 m-2"></div>

              <button className="border-[1px] border-solid border-[#73747E]  rounded-lg p-3 m-2">
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
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </button>
            </div>
          </div>
          {/* slider */}
        </div>
      </div>
    </div>
  );
}

export default Matches;
