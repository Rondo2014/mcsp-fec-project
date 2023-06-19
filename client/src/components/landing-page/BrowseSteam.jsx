import { BROWSE_STEAM } from "./utils";

const BrowseSteam = () => {
  return (
    <div className="px-[2%] pb-[20px] mt-5">
      <div className="relative w-[940px] my-0 mx-auto min-h-[95px]">
        <h2 className="text-[14px] uppercase text-white mb-[10px] pt-[2px] tracking-wide">
          Browse Steam
        </h2>
        <div className="grid grid-cols-4 gap-2">
          {BROWSE_STEAM.map((link) => (
            <a
              className="flex items-center justify-center h-[58px] text-[16px] text-white font-medium uppercase tracking-wide text-center rounded-[3px]"
              style={{
                background: "linear-gradient(90deg, #06BFFF 0%, #2D73FF 100%)",
                boxShadow: "0 0 4px #000",
              }}
              key={link.name}
              href={link.link}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrowseSteam;
