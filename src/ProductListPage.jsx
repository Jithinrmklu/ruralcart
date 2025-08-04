import React, { useState } from "react";

const TABS = ["Yamaha", "Honda", "Common Accessories", "Raincoat"];

const PRODUCTS = [
  { name: "Full-Face Helmet", price: "$120", image: "/helmet.jpg", category: "Yamaha" },
  { name: "LED Headlight", price: "$60", image: "/headlight.jpg", category: "Yamaha" },
  { name: "Saddlebag", price: "$90", image: "/saddlebag.jpg", category: "Honda" },
  { name: "Motorcycle Mirror", price: "$25", image: "/mirror.jpg", category: "Honda" },
  { name: "Tank Bag", price: "$75", image: "/tankbag.jpg", category: "Common Accessories" },
  { name: "Phone Mount", price: "$35", image: "/phonemount.jpg", category: "Common Accessories" },
  { name: "Rain Jacket", price: "$50", image: "/rainjacket.jpg", category: "Raincoat" }
];

export default function ProductListPage() {
  const [selectedTab, setSelectedTab] = useState("Yamaha");

  const filteredProducts = PRODUCTS.filter(
    (product) => product.category === selectedTab
  );

  return (
    <div className="p-4 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Bike Accessories</h1>

      <div className="flex flex-wrap gap-3 mb-6">
        {TABS.map((tab) => (
          <button
            key={tab}
            onClick={() => setSelectedTab(tab)}
            className={`px-4 py-2 rounded-full border text-sm font-medium transition-all ${
              selectedTab === tab
                ? "bg-black text-white border-black"
                : "text-gray-600 border-gray-300 hover:bg-gray-100"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filteredProducts.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
    </div>
  );
}

function ProductCard({ name, price, image }) {
  return (
    <div className="border rounded-xl p-4 flex flex-col items-center text-center shadow-sm w-full h-72">
      <img
        src={image}
        alt={name}
        className="w-24 h-24 object-contain mb-4"
      />
      <h2 className="text-base font-semibold mb-1">{name}</h2>
      <p className="text-sm text-gray-500">{price}</p>
    </div>
  );
}
