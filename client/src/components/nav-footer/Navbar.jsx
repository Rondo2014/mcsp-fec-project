import React from "react";
import headerLogo from "../../assets/header_logo.png";
import { NAVLINKS, GLOBAL_LINKS } from "./utils";
import install from "../../assets/btn_header_installsteam.png";

const Navbar = () => {
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
            >
              {link.name}
            </a>
          ))}
        </div>
        <div
          className="relative right-0 left-48 top-[6px] h-[21px] leading-[21px] text-[#b8b6b4] text-[11px] z-[401]"
          id="global-actions"
        >
          <div
            id="global-actions-menu"
            className=" leading-6 align-top inline-block"
          >
            <div
              id="header-install-steam"
              className="inline-block relative h-[21px] leading-6 mr-[3px] bg-accent text-white "
            >
              <a
                href="/install"
                className="inline-block p-l-[35px] pr-[9px] font-normal align-middle"
              >
                Install Steam
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
