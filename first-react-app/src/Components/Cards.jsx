import React from "react";

function Cards() {
  const data = [
    {
      image:
        "https://media.kasperskydaily.com/wp-content/uploads/sites/36/2020/11/24171234/amazon-related-phishing-scam-featured.jpg",
      name: "Amazone Basics",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      instock: true,
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3NKjGYYKlkiMbhePvK_0FFXYf6vtS1xU25g&s",
      name: "Daily Objects",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqu",
        instock: false,
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSstATpnUJhda-Cjn3zO--XAZSNO6ewOkUMqw&s",
      name: "Prime Day",
      description:
        "rem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magn",
        instock: true,
    },
  ];

  return (
    <div className="w-full h-screen flex items-center justify-center gap-10 bg-zinc-200 relative">
      {data.map((elem, index) => (
        <div
          key={index}
          className="w-52 bg-zinc-100 rounded-md overflow-hidden"
        >
          <div className="w-full h-32 bg-zinc-300">
            <img
              className="w-full h-full object-cover"
              src={elem.image}
              alt={elem.name}
            />
          </div>
          <div className="w-full px-3 py-4">
            <h2 className="font-semibold">{elem.name}</h2>
            <p className="text-xs mt-3">{elem.description}</p>

            <button className={`px-4 py-1 ${elem.instock? 'bg-sky-700':'bg-red-600'} text-xs rounded-md text-zinc-100 mt-3`}>
              {elem.instock?"In Stock":"Out of Stock"}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cards;
