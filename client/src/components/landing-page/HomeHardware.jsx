const HomeHardware = () => {
  return (
    <div className="flex justify-center mt-8">
      <a
        href="https://store.steampowered.com/app/1675200/Steam_Deck/?utm_source=steamhome&snr=1_4_4__147"
        className="hover:shadow-md hover:shadow-[#1A9FFF] mr-2"
      >
        <img
          className="steamdeck_banner_desktop"
          src="https://cdn.akamai.steamstatic.com/steam/clusters/sale_autumn2019_assets/54b5034d397baccb93181cc6/deck_banner_desktop_english.gif?t=1686767372"
          alt="Steam Deck"
        />
      </a>
      <a
        href="https://store.steampowered.com/sub/354231/?snr=1_4_4__147"
        className="hover:shadow-md hover:shadow-[#1A9FFF]"
      >
        <img
          src="https://cdn.akamai.steamstatic.com/store/home/store_index_promo.jpg"
          alt="Valve Index"
        />
      </a>
    </div>
  );
};

export default HomeHardware;
