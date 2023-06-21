import React from "react";

const Wishlist = () => {
  const wishlistItems = [
    // DUMMY DATA, you can delete once hooked up to DB
    {
      id: 1,
      title: "METAL GEAR SOLID Δ: SNAKE EATER",
      price: 0,
      image:
        "https://cdn.akamai.steamstatic.com/steam/apps/2417610/capsule_616x353.jpg?t=1685602485",
      rank: 1,
      tags: [
        "Action",
        "Stealth",
        "Cinematic",
        "Action-Adventure",
        "Third-Person Shooter",
      ],
      reviews: [],
      releaseDate: null,
    },
  ];

  const WishlistRow = ({ item }) => {
    return (
      <div className="wishlist-row bg-blue-900 bg-opacity-90 text-gray-300 px-6 py-4 mb-10 w-full rounded-lg shadow-md transition-colors duration-300">
        <div className="flex items-center mb-4">
          <div className="w-20 h-20 flex-shrink-0 overflow-hidden rounded-full">
            <img
              src={item.image}
              alt={item.title}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="ml-4">
            <h2 className="text-white text-lg font-normal mb-2 truncate">
              {item.title}
            </h2>
            <p className="text-gray-600">Rank: {item.rank}</p>
            <p className="text-gray-600">
              Tags:{" "}
              {item.tags.map((tag, index) => (
                <span
                  key={index}
                  className="wishlist-tag inline-block mr-3 px-2 py-1 border border-white border-opacity-20 text-gray-500 rounded cursor-pointer h-5"
                >
                  {tag}
                </span>
              ))}
            </p>
            <p className="text-gray-600">
              Overall Reviews:{" "}
              {item.reviews.length === 0
                ? "NO USER REVIEWS"
                : item.reviews.length}
            </p>
            <p className="text-gray-600">
              Release Date:{" "}
              {item.releaseDate ? item.releaseDate : "TO BE ANNOUNCED"}
            </p>
          </div>
        </div>
        <p className="text-gray-600">Coming soon</p>
        <button className="mt-4 bg-green-700 hover:bg-green-800 text-white font-semibold py-2 px-4 rounded">
          Add to Cart
        </button>
        <p className="text-gray-600 mt-2">Added on 6/15/2023 (remove)</p>
      </div>
    );
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">My Wishlist</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {wishlistItems.map((item) => (
          <WishlistRow key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Wishlist;

// {
/* <>
    //   <Navbar />
    //   <div class="page_template_content">
    //     <div class="game_page_background game">
    //       <div class="store_nav_spacer">
    //         <div class ="page_content_ctn">
    //             <div class ="page_content" style="position:relative;">
    //                 <div class="wishlist_header">
    //                     <div class="profile_avatar_frame">
    //                         <img src="" */
// }
//                         <h2>"USER WISHLIST"</h2>
//                     </div>
//                     <div class="controls">
//                         <input type="text" id="wishlist_search" placeholder="Search by name or tag"></input>
//                     </div>
//                     <div class="control_row">
//                 <div class="filter_tab" id="tab_filters"
//                 >Options <img src="https://store.akamai.steamstatic.com/public/images/v6/btn_arrow_down_padded_white.png"></img></div>
//                     </div>
//                     <div class="filter_tab dropdown" id="drop down_sort">Sort by <span id="label_sort">Your Rank</span> <img src="	https://store.akamai.steamstatic.com/public/images/v6/btn_arrow_down_padded_white.png"></img></div>
//                 </div>
//             </div>
//         </div>
//         <div id="store_header">
//           <div class="content">
//             <div id="storecontrols">
//               <div id="cart status data">
//                 <div class="store_header_btn_gray store_header_btn">
//                   <a id="wishlist_link">
//                     "Wishlist{" "}
//                     <span id="wishlist_item_count_value">(34)</span>{" "}
//                   </a>
//                 </div>{" "}
//               </div>{" "}
//             </div>{" "}
//           </div>{" "}
//         </div>{" "}
//       </div>{" "}
//     </div>{" "}
//   </div>
// </>
