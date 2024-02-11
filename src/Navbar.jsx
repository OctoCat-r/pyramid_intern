// import React from "react";
import "/LogoAlone3d.svg";
const Navbar = () => {
  const menuList = [
    { url: "/", title: "Swap" },
    { url: "/about", title: "Rewards" },
    { url: "/projects", title: "Products" },
    { url: "/contact", title: "Launchpad" },
    { url: "/contact", title: "Leaderboard" },
  ];
  return (
    <div className="h-[100px] flex items-center justify-between px-4 sm:px-6 md:px-8 lg:px-12 xl:px-12 text-xl">
      <div className="hidden md:flex gap-4 ">
        <img src="/LogoAlone3d.svg" />
        {menuList.map((item) => (
          <p key={item.title} className="text-white font-mono">
            {item.title}
          </p>
        ))}
      </div>
      <div className="hidden sm:hidden md:flex gap-4 items-center">
        <p className="text-white font-mono ">AboutUs</p>
        <p className="text-white font-mono">Support</p>
        <button className="rounded-md bg-gradient-to-r from-yellow-400 to-yellow-600 p-1 px-5 text-white ">
          Connect Wallet
        </button>
        <p className="text-white font-mono">En</p>
        <div className="h-[35px] bg-yellow-600 w-1"></div>
        <img src="/ShoppingCart.svg" />
      </div>
    </div>
  );
};

export default Navbar;
