import { BROWSE_LIST } from "./utils";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const BrowseList = ({ allGames }) => {
  const [selected, setSelected] = useState(1);
  const [selectedGame, setSelectedGame] = useState(null);

  const handleGameHover = (id) => {
    if (selectedGame === null || selectedGame.id !== id) {
      const game = allGames.find((game) => game.id === id);
      setSelectedGame(game);
    }
  };

  const handleClick = (id) => {
    setSelected(id);
  };

  const navigate = useNavigate();

  return (
    <div
      style={{
        background:
          "linear-gradient( to bottom, rgba(42,71,94,1.0) 5%, rgba(42,71,94,0.0) 70%)",
      }}
      className="pt-[1px] mt-[60px] px-[2%] pb-[20px] flex"
    >
      <div className="flex flex-col w-[940px] mx-auto">
        <div className="mb-[8px]">
          <div className="relative h-[31px] mt-[-33px] inset-0">
            <div className="relative overflow-x-auto whitespace-nowrap">
              {BROWSE_LIST.map((link) => (
                <div
                  key={"broswer list " + link.name}
                  className="bg-transparent inline-block mr-0 rounded-t-[3px] text-[13px] leading-6 cursor-pointer align-top mt-[8px]"
                  style={{
                    backgroundColor:
                      selected === link.id ? "rgb(42, 71, 94)" : "#1b2838",
                  }}
                >
                  <div
                    className="text-[13px] text-[#2f89bc] hover:text-white leading-6 px-[10px] cursor-pointer align-top"
                    style={{ color: selected === link.id ? "#fff" : "" }}
                    onClick={() => handleClick(link.id)}
                  >
                    {link.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div
          id="tab-content"
          className="text-[#c6c4df] text-[12px] flex flex-row w-[625px]"
        >
          <div className="w-[940px]">
            {selected !== 2 && (
              <div className="text-right bg-[#202d39] p-1 mb-[-10px]">
                See more:
                <a
                  className="rounded-sm border-none p-[1px] inline-block cursor-pointer text-[#fff] bg-transparent"
                  href="#"
                >
                  <span className="px-[15px] text-[12px] leading-6 block border-[1px] rounded-sm border-[rgba(255,255,255,0.4] hover:border-white ml-1">
                    {selected === 1 && " New Releases"}
                    {selected === 3 && " Upcoming Releases"}
                    {selected === 4 && " Specials"}
                  </span>
                </a>
              </div>
            )}
            {allGames
              .filter((game) => (selected === 4 ? game.on_sale : true))
              .slice(0, 10)
              .map((game) => (
                <a
                  key={"game " + game.id}
                  className="relative block h-[69px] pl-[198px] bg-opacity-50 my-2"
                  style={{
                    background:
                      selectedGame !== null && selectedGame.id === game.id
                        ? "#95bbd4"
                        : "#202d39",
                    marginRight:
                      selectedGame !== null && selectedGame.id === game.id
                        ? "-31px"
                        : "0px",
                  }}
                  onMouseEnter={() => handleGameHover(game.id)}
                  onClick={() => navigate("/product/" + game.id)}
                >
                  <div className="absolute left-0 top-0 z-10 leading-[69px]">
                    <img
                      src={game.game_image}
                      loading="lazy"
                      alt="image"
                      className="overflow-clip clip h-[69px] w-48"
                    />
                  </div>
                  {!game.on_sale ? (
                    <div
                      id="discount-prices-block"
                      className="mt-6 w-auto flex justify-between float-right mr-4 bg-none text-right relative"
                    >
                      <div className="bg-transparent flex flex-col items-end justify-center pl-1">
                        <div className="px-[6px] text-white leading-4 text-[15px]">
                          ${game.price}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div
                      id="discount-prices-block"
                      className="mt-6 w-auto flex justify-between float-right mr-4 bg-none text-right relative"
                    >
                      <div className="flex items-center text-right text-[14px] leading-[18px] px-1 rounded-[1px] font-medium text-[#BEEE11] bg-[#4c6b22]">
                        -{game.sale_deal}%
                      </div>
                      <div className="bg-transparent flex flex-col items-end justify-center pl-1">
                        <div
                          id="original-price"
                          className="relative w-fit text-[#738895] text-[11px] leading-3"
                        >
                          <div>
                            <div
                              style={{
                                transform: "skewY(-8deg)",
                                boxShadow: "0 0 2px black",
                              }}
                              className="right-0 absolute top-[20%] w-7 border-b-[#738895] border-b-[1.5px]"
                            ></div>
                            {game.price}
                          </div>
                          <div className="text-[15px] leading-4 text-[#BEEE11] border-none">
                            $
                            {(
                              game.price -
                              game.price * (game.sale_deal / 100)
                            ).toFixed(2)}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  <div className="pt-[7px] whitespace-nowrap text-[12px] cursor-pointer">
                    <div
                      id="game-name"
                      className="text-[#c7d5e0] text-[1.25em] leading-[18px] text-ellipsis whitespace-nowrap block"
                      style={{
                        color:
                          selectedGame && selectedGame.id === game.id
                            ? "#202d39"
                            : "",
                      }}
                    >
                      {game.title}
                    </div>
                    <div id="item-tags" className="text-[#384959] leading-5">
                      {game.tags.map((tag, index) => (
                        <span key={tag + index}>
                          {" "}
                          {tag} {index === game.tags.length - 1 ? "" : ","}{" "}
                        </span>
                      ))}
                    </div>
                  </div>
                </a>
              ))}
          </div>
          {selectedGame && (
            <div
              id="home-right-col"
              className="w-[308px] flex-1 ml-[14px] float-none min-w-0 flex flex-col"
            >
              <div
                id="preview-container"
                className="flex-1 relative mt-[39px] mb-[5px]"
                style={{
                  background:
                    "linear-gradient( to right, #95bbd4 5%,#859bac 95%)",
                }}
              >
                <div
                  id="tab-preview"
                  className="absolute top-[-39px] bottom-[3px] left-4 w-[292px] p-4"
                  style={{
                    background:
                      "linear-gradient(to right, rgb(149, 187, 212) 5%, rgb(133, 155, 172) 95%)",
                  }}
                >
                  <h2 className="text-[21px] tracking-normal text-[#263645] h-[30px] pr-2 whitespace-nowrap text-ellipsis overflow-clip">
                    {selectedGame.title}
                  </h2>
                  <div className="mt-[5px] h-[22px]">
                    {selectedGame.category.map((category, index) => (
                      <a
                        key={"category" + index}
                        className="inline-block leading-[19px] px-[7px] mr-[2px] rounded-sm cursor-pointer mb-[3px] m-w-[200px] whitespace-nowrap text-ellipsis text-[11px]"
                        style={{ backgroundColor: "rgba( 38, 54, 69, 0.6)" }}
                      >
                        {category}
                      </a>
                    ))}
                  </div>
                  {selectedGame.images.slice(0, 4).map((image, index) => (
                    <div
                      key={"image" + index}
                      className="w-[258px] h-[134px] mt-[3px] bg-cover bg-center p-2"
                      style={{ backgroundImage: `url(${image})` }}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BrowseList;
