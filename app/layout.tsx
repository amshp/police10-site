"use client";

import "./globals.css";
import { useState } from "react";
import { FaBars } from "react-icons/fa";

export const metadata = {
  title: "Police+10",
  description: "Official Police+10 Services Website",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <html lang="fa" dir="rtl">
      <body className="bg-gray-100">

        {/* Navbar */}
        <header className="bg-green-600 text-white shadow-md sticky top-0 z-50">
          <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">

            {/* Logo */}
            <h1 className="text-2xl font-extrabold tracking-wide">
              police+10
            </h1>

            {/* Desktop Menu */}
            <ul className="hidden md:flex gap-10 text-lg font-medium">
              <li className="hover:text-green-200 cursor-pointer">درباره ما</li>
              <li className="hover:text-green-200 cursor-pointer">خدمات</li>
              <li className="hover:text-green-200 cursor-pointer">چت‌بات</li>
            </ul>

            {/* Mobile Menu Button */}
            <FaBars
              className="text-3xl cursor-pointer md:hidden"
              onClick={() => setOpen(!open)}
            />
          </div>

          {/* Mobile Menu */}
          {open && (
            <div className="md:hidden bg-white text-green-700 shadow-lg py-4 px-6 animate-slideDown">
              <ul className="flex flex-col gap-4 text-lg">
                <li className="hover:text-green-500 cursor-pointer">درباره ما</li>
                <li className="hover:text-green-500 cursor-pointer">خدمات</li>
                <li className="hover:text-green-500 cursor-pointer">چت‌بات</li>
              </ul>
            </div>
          )}
        </header>

        <main>{children}</main>
      </body>
    </html>
  );
}