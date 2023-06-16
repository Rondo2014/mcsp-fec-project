const Sidebar = () => {
  return (
    <div id="sidebar" className="absolute left-[-200px] top-[-30px] pt-[31px]">
      <div
        id="sidebar block"
        className="border-none bg-none pl-0 w-[210px] mb-5"
      >
        <a
          id="top-promo"
          href="https://store.steampowered.com/app/1675200/Steam_Deck/?utm_source=steamhometop&snr=1_4_4__125"
        >
          <div
            id="gutter-header"
            className="mb-[2px] leading-4 text-[14px] uppercase font-bold text-[#88bde9]"
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
            <div className="text-[#88bde9] text-[14px] leading-4 font-bold">
              steam deck
            </div>
            <div className="block w-fit text-[#a4b3c4] text-[11px] font-bold mb-[25px]">
              Get Yours Now
            </div>
          </div>
        </a>
        <a href="#">
          <div
            id="sidebar-head-top"
            className=" mb-[2px] leading-4 text-[14px] font-bold"
          >
            <img
              src="https://store.cloudflare.steamstatic.com/public/images//gift/steamcards_promo_03.png"
              alt="promo"
              className="w-[85%] mb-[6px]"
            />
            <p className="leading-4 text-[14px] font-bold text-[#88bde9] uppercase">
              Steam Gift Cards
            </p>
          </div>
          <div className="block w-fit text-[#a4b3c3] text-[12px] font-bold mb-[25px]">
            Give the Gift of the Game
          </div>
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
