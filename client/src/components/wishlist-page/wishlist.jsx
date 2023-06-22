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
    {
      id: 2,
      title: "BLAH",
      price: 23,
      rank: 2,
      img: "",
      tags: ["Steath", "Story-Driven"],
      reviews: [],
      releaseDate: 0o7,
    },
  ];

  const WishlistRow = ({ item }) => {
    return (
      <div className="wishlist-row grid-flow-col relative bg-gray-700 bg-opacity-90 text-gray-500 px-6 py-4 mb-10 h-full w-full rounded-lg shadow-md transition-colors duration-300">
        <div className="flex items-center mb-4">
          <div className="w-60 h-50 flex-shrink-0 overflow-hidden ">
            <img
              src={item.image}
              alt={item.title}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="ml-4 flex flex-col justify-between">
            <div>
              <h2 className="text-white text-lg font-normal mb-2 truncate">
                {item.title}
              </h2>

              <p className="text-white">
                Overall Reviews:{" "}
                {item.reviews.length === 0
                  ? "NO USER REVIEWS"
                  : item.reviews.length}
              </p>
              <p className="text-white">
                Release Date:{" "}
                {item.releaseDate ? item.releaseDate : "TO BE ANNOUNCED"}
              </p>
            </div>
            <div className="flex justify-end">
              <button className=" text-white font-semibold py-2 px-4 rounded absolute right-1 top-14">
                Coming Soon
              </button>
            </div>
          </div>
        </div>
        <p className="text-[#b2b8bd] float-right p-10 float absolute bottom-0 right-0">
          Added on 6/15/2023 (remove)
        </p>
        <p className="text-gray-600 ">
          Tags:{" "}
          {item.tags.map((tag, index) => (
            <span
              key={index}
              className=" inline-block mr-3 px-2 py-1 border border-white border-opacity-20 text-gray-500 rounded cursor-pointer "
            >
              {tag}
            </span>
          ))}
        </p>
        <p className="text-white absolute bottom-0 padding left-3">
          {" "}
          {item.rank}
        </p>
      </div>
    );
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">Placeholder Wishlist</h1>
      <div className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:flex md:flex-col">
        {wishlistItems.map((item) => (
          <WishlistRow key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
