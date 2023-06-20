import React from "react";

const TitleBar = ({ game }) => {
  const breadCrumbs = ["All Games", `${game.category[0]}`, `${game.title}`];

  return (
    <div className="mx-auto w-[940px]">
      <div
        id="bread-crumbs"
        className="text-[#56707f] text-[12px] font-normal pt-[10px]"
      >
        <div>
          {breadCrumbs.map((crumb, index) => (
            <a key={crumb + index} className="text-[#8f98a0]">
              {crumb} <span className="text-[#56707f]"> {">"} </span>{" "}
            </a>
          ))}
        </div>
      </div>
      <div id="title" className=" max-w-[948px] mx-auto">
        <div className="relative mx-auto text-left min-h-[46px]">
          <div className="relative float-right">
            <a className="rounded-sm p-[1px] inline-block cursor-pointer bg-[#67c1f533] text-[#67c1f5] hover:bg-[#67c1f5] hover:text-white">
              <span className="px-[15px] text-[15px] leading-[30px]">
                Community Hub
              </span>
            </a>
          </div>
          <div className="font-normal text-white text-[26px] leading-8 text-ellipsis text-left">
            {game.title}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TitleBar;
