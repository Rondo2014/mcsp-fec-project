import {
  SIDEBAR_RECOMMENDED,
  SIDEBAR_CATEGORIES,
  SIDE_BAR_HARDWARE,
  SIDE_BAR_GENRES,
} from "./utils";

const Sidebar = ({ recentlyViewed }) => {
  return (
    <div
      id="sidebar"
      className="absolute left-[-225px] top-[-30px] pt-[31px] mb-10 "
    >
      <div
        id="sidebar block"
        className="border-none bg-none pl-0 w-[210px] mb-5"
      >
        <div
          id="top-promo"
          href="https://store.steampowered.com/app/1675200/Steam_Deck/?utm_source=steamhometop&snr=1_4_4__125"
        >
          <div
            id="gutter-header"
            className="mb-[2px] leading-4 text-[14px] uppercase font-bold text-[#88bde9] group"
          >
            <div
              className="absolute -z-10 left-[-100px] w-[400px] h-[400px] top-0"
              style={{
                background: "linear-gradient(135deg, #00d5ff 28%, #d0266f 35%)",
                WebkitMask:
                  "radial-gradient(circle at 48% 19%, black 2%, transparent 20%)",
              }}
            ></div>
            <img
              id="steam-deck"
              src="https://store.cloudflare.steamstatic.com/public/images//steamdeck/steamdeck_promo_01.png"
              alt="Steam Deck"
              className=" max-w-[85%] mb-[6px] overflow-clip"
            />
            <div className="text-[#88bde9] text-[14px] leading-4 font-bold cursor-pointer hover:text-white">
              steam deck
            </div>
            <div className="block w-fit text-[#a4b3c4] text-[12px] font-bold mb-[25px] normal-case">
              Get Yours Now
            </div>
          </div>
        </div>
        <div>
          <div
            id="sidebar-head-top"
            className=" mb-[2px] leading-4 text-[14px] font-bold group"
          >
            <img
              src="https://store.cloudflare.steamstatic.com/public/images//gift/steamcards_promo_03.png"
              alt="promo"
              className="w-[85%] mb-[6px]"
            />
            <p className="leading-4 text-[14px] font-bold text-[#88bde9] uppercase cursor-pointer group-hover:text-white">
              Steam Gift Cards
            </p>
          </div>
          <div className="block w-fit text-[#a4b3c3] text-[12px] font-bold mb-[25px]">
            Give the Gift of the Game
          </div>
        </div>
        <div
          id="home-sidebar-block"
          className="w-[85%] py-[15px] "
          style={{
            background:
              "radial-gradient(circle at 0%, rgba(83,111,134,0) 20%, rgba(83,111,134,0.25) 100%)",
          }}
        >
          <div
            id="sidebar-pad"
            className="m-0 mb-[7px] text-[#536f86] text-[14px] uppercase font-bold"
          >
            Recently Viewed
          </div>
          <div id="sidebar-items">
            {recentlyViewed.map((item, index) => (
              <div
                key={item + index}
                id="recent-item"
                className="leading-4 mt-[2px] block w-fit text-[#7A8B9D] text-[12px] font-medium hover:text-[#00BBFF] cursor-pointer"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
        <div className="leadint-4 mt-[7px] text-[14px] uppercase font-medium text-[#536f86] ">
          Recommended
        </div>
        <div className="" id="side-bar-recommended">
          {SIDEBAR_RECOMMENDED.map((item, index) => (
            <a
              className="leading-4 mt-[2px] block w-fit text-[#7A8B9D] text-[12px] font-bold hover:text-[#00BBFF]"
              key={item + index}
              href={item}
            >
              {item}
            </a>
          ))}
        </div>
        <div className="leading-4 mt-[16px] mb-[7px] text-[14px] text-[#536f86] uppercase font-bold">
          Browser Categories
        </div>
        <div id="side-bar-categories">
          {SIDEBAR_CATEGORIES.map((item, index) => (
            <a
              key={item + index}
              className="leading-4 mt-[2px] block w-fit text-[#7A8B9D] text-[12px] font-bold hover:text-[#00BBFF]"
              href={item}
            >
              {item}
            </a>
          ))}
        </div>
        <div className="leading-4 mt-[16px] mb-[7px] text-[14px] text-[#536f86] uppercase font-bold">
          Hardware
        </div>
        <div id="sidebar-hardware">
          {SIDE_BAR_HARDWARE.map((item, index) => (
            <a
              key={item + index}
              className="leading-4 mt-[2px] block w-fit text-[#7A8B9D] text-[12px] font-bold hover:text-[#00BBFF]"
              href="item"
            >
              {item}
            </a>
          ))}
        </div>
        <div className="leading-4 mt-[16px] mb-[7px] text-[14px] text-[#536f86] uppercase font-bold">
          Browse By Genre
        </div>
        <div id="sidebar-genres">
          {SIDE_BAR_GENRES.map((item, index) => (
            <a
              key={item + index}
              className="leading-4 mt-[2px] block w-fit text-[#7A8B9D] text-[12px] font-bold hover:text-[#00BBFF]"
              href="item"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
