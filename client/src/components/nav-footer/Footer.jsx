import { FOOTER_LINKS } from "./utils";

const Footer = () => {
  return (
    <div
      id="footer"
      className="left-0 right-0 m-0 bg-[#171a21] pt-[16px] pb-[60px] absolute top-auto bottom-0"
    >
      <div id="footer-content" className="w-[940px] mx-auto pt-4">
        <div
          id="valve-links"
          className=" mt-2 float-left font-normal text-[13px] text-[#61686D] flex flex-row items-center"
        >
          {FOOTER_LINKS.map((link, index) => (
            <>
              <a
                key={"footer" + link + index}
                href={link}
                className="text-[#C6D4DF] hover:text-white font-normal text-[13px] flex"
              >
                {link.image && (
                  <img
                    src={link.image}
                    alt={link.name}
                    className=" align-bottom overflow-clip bg-clip-content mr-2"
                  />
                )}
                {link.name}
              </a>
              {index !== FOOTER_LINKS.length - 1 && (
                <span> &nbsp; | &nbsp;</span>
              )}
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
