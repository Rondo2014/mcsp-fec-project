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
          <div className=" h-8 align-bottom flex inline-flex bg-black py-[2px] pr-[2px] rounded-sm whitespace-nowrap">
            {game.sale_deal ? (
              <>
                <div className=" inline-block h-8 leading-8 text-[25px] text-center overflow-hidden px-[6px] font-medium text-[#BEEE11] bg-[#4c6b22]">
                  -{game.sale_deal}%
                </div>
                <div className="inline-block relative align-top h-8 bg-[#344654] pl-1">
                  <div className="absolute left-auto right-[6px] top-[2px] text-[11px] w-fit text-[#738895] leading-3">
                    <div
                      style={{ boxShadow: "0 0 2px #000000" }}
                      className="left-0 right-0 absolute top-[43%] border-b-[1.5px] border-[#738895] text-[11px] -skew-y-[8deg]"
                    ></div>
                    ${game.price}
                  </div>
                  <div className="pl-2 pt-[13px] pr-[6px] text-[14px] text-[#BEEE11] leading-4">
                    $
                    {(game.price - (game.price * game.sale_deal) / 100).toFixed(
                      2
                    )}
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="">
                  {game.price !== 0 ? `$${game.price}` : "Free to play"}
                </div>
              </>
            )}
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
