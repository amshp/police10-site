"use client";

import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-green-600 text-white px-6 py-4 shadow-md">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        
        {/* Logo */}
        <div className="text-2xl font-bold">
          Police+10
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-lg">
          <li className="hover:text-gray-200 cursor-pointer">چت‌بات</li>
          <li className="hover:text-gray-200 cursor-pointer">خدمات</li>
          <li className="hover:text-gray-200 cursor-pointer">تماس با ما</li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setOpen(true)}
        >
          <HiMenu />
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-40 z-40" onClick={() => setOpen(false)}>
          <div
            className="fixed top-0 right-0 w-64 h-full bg-green-700 text-white p-6 shadow-lg z-50"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="text-3xl mb-6"
              onClick={() => setOpen(false)}
            >
              <HiX />
            </button>

            <ul className="flex flex-col gap-6 text-xl">
              <li className="hover:text-gray-200 cursor-pointer">چت‌بات</li>
              <li className="hover:text-gray-200 cursor-pointer">خدمات</li>
              <li className="hover:text-gray-200 cursor-pointer">تماس با ما</li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
}