import React from "react";

const Purchase = ({ game }) => {
  return (
    <div className="w-[740px] mx-auto mb-[173px]">
      <div
        style={{
          background:
            "linear-gradient( -60deg, rgba(226,244,255,0.3) 5%,rgba(84, 107, 115, 0.3) 95%)",
        }}
        className="relative rounded font-normal text-[13px] text-[#c6d4df] p-4 pb-[26px] mb-7"
      >
        <h1 className="text-[21px] text-white block font-normal">
          {game.price !== 0 ? `Purchase ${game.title}` : `Play ${game.title}`}
        </h1>
        <div
          id="purchase-actions"
          className="absolute right-4 bottom-[-17px] left-4 whitespace-nowrap text-right"
        >
          <div className=" h-8 align-bottom inline-block bg-black py-[2px] pr-[2px] rounded-sm whitespace-nowrap">
            <div className="bg text-[13px] pt-2 px-3 h-6 relative inline-block align-middle top-[-5px] ml-[2px] text-right text-[#c6d4df]">
              {game.price !== 0 ? `$${game.price}` : "Free to play"}
            </div>
            <div className="relative text-[12px] inline-block ml-[2px] align-middle">
              <a
                className="rounded-sm border-none p-[1px] inline-block cursor-pointer text-[#d2efa9] text-right text-[12px] whitespace-nowrap group"
                href=""
              >
                <span
                  style={{
                    background:
                      "linear-gradient( to right, #75b022 5%, #588a1b 95%)",
                  }}
                  className="px-[15px] text-[15px] leading=[30px] rounded-sm block h-[26px] group hover:text-white hover:bg-[#75b022]"
                >
                  {game.price !== 0 ? "Add to Cart" : "Play Game"}
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
