import { useState, useContext, useEffect } from "react";
import {
  NAVLINKS,
  NAV_SUBLINKS_STORE,
  NAV_SUBLINKS_COMMUNITY,
  USER_MENU,
} from "./utils";
import install from "../../assets/btn_header_installsteam.png";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthProvider";

const Navbar = () => {
  const [showStore, setShowStore] = useState(false);
  const [showCommunity, setShowCommunity] = useState(false);
  const [showUser, setShowUser] = useState(false);
  const [navLinks, setNavLinks] = useState(NAVLINKS);

  const { auth, handleLogout } = useContext(AuthContext);
  const isLoggedIn = auth?.token;
  const username = localStorage.getItem("username");
  const profilePic = localStorage.getItem("profile_picture");

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

  const handleUserClick = () => {
    setShowUser(!showUser);
  };

  useEffect(() => {
    if (isLoggedIn) {
      const updatedNavLinks = [...NAVLINKS];
      updatedNavLinks.splice(2, 0, { name: username, link: "#" });
      setNavLinks(updatedNavLinks);
    } else {
      setNavLinks(NAVLINKS);
    }
  }, [isLoggedIn, username]);

  console.log(NAVLINKS);

  return (
    <div className=" w-full text-[14px] font-normal bg-navbar px-4 tracking-wider z-50">
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
          {navLinks.map((link) => (
            <a
              key={link.name}
              className="block cursor-pointer relative pt-[45px] px-[7px] pb-[7px] leading-4 float-left text-[14px] text-[#b8b6b4] uppercase hover:text-white"
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
          className="relative top-[6px] h-[21px] leading-[21px] text-[#b8b6b4] text-[11px] z-[401]"
          id="global-actions"
        >
          <div
            id="global-actions-menu"
            className=" leading-6 align-top tracking-normal relative"
          >
            <div
              id="header-install-steam"
              className={`inline-flex relative h-[24px] leading-6 mr-[5px] py-[1px] ${
                !isLoggedIn ? "bg-accent top[0px]" : "bg-[#67707b33] top-[-9px]"
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
                  <div className="px-8 text-white text-xs font-bold inline-block leading-6 mx-[-12px] cursor-pointer">
                    <span id="envelope">
                      <img
                        className="border-none w-[11px] aspect-[11/8] h-[8px]"
                        src="https://store.cloudflare.steamstatic.com/public/shared/images/responsive/header_menu_notifications.png"
                        alt="envolope"
                      />
                    </span>
                  </div>
                </div>
                <span
                  onClick={() => handleUserClick()}
                  className="inline-block cursor-pointer pl-1 leading-[25px] align-top mr-[5px] text-[11px] text-[#b8b6b4] font-normal"
                >
                  {username}
                </span>
                {showUser && (
                  <div
                    id="popup"
                    className="top-[25px] right-[75px] block align-top z-50 absolute shadow-sm shadow-black"
                  >
                    <div
                      id="menu"
                      className="w-[150px] p-0 border-[1px] border-[#3D4450] relative bg-[#3D4450] "
                    >
                      {USER_MENU.map((link) => (
                        <a
                          className="block py-[5px] px-[12px] text-xs font-normal hover:bg-[#dcdedf] hover:text-[#171d25] leading-normal text-left cursor-pointer whitespace-nowrap overflow-hidden text-ellipsis"
                          key={link.name}
                          href={link.link}
                          {...(link.name === "Logout" && {
                            onClick: handleLogout,
                          })}
                        >
                          {link.name === "Logout" ? (
                            <span>
                              {link.name}:{" "}
                              <span className="text-[#57cbde]">{username}</span>
                            </span>
                          ) : (
                            link.name
                          )}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
                <div
                  id="wallet"
                  className="text-right pr-[15px] leading-normal align-top text-[#b8b6b4] text-[11px] absolute right-[110px] top-7"
                >
                  <a href="">$0.00</a>
                </div>
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
            {isLoggedIn && (
              <a
                href=""
                style={{
                  background:
                    "linear-gradient( to bottom, #41778f 5%, #3d697b 95%)",
                }}
                className="inline-block ml-2 relative leading-[21px]"
              >
                <img
                  src={profilePic}
                  className="w-[32px] h-[32px] p-[1px] border-none "
                  alt=""
                />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
