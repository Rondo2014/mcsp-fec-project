import { Link } from "react-router-dom";
import RemoveFromWishlist from "./RemoveFromWishlist";

const WishlistRow = ({ game }) => {
  return (
    <div
      className="mx-auto w-[940px] pt-3 "
      style={{ borderTop: "1px solid #4d4f51" }}
    >
      {game !== null &&
        game.map((item) => (
          <div
            key={item.id}
            className="wishlist-row flex-col max-w-[940px] mx-auto relative bg-[#3d4c5d] bg-opacity-90 text-gray-500 px-6 py-4 mb-2 h-[171px] w-full shadow-md transition-colors duration-300"
          >
            <div className="flex items-center mb-4">
              <>
                <div className="w-[292px] h-[136px] flex-shrink-0 overflow-hidden relative left-10 top-[2px]">
                  <Link to={`/product/${item.id}`}>
                    <img
                      src={item.game_image}
                      alt={item.title}
                      className="h-full w-full object-cover"
                    />
                  </Link>
                </div>
                <div
                  className="h-full absolute left-10 top-0"
                  style={{ borderLeft: "2px solid #313d4a" }}
                ></div>
                <div>
                  <img
                    src="https://store.akamai.steamstatic.com/public/images/v6/wishlist/handle.png"
                    className="absolute left-[9px] top-[43%]"
                  />
                </div>
                <div className="ml-4 flex flex-col justify-between">
                  <div>
                    <h2 className="text-white text-[22px] font-normal absolute top-4 left-[372px]">
                      {item.title}
                    </h2>
                    <div className=" text-[11px] absolute left-[332px] top-[50px]">
                      <p className="text-white relative left-10">
                        OVERALL REVIEWS:{" "}
                        <span className="ml-[1px] text-[#66C0F4]">
                          {item.reviews.length === 0
                            ? "NO USER REVIEWS"
                            : item.reviews.length}
                        </span>
                      </p>
                    </div>
                    <div className="text-[11px] absolute left-[332px] top-[65px]">
                      <p className="text-white relative left-10">
                        RELEASE DATE:{" "}
                        {item.pub_date ? item.pub_date : "TO BE ANNOUNCED"}
                      </p>
                    </div>
                  </div>
                  {item.price !== 0 ? (
                    <div className="bg-[#313d4a] w-full relative right-[-410px]">
                      <div className="flex flex-row justify-end w-[185px] h-[36px]">
                        <div className="absolute left-0 bottom-[-2px]">
                          <div className="text-white text-[13px] font-semibold py-2 px-4 rounded ">
                            ${item.price}
                          </div>
                        </div>
                        <div className="absolute w-[108px] h-[30px] text-center bg-[#69a01f] top-[3px] right-[3px] text-[#b6d985] rounded-[2px] pt-[2.7px]">
                          <span className="">Add to Cart</span>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="bg-[#313d4a] w-[116px] h-[36px] absolute right-[3px] text-[12px]">
                      <div className="text-white">Coming Soon</div>
                    </div>
                  )}
                </div>
                <div className="absolute bottom-4 right-6">
                  <div className="flex flex-row min-w-[640px]">
                    <div className="absolute left-[90px] bottom-[-6px]">
                      <p className="text-gray-600 text-[11px] px-[5px] py-[1px] ">
                        {item.tags.map((tag, index) => (
                          <span
                            key={index}
                            className="inline-block mr-[4px] border px-[2px] border-white border-opacity-20 text-gray-500 text-[12px] rounded cursor-pointer"
                          >
                            {tag}
                          </span>
                        ))}
                      </p>
                    </div>
                    <div className="items-right text-right text-[11px] right-[-10px] absolute bottom-[-8px]">
                      <p className="text-[#b2b8bd] text-right">
                        Added on 6/15/2023 ({" "}
                        <RemoveFromWishlist gameId={item.id} /> )
                      </p>
                    </div>
                  </div>
                </div>
              </>
            </div>
          </div>
        ))}
    </div>
  );
};

export default WishlistRow;
