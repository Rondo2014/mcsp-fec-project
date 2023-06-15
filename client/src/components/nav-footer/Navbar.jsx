import { useState } from "react";
import headerLogo from "../../assets/header_logo.png";
import { NAVLINKS, NAV_SUBLINKS_STORE, NAV_SUBLINKS_COMMUNITY } from "./utils";
import install from "../../assets/btn_header_installsteam.png";

const Navbar = () => {
  const [showStore, setShowStore] = useState(false);
  const [showCommunity, setShowCommunity] = useState(false);

  const handleStoreEnter = () => {
    setShowStore(true);
  };

  const handleStoreLeave = () => {
    setShowStore(false);
  };
  const handleCommunityEnter = () => {
    setShowCommunity(true);
  };
  const handleCommunityLeave = () => {
    setShowCommunity(false);
  };

  return (
    <div className=" w-full text-[14px] font-normal bg-navbar px-4">
      <div id="content" className="w-[940px] h-[104px] m-auto z-50">
        <div
          id="logo"
          className=" float-left pt-[30px] mr-[40px] w-[176px] h-[44px]"
        >
          <span id="logo-holder">
            <a href="/">
              <img src={headerLogo} alt="logo" />
            </a>
          </span>
        </div>
        <div id="nav-container">
          {NAVLINKS.map((link) => (
            <a
              key={link.name}
              className="block relative pt-[45px] px-[7px] pb-[7px] leading-4 float-left text-[14px] text-[#b8b6b4] uppercase hover:text-white"
              href={link.path}
              onMouseEnter={() => {
                if (link.name === "Store") {
                  setShowStore(true);
                } else if (link.name === "Community") {
                  setShowCommunity(true);
                }
              }}
              onMouseLeave={() => {
                setShowStore(false);
                setShowCommunity(false);
              }}
            >
              {link.name}
            </a>
          ))}
          <div
            id="nav-content"
            className="relative z-50 opacity-100 top-[64px] pointer-events-auto"
            style={{ right: showStore ? "-220px" : "-275px" }}
          >
            {showStore && (
              <div
                id="sub-menu-store"
                className="absolute block bg-navbar shadow-lg shadow-black"
                onMouseEnter={handleStoreEnter}
                onMouseLeave={handleStoreLeave}
              >
                {NAV_SUBLINKS_STORE.map((link) => (
                  <a
                    key={link.name}
                    href="/"
                    className="uppercase text-[11px] text-[#b8b6b4] px-[10px] block py-1 hover:text-white"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            )}
            {showCommunity && (
              <div
                id="sub-menu-community"
                className="absolute block bg-navbar shadow-lg shadow-black"
                onMouseEnter={handleCommunityEnter}
                onMouseLeave={handleCommunityLeave}
              >
                {NAV_SUBLINKS_COMMUNITY.map((link) => (
                  <a
                    key={link.name}
                    href="/"
                    className="uppercase text-[11px] text-[#b8b6b4] px-[10px] block py-1 hover:text-white"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
        <div
          className="relative right-0 left-48 top-[6px] h-[21px] leading-[21px] text-[#b8b6b4] text-[11px] z-[401]"
          id="global-actions"
        >
          <div id="global-actions-menu" className=" leading-6 align-top">
            <div
              id="header-install-steam"
              className="inline-flex relative h-[24px] leading-6 mr-[3px] py-[1px] bg-accent text-white w-[100px] "
            >
              <img src={install} className="py-[4px] mx-2" alt="" />
              <a
                href="/install"
                className="p-l-[35px] font-normal align-middle"
              >
                Install Steam
              </a>
            </div>
            <a href="/login" className="text-[#b8b6b4] px-[4px] align-top">
              <span className="hover:text-white">login</span>{" "}
              <span className="px-2">|</span>{" "}
              <span className="hover:text-white">
                language<span className="text-[7px] ml-2">▼</span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
