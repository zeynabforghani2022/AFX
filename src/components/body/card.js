import pic1 from "../../img/pic1.png";
import face from "../../img/3_Beautiful-girl-with-a-gentle-smile.png";
import face1 from "../../img/3_Beautiful-girl1.png";
import face2 from "../../img/3_Beautiful-girl2.png";
import face3 from "../../img/3_Beautiful-girl3.png";
import face4 from "../../img/3_Beautiful-girl4.png";
import face5 from "../../img/3_Beautiful-girl5.png";
import face6 from "../../img/3_Beautiful-girl6.png";
import face7 from "../../img/3_Beautiful-girl7.png";
import face8 from "../../img/3_Beautiful-girl8.png";
import face9 from "../../img/3_Beautiful-girl9.png";
import earth from "../../img/4k-earth-huo9w63ktk37matc.png";
import earth1 from "../../img/4k-earth-huo9w63ktk37matc1.png";
import earth2 from "../../img/4k-earth-huo9w63ktk37matc2.png";
import earth3 from "../../img/4k-earth-huo9w63ktk37matc3.png";
import earth4 from "../../img/4k-earth-huo9w63ktk37matc4.png";
import earth5 from "../../img/4k-earth-huo9w63ktk37matc5.png";
import "../../App.css";
function Card() {
  return (
    <div className="flex flex-wrap justify-between">
      <div className="inline-block mt-28 customwidth">
        <div className="flex flex-col gap-2 bg-[#1b1b24] rounded-md p-2">
          <img src={earth} className="relative" />
          <div className="absolute bg-[#165d4f] rounded-tl-xl rounded-br-3xl p-2 pr-5">
            Active
          </div>
          <div className="flex items-center gap-2">
            <div className="w-1 h-3 bg-yellow-500"></div>
            <p>Your Name Will Be Placed Here</p>
          </div>
          <div className="flex items-center justify-between lg:mt-2">
            <div className="flex items-center gap-2">
              <div className="bg-[#302924] w-5 h-5 rounded-md flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 9.563C9 9.252 9.252 9 9.563 9h4.874c.311 0 .563.252.563.563v4.874c0 .311-.252.563-.563.563H9.564A.562.562 0 019 14.437V9.564z"
                  />
                </svg>
              </div>
              <p className="text-sm text-[#7a7b85] lg:text-xs">
                Broker:Amarkets-Demo
              </p>
            </div>
            <div className="flex items-center gap-2 mr-8">
              <div className="bg-[#302924] w-5 h-5 rounded-md flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z"
                  />
                </svg>
              </div>
              <p className="text-sm text-[#7a7b85] lg:text-xs">Symbol:CADUSD</p>
            </div>
          </div>
          <div className="flex items-center justify-between gap-1 pt-1 lg:mt-4">
            <div className="rounded-xl p-[2px] bg-[#3a3944]">
              <img src={face} className="w-8 h-8 rounded-xl" />
            </div>
            <div className="rounded-xl p-[2px] bg-[#3a3944]">
              <img src={face1} className="w-8 h-8 rounded-xl" />
            </div>
            <div className="rounded-xl p-[2px] bg-[#3a3944]">
              <img src={face2} className="w-8 h-8 rounded-xl" />
            </div>
            <div className="rounded-xl p-[2px] bg-[#3a3944]">
              <img src={face3} className="w-8 h-8 rounded-xl" />
            </div>
            <div className="rounded-xl p-[2px] bg-[#3a3944]">
              <img src={face4} className="w-8 h-8 rounded-xl" />
            </div>
            <div className="rounded-xl p-[2px] bg-[#3a3944]">
              <img src={face5} className="w-8 h-8 rounded-xl" />
            </div>
            <div className="rounded-xl p-[2px] bg-[#3a3944]">
              <img src={face6} className="w-8 h-8 rounded-xl" />
            </div>
            <div className="rounded-xl p-[2px] bg-[#3a3944]">
              <img src={face7} className="w-8 h-8 rounded-xl" />
            </div>
            <div className="rounded-xl p-[2px] bg-[#3a3944]">
              <img src={face8} className="w-8 h-8 rounded-xl" />
            </div>
            <div className="rounded-xl p-[2px] bg-[#3a3944]">
              <img src={face9} className="w-8 h-8 rounded-xl" />
            </div>
            <span>+48</span>
          </div>
          <div className="flex gap-2 items-center justify-between pt-2">
            <div className="flex w-[90%] bg-[#21212b] items-center justify-between p-2 rounded-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4 mr-3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                />
              </svg>

              <span className="lg:text-sm ">The start of the race</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4 ml-20"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </div>
            <div className="bg-[#21212b] w-[10%] flex items-center p-2 rounded-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      {/* //////////////////////////////////////////////////////////////////////////////////  */}
      <div className="inline-block mt-28 customwidth">
        <div className="flex flex-col gap-2 bg-[#1b1b24] rounded-md p-2">
          <img src={earth1} className="relative" />
          <div className="absolute bg-[#165d4f] rounded-tl-xl rounded-br-3xl p-2 pr-5">
            Active
          </div>
          <div className="flex items-center gap-2">
            <div className="w-1 h-3 bg-yellow-500"></div>
            <p>Your Name Will Be Placed Here</p>
          </div>
          <div className="flex items-center justify-between lg:mt-2">
            <div className="flex items-center gap-2">
              <div className="bg-[#302924] w-5 h-5 rounded-md flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 9.563C9 9.252 9.252 9 9.563 9h4.874c.311 0 .563.252.563.563v4.874c0 .311-.252.563-.563.563H9.564A.562.562 0 019 14.437V9.564z"
                  />
                </svg>
              </div>
              <p className="text-sm text-[#7a7b85] lg:text-xs">
                Broker:Amarkets-Demo
              </p>
            </div>
            <div className="flex items-center gap-2 mr-8">
              <div className="bg-[#302924] w-5 h-5 rounded-md flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z"
                  />
                </svg>
              </div>
              <p className="text-sm text-[#7a7b85] lg:text-xs">Symbol:CADUSD</p>
            </div>
          </div>
          <div className="flex items-center justify-between gap-1 pt-1 lg:mt-4">
            <div className="rounded-xl p-[2px] bg-[#3a3944]">
              <img src={face} className="w-8 h-8 rounded-xl" />
            </div>
            <div className="rounded-xl p-[2px] bg-[#3a3944]">
              <img src={face1} className="w-8 h-8 rounded-xl" />
            </div>
            <div className="rounded-xl p-[2px] bg-[#3a3944]">
              <img src={face2} className="w-8 h-8 rounded-xl" />
            </div>
            <div className="rounded-xl p-[2px] bg-[#3a3944]">
              <img src={face3} className="w-8 h-8 rounded-xl" />
            </div>
            <div className="rounded-xl p-[2px] bg-[#3a3944]">
              <img src={face4} className="w-8 h-8 rounded-xl" />
            </div>
            <div className="rounded-xl p-[2px] bg-[#3a3944]">
              <img src={face5} className="w-8 h-8 rounded-xl" />
            </div>
            <div className="rounded-xl p-[2px] bg-[#3a3944]">
              <img src={face6} className="w-8 h-8 rounded-xl" />
            </div>
            <div className="rounded-xl p-[2px] bg-[#3a3944]">
              <img src={face7} className="w-8 h-8 rounded-xl" />
            </div>
            <div className="rounded-xl p-[2px] bg-[#3a3944]">
              <img src={face8} className="w-8 h-8 rounded-xl" />
            </div>
            <div className="rounded-xl p-[2px] bg-[#3a3944]">
              <img src={face9} className="w-8 h-8 rounded-xl" />
            </div>
            <span>+48</span>
          </div>
          <div className="flex gap-2 items-center justify-between pt-2">
            <div className="flex w-[90%] bg-[#21212b] items-center justify-between p-2 rounded-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4 mr-3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                />
              </svg>

              <span className="lg:text-sm ">The start of the race</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4 ml-20"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </div>
            <div className="bg-[#21212b] w-[10%] flex items-center p-2 rounded-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      {/* //////////////////////////////////////////////////////////////////////////////////  */}
      <div className="inline-block mt-28 customwidth">
        <div className="flex flex-col gap-2 bg-[#1b1b24] rounded-md p-2">
          <img src={earth2} className="relative" />
          <div className="absolute bg-[#165d4f] rounded-tl-xl rounded-br-3xl p-2 pr-5">
            Active
          </div>
          <div className="flex items-center gap-2">
            <div className="w-1 h-3 bg-yellow-500"></div>
            <p>Your Name Will Be Placed Here</p>
          </div>
          <div className="flex items-center justify-between lg:mt-2">
            <div className="flex items-center gap-2">
              <div className="bg-[#302924] w-5 h-5 rounded-md flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 9.563C9 9.252 9.252 9 9.563 9h4.874c.311 0 .563.252.563.563v4.874c0 .311-.252.563-.563.563H9.564A.562.562 0 019 14.437V9.564z"
                  />
                </svg>
              </div>
              <p className="text-sm text-[#7a7b85] lg:text-xs">
                Broker:Amarkets-Demo
              </p>
            </div>
            <div className="flex items-center gap-2 mr-8">
              <div className="bg-[#302924] w-5 h-5 rounded-md flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z"
                  />
                </svg>
              </div>
              <p className="text-sm text-[#7a7b85] lg:text-xs">Symbol:CADUSD</p>
            </div>
          </div>
          <div className="flex items-center justify-between gap-1 pt-1 lg:mt-4">
            <div className="rounded-xl p-[2px] bg-[#3a3944]">
              <img src={face} className="w-8 h-8 rounded-xl" />
            </div>
            <div className="rounded-xl p-[2px] bg-[#3a3944]">
              <img src={face1} className="w-8 h-8 rounded-xl" />
            </div>
            <div className="rounded-xl p-[2px] bg-[#3a3944]">
              <img src={face2} className="w-8 h-8 rounded-xl" />
            </div>
            <div className="rounded-xl p-[2px] bg-[#3a3944]">
              <img src={face3} className="w-8 h-8 rounded-xl" />
            </div>
            <div className="rounded-xl p-[2px] bg-[#3a3944]">
              <img src={face4} className="w-8 h-8 rounded-xl" />
            </div>
            <div className="rounded-xl p-[2px] bg-[#3a3944]">
              <img src={face5} className="w-8 h-8 rounded-xl" />
            </div>
            <div className="rounded-xl p-[2px] bg-[#3a3944]">
              <img src={face6} className="w-8 h-8 rounded-xl" />
            </div>
            <div className="rounded-xl p-[2px] bg-[#3a3944]">
              <img src={face7} className="w-8 h-8 rounded-xl" />
            </div>
            <div className="rounded-xl p-[2px] bg-[#3a3944]">
              <img src={face8} className="w-8 h-8 rounded-xl" />
            </div>
            <div className="rounded-xl p-[2px] bg-[#3a3944]">
              <img src={face9} className="w-8 h-8 rounded-xl" />
            </div>
            <span>+48</span>
          </div>
          <div className="flex gap-2 items-center justify-between pt-2">
            <div className="flex w-[90%] bg-[#21212b] items-center justify-between p-2 rounded-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4 mr-3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                />
              </svg>

              <span className="lg:text-sm ">The start of the race</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4 ml-20"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </div>
            <div className="bg-[#21212b] w-[10%] flex items-center p-2 rounded-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      {/* //////////////////////////////////////////////////////////////////////////////////  */}
      <div className="inline-block mt-28 customwidth">
        <div className="flex flex-col gap-2 bg-[#1b1b24] rounded-md p-2">
          <img src={earth3} className="relative" />
          <div className="absolute bg-[#165d4f] rounded-tl-xl rounded-br-3xl p-2 pr-5">
            Active
          </div>
          <div className="flex items-center gap-2">
            <div className="w-1 h-3 bg-yellow-500"></div>
            <p>Your Name Will Be Placed Here</p>
          </div>
          <div className="flex items-center justify-between lg:mt-2">
            <div className="flex items-center gap-2">
              <div className="bg-[#302924] w-5 h-5 rounded-md flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 9.563C9 9.252 9.252 9 9.563 9h4.874c.311 0 .563.252.563.563v4.874c0 .311-.252.563-.563.563H9.564A.562.562 0 019 14.437V9.564z"
                  />
                </svg>
              </div>
              <p className="text-sm text-[#7a7b85] lg:text-xs">
                Broker:Amarkets-Demo
              </p>
            </div>
            <div className="flex items-center gap-2 mr-8">
              <div className="bg-[#302924] w-5 h-5 rounded-md flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z"
                  />
                </svg>
              </div>
              <p className="text-sm text-[#7a7b85] lg:text-xs">Symbol:CADUSD</p>
            </div>
          </div>
          <div className="flex items-center justify-between gap-1 pt-1 lg:mt-4">
            <div className="rounded-xl p-[2px] bg-[#3a3944]">
              <img src={face} className="w-8 h-8 rounded-xl" />
            </div>
            <div className="rounded-xl p-[2px] bg-[#3a3944]">
              <img src={face1} className="w-8 h-8 rounded-xl" />
            </div>
            <div className="rounded-xl p-[2px] bg-[#3a3944]">
              <img src={face2} className="w-8 h-8 rounded-xl" />
            </div>
            <div className="rounded-xl p-[2px] bg-[#3a3944]">
              <img src={face3} className="w-8 h-8 rounded-xl" />
            </div>
            <div className="rounded-xl p-[2px] bg-[#3a3944]">
              <img src={face4} className="w-8 h-8 rounded-xl" />
            </div>
            <div className="rounded-xl p-[2px] bg-[#3a3944]">
              <img src={face5} className="w-8 h-8 rounded-xl" />
            </div>
            <div className="rounded-xl p-[2px] bg-[#3a3944]">
              <img src={face6} className="w-8 h-8 rounded-xl" />
            </div>
            <div className="rounded-xl p-[2px] bg-[#3a3944]">
              <img src={face7} className="w-8 h-8 rounded-xl" />
            </div>
            <div className="rounded-xl p-[2px] bg-[#3a3944]">
              <img src={face8} className="w-8 h-8 rounded-xl" />
            </div>
            <div className="rounded-xl p-[2px] bg-[#3a3944]">
              <img src={face9} className="w-8 h-8 rounded-xl" />
            </div>
            <span>+48</span>
          </div>
          <div className="flex gap-2 items-center justify-between pt-2">
            <div className="flex w-[90%] bg-[#21212b] items-center justify-between p-2 rounded-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4 mr-3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                />
              </svg>

              <span className="lg:text-sm ">The start of the race</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4 ml-20"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </div>
            <div className="bg-[#21212b] w-[10%] flex items-center p-2 rounded-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      {/* //////////////////////////////////////////////////////////////////////////////////  */}
      <div className="inline-block mt-28 customwidth">
        <div className="flex flex-col gap-2 bg-[#1b1b24] rounded-md p-2">
          <img src={earth4} className="relative" />
          <div className="absolute bg-[#165d4f] rounded-tl-xl rounded-br-3xl p-2 pr-5">
            Active
          </div>
          <div className="flex items-center gap-2">
            <div className="w-1 h-3 bg-yellow-500"></div>
            <p>Your Name Will Be Placed Here</p>
          </div>
          <div className="flex items-center justify-between lg:mt-2">
            <div className="flex items-center gap-2">
              <div className="bg-[#302924] w-5 h-5 rounded-md flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 9.563C9 9.252 9.252 9 9.563 9h4.874c.311 0 .563.252.563.563v4.874c0 .311-.252.563-.563.563H9.564A.562.562 0 019 14.437V9.564z"
                  />
                </svg>
              </div>
              <p className="text-sm text-[#7a7b85] lg:text-xs">
                Broker:Amarkets-Demo
              </p>
            </div>
            <div className="flex items-center gap-2 mr-8">
              <div className="bg-[#302924] w-5 h-5 rounded-md flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z"
                  />
                </svg>
              </div>
              <p className="text-sm text-[#7a7b85] lg:text-xs">Symbol:CADUSD</p>
            </div>
          </div>
          <div className="flex items-center justify-between gap-1 pt-1 lg:mt-4">
            <div className="rounded-xl p-[2px] bg-[#3a3944]">
              <img src={face} className="w-8 h-8 rounded-xl" />
            </div>
            <div className="rounded-xl p-[2px] bg-[#3a3944]">
              <img src={face1} className="w-8 h-8 rounded-xl" />
            </div>
            <div className="rounded-xl p-[2px] bg-[#3a3944]">
              <img src={face2} className="w-8 h-8 rounded-xl" />
            </div>
            <div className="rounded-xl p-[2px] bg-[#3a3944]">
              <img src={face3} className="w-8 h-8 rounded-xl" />
            </div>
            <div className="rounded-xl p-[2px] bg-[#3a3944]">
              <img src={face4} className="w-8 h-8 rounded-xl" />
            </div>
            <div className="rounded-xl p-[2px] bg-[#3a3944]">
              <img src={face5} className="w-8 h-8 rounded-xl" />
            </div>
            <div className="rounded-xl p-[2px] bg-[#3a3944]">
              <img src={face6} className="w-8 h-8 rounded-xl" />
            </div>
            <div className="rounded-xl p-[2px] bg-[#3a3944]">
              <img src={face7} className="w-8 h-8 rounded-xl" />
            </div>
            <div className="rounded-xl p-[2px] bg-[#3a3944]">
              <img src={face8} className="w-8 h-8 rounded-xl" />
            </div>
            <div className="rounded-xl p-[2px] bg-[#3a3944]">
              <img src={face9} className="w-8 h-8 rounded-xl" />
            </div>
            <span>+48</span>
          </div>
          <div className="flex gap-2 items-center justify-between pt-2">
            <div className="flex w-[90%] bg-[#21212b] items-center justify-between p-2 rounded-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4 mr-3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                />
              </svg>

              <span className="lg:text-sm ">The start of the race</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4 ml-20"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </div>
            <div className="bg-[#21212b] w-[10%] flex items-center p-2 rounded-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      {/* //////////////////////////////////////////////////////////////////////////////////  */}
      <div className="inline-block mt-28 customwidth">
        <div className="flex flex-col gap-2 bg-[#1b1b24] rounded-md p-2">
          <img src={earth5} className="relative" />
          <div className="absolute bg-[#165d4f] rounded-tl-xl rounded-br-3xl p-2 pr-5">
            Active
          </div>
          <div className="flex items-center gap-2">
            <div className="w-1 h-3 bg-yellow-500"></div>
            <p>Your Name Will Be Placed Here</p>
          </div>
          <div className="flex items-center justify-between lg:mt-2">
            <div className="flex items-center gap-2">
              <div className="bg-[#302924] w-5 h-5 rounded-md flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 9.563C9 9.252 9.252 9 9.563 9h4.874c.311 0 .563.252.563.563v4.874c0 .311-.252.563-.563.563H9.564A.562.562 0 019 14.437V9.564z"
                  />
                </svg>
              </div>
              <p className="text-sm text-[#7a7b85] lg:text-xs">
                Broker:Amarkets-Demo
              </p>
            </div>
            <div className="flex items-center gap-2 mr-8">
              <div className="bg-[#302924] w-5 h-5 rounded-md flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z"
                  />
                </svg>
              </div>
              <p className="text-sm text-[#7a7b85] lg:text-xs">Symbol:CADUSD</p>
            </div>
          </div>
          <div className="flex items-center justify-between gap-1 pt-1 lg:mt-4">
            <div className="rounded-xl p-[2px] bg-[#3a3944]">
              <img src={face} className="w-8 h-8 rounded-xl" />
            </div>
            <div className="rounded-xl p-[2px] bg-[#3a3944]">
              <img src={face1} className="w-8 h-8 rounded-xl" />
            </div>
            <div className="rounded-xl p-[2px] bg-[#3a3944]">
              <img src={face2} className="w-8 h-8 rounded-xl" />
            </div>
            <div className="rounded-xl p-[2px] bg-[#3a3944]">
              <img src={face3} className="w-8 h-8 rounded-xl" />
            </div>
            <div className="rounded-xl p-[2px] bg-[#3a3944]">
              <img src={face4} className="w-8 h-8 rounded-xl" />
            </div>
            <div className="rounded-xl p-[2px] bg-[#3a3944]">
              <img src={face5} className="w-8 h-8 rounded-xl" />
            </div>
            <div className="rounded-xl p-[2px] bg-[#3a3944]">
              <img src={face6} className="w-8 h-8 rounded-xl" />
            </div>
            <div className="rounded-xl p-[2px] bg-[#3a3944]">
              <img src={face7} className="w-8 h-8 rounded-xl" />
            </div>
            <div className="rounded-xl p-[2px] bg-[#3a3944]">
              <img src={face8} className="w-8 h-8 rounded-xl" />
            </div>
            <div className="rounded-xl p-[2px] bg-[#3a3944]">
              <img src={face9} className="w-8 h-8 rounded-xl" />
            </div>
            <span>+48</span>
          </div>
          <div className="flex gap-2 items-center justify-between pt-2">
            <div className="flex w-[90%] bg-[#21212b] items-center justify-between p-2 rounded-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4 mr-3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                />
              </svg>

              <span className="lg:text-sm ">The start of the race</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4 ml-20"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </div>
            <div className="bg-[#21212b] w-[10%] flex items-center p-2 rounded-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      {/* //////////////////////////////////////////////////////////////////////////////////  */}
    </div>
  );
}

export default Card;
