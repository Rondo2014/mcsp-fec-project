import { FOOTER_LEGAL_LINKS } from "./utils";
import React from "react";

const FooterText = () => {
  return (
    <div className=" float-left ml-3 text-[#8F98A0] text-[12px] leading-4">
      <div>
        © 2023 Valve Corporation. All rights reserved. All trademarks are
        property of their respective owners in the US and other countries.
      </div>
      <div>
        VAT included in all prices where applicable.&nbsp;&nbsp;
        {FOOTER_LEGAL_LINKS.map((link, index) => (
          <React.Fragment key={"footer-text" + link.name + index}>
            <a
              href={link.path}
              className="text-[#C6D4DF] hover:text-white font-normal text-[12px] leading-4"
            >
              {link.name}
            </a>
            {index !== FOOTER_LEGAL_LINKS.length - 1 && (
              <span> &nbsp; | &nbsp;</span>
            )}
          </React.Fragment>
        ))}
      </div>
      <div className="block text-center py-[20px]">
        <div className="rounded-sm p-[1px] inline-block cursor-pointer text-[#66c0f4] bg-[#212c3d] mx-auto">
          <span className="leading-[150%] px-[15px] text-[15px]">
            View mobile website
          </span>
        </div>
      </div>
    </div>
  );
};

export default FooterText;
