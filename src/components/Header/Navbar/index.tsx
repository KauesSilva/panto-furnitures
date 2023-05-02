"use client";

import { useState } from "react";
import { BsHandbagFill } from "react-icons/bs";
import { FaTimes } from "react-icons/fa";
import { HiBars3BottomRight } from "react-icons/hi2";

function Navbar(): JSX.Element {
  const [menu, setMenu] = useState(false);
  const [productCounter, setProductCounter] = useState(8);

  return (
    <>
      <nav className="z-0 flex h-[10%] w-full items-center justify-around bg-transparent md:justify-between md:px-8">
        <div>
          <p className="text-2xl font-semibold text-white">Panto</p>
        </div>
        <div className="flex items-center gap-14 md:hidden">
          <a
            href="#experiences"
            className="text-base font-light text-white hover:text-amber hover:transition-colors"
          >
            Furniture
          </a>
          <a
            href="#sellingProducts"
            className="text-base font-light text-white hover:text-amber hover:transition-colors"
          >
            Shop
          </a>
          <a
            href="#whyUs"
            className="text-base font-light text-white hover:text-amber hover:transition-colors"
          >
            About Us
          </a>
          <a
            href="#footer"
            className="text-base font-light text-white hover:text-amber hover:transition-colors"
          >
            Contact
          </a>
        </div>
        <div className="hidden transition-all md:flex">
          {menu ? (
            <FaTimes
              className="text-3xl font-light text-white hover:text-amber hover:transition-colors"
              onClick={() => setMenu(!menu)}
            />
          ) : (
            <HiBars3BottomRight
              className="text-3xl font-light text-white hover:text-amber hover:transition-colors"
              onClick={() => setMenu(!menu)}
            />
          )}
        </div>
        <div className="hidden">
          <BsHandbagFill className="text-2xl text-white "/>
        </div>
      </nav>
      {menu && (
        <div
          className="fixed z-10 flex h-screen w-screen items-center justify-center"
          onClick={() => setMenu(false)}
        >
          <div className="flex h-full w-full flex-col items-center  justify-center rounded-lg bg-obsidian">
            <a
              href="#"
              className="mb-2 block text-center text-xl font-medium text-white hover:text-amber"
            >
              Furniture
            </a>
            <a
              href="#"
              className="mb-2 block text-center text-xl font-medium text-white hover:text-amber"
            >
              Shop
            </a>
            <a
              href="#"
              className="mb-2 block text-center text-xl font-medium text-white hover:text-amber"
            >
              About Us
            </a>
            <a
              href="#"
              className="mb-2 block text-center text-xl font-medium text-white hover:text-amber"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
