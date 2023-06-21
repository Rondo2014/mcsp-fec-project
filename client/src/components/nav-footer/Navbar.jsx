import { useState, useContext } from "react";
import { NAVLINKS, NAV_SUBLINKS_STORE, NAV_SUBLINKS_COMMUNITY } from "./utils";
import install from "../../assets/btn_header_installsteam.png";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthProvider";

const Navbar = () => {
  const [showStore, setShowStore] = useState(false);
  const [showCommunity, setShowCommunity] = useState(false);

  const { auth, handleLogout } = useContext(AuthContext);
  const isLoggedIn = auth?.token;
  const username = localStorage.getItem("username");

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
    <div className=" w-full text-[14px] font-normal bg-navbar px-4 tracking-wider">
      <div id="content" className="w-[940px] h-[104px] m-auto z-50">
        <div
          id="logo"
          className=" float-left pt-[30px] w-[176px] h-[44px] mr-5"
        >
          <span id="logo-holder">
            <a href="/">
              <img
                src={
                  "https://store.cloudflare.steamstatic.com/public/shared/images/header/logo_steam.svg?t=962016"
                }
                alt="logo"
                className="w-[200px] aspect-auto"
              />
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
            className="relative z-50 opacity-100 top-[64px] pointer-events-auto transition-opacity duration-300 ease-out"
            style={{
              right: showStore ? "-220px" : "-275px",
              opacity: showCommunity || showStore ? "1" : "0",
            }}
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
          <div
            id="global-actions-menu"
            className=" leading-6 align-top tracking-normal"
          >
            <div
              id="header-install-steam"
              className={`inline-flex relative h-[24px] leading-6 mr-[5px] py-[1px] ${
                !isLoggedIn ? "bg-accent" : "bg-[#67707b33]"
              } text-white w-[108px]`}
            >
              <img src={install} className="py-[4px] mx-2" alt="" />
              <a
                href="/install"
                className="p-l-[35px] font-normal align-middle"
              >
                Install Steam
              </a>
            </div>
            {isLoggedIn ? (
              <>
                <div
                  id="notification-area"
                  className="relative inline-block align-top"
                >
                  <div className="px-8 text-white text-xs font-bold inline-block leading-6 ml-[3px] mr-[8px] cursor-pointer">
                    <span id="envelope">
                      <img
                        className="border-none w-[11px] aspect-[11/8] h-[8px]"
                        src="https://store.cloudflare.steamstatic.com/public/shared/images/responsive/header_menu_notifications.png"
                        alt="envolope"
                      />
                    </span>
                  </div>
                </div>
                <span className="inline-block pl-1 leading-[25px] align-top mr-[5px] text-[11px] text-[#b8b6b4] font-normal">
                  {username}
                </span>
              </>
            ) : (
              <Link
                to="/login"
                className="text-[#b8b6b4] px-[4px] align-top font-normal"
              >
                <span className="hover:text-white">login</span>{" "}
                <span className="px-2">|</span>{" "}
                <span className="hover:text-white">
                  language<span className="text-[7px] ml-2">▼</span>
                </span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
