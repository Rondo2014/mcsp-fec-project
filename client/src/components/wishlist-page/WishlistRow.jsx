import { Link } from "react-router-dom";
import RemoveFromWishlist from "./RemoveFromWishlist";

const WishlistRow = ({ game }) => {
  console.log(game);
  return (
    <>
      {game.map((item) => (
        <div
          key={item.id}
          className="wishlist-row flex-col max-w-[940px] mx-auto relative bg-gray-700 bg-opacity-90 text-gray-500 px-6 py-4 mb-2 h-[171px] w-full shadow-md transition-colors duration-300"
        >
          <div className="flex items-center mb-4">
            <>
              <div className="w-[292px] h-[136px] flex-shrink-0 overflow-hidden relative">
                <Link to={`/product/${item.id}`}>
                  <img
                    src={item.game_image}
                    alt={item.title}
                    className="h-full w-full object-cover"
                  />
                </Link>
              </div>
              <div className="ml-4 flex flex-col justify-between">
                <div>
                  <h2 className="text-white text-lg font-normal absolute top-2">
                    {item.title}
                  </h2>
                  <div className=" text-[11px] absolute left-[290px] top-[50px]">
                    <p className="text-white relative left-10">
                      OVERALL REVIEWS:{" "}
                      <span className="ml-[1px] text-[#66C0F4]">
                        {item.reviews.length === 0
                          ? "NO USER REVIEWS"
                          : item.reviews.length}
                      </span>
                    </p>
                  </div>
                  <div className="text-[11px] absolute left-[290px] top-[65px]">
                    <p className="text-white relative left-10">
                      RELEASE DATE:{" "}
                      {item.pub_date ? item.pub_date : "TO BE ANNOUNCED"}
                    </p>
                  </div>
                </div>
                <div className="flex justify-end">
                  <button className="text-white font-semibold py-2 px-4 rounded absolute right-1 top-14">
                    {item.price !== 0 ? `$${item.price}` : "Coming Soon"}
                  </button>
                </div>
              </div>
              <div className="absolute bottom-4 right-6">
                <div className="flex flex-row min-w-[640px]">
                  <div className="absolute left-[47px] bottom-0">
                    <p className="text-gray-600 text-[11px] px-[5px] py-[2px] ">
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
                  <div className="items-right text-right text-[11px] right-[-20px] absolute bottom-0">
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
    </>
  );
};

export default WishlistRow;
