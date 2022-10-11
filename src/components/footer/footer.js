import gridpic from "../../img/Repeat Grid 1.png";
import brand from "../../img/logo.png";
import map from "../../img/Group 39159.png";
import social from "../../img/شبکه ها.png";
function Footer() {
  return (
    <div>
      <div className="pt-5">
        <img src={gridpic} />
      </div>
      <div className="flex gap-16 justify-between bg-[#1B1B23] p-14">
        <div className="w-1/3">
          <img src={brand} />
          <p className="pt-10 text-[#A3A4AE] text-sm text-justify">
            Per the official Terms and Conditions of the website,
            competitions.amirfx.com and its related company are not brokers and
            any deposit to your wallet is used for in-site purchases only. The
            offered technical solution for the amirfx platforms and data feed is
            powered by the institutional liquidity providers that you opt to use
            on your own. All information provided on this site is intended
            solely for the study purposes related to trading....
          </p>
        </div>
        <div>
          <p> About Us</p>
          <p className="mt-8 text-sm text-[#A3A4AE]">About us</p>
          <p className="mt-4 text-sm text-[#A3A4AE]">Contact us</p>
          <p className="mt-4 text-sm text-[#A3A4AE]">Leader Board</p>
          <p className="mt-4 text-sm text-[#A3A4AE]">Affiliate Program</p>
        </div>
        <div>
          <p>Policies</p>
          <p className="mt-8 text-sm text-[#A3A4AE]">Terms and Conditions</p>
          <p className="mt-4 text-sm text-[#A3A4AE]">Privacy Policy</p>
          <p className="mt-4 text-sm text-[#A3A4AE]">Refund Policy</p>
          <p className="mt-4 text-sm text-[#A3A4AE]">Legal Notices</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <img src={map} />
          <div className="w-80 h-20 rounded-xl mt-3 bg-[#24242D] flex justify-around items-center">
            <div className="W-1/3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-9 h-9 text-[#7A818A] font-bold"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                />
              </svg>
            </div>

            <div className="w-2/3">
              <p>
                <span className="text-[#A3A4AE] font-bold">Phone :</span>
                <span className="text-base text-[#C9C9C9A6]"> +90 - </span>{" "}
                <span className="text-base text-[#FFFFFF]">5469047740</span>
              </p>
              <p className="text-sm text-[#A3A4AE]">
                support@competitions.amirfx.com
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#1E1E26]">
        <hr className="border-[1px] border-solid border-[#fff] w-full opacity-5" />
        <div className="flex justify-between items-center">
          <div>
            <p className="text-[#A3A4AE] text-sm pl-14 pt-4 pb-2">
              All rights reserved by competitions.amirfx.com
            </p>
          </div>
          <div>
            <img src={social} className="pr-16" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
