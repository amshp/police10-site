import "./globals.css";
import { FaBars } from "react-icons/fa";
import { useState } from "react";

export const metadata = {
  title: "Police10",
  description: "Police10 Services Website",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fa" dir="rtl">
      <body className="bg-gray-100">

        {/* Navbar */}
        <nav className="bg-gradient-to-r from-green-700 to-green-600 text-white py-4 shadow-lg backdrop-blur-md sticky top-0 z-50">
          <div className="max-w-6xl mx-auto flex items-center justify-between px-6">

            {/* لوگو */}
            <h1 className="text-3xl font-extrabold tracking-wide">
              Police10<span className="text-green-300">+</span>
            </h1>

            {/* منوی دسکتاپ */}
            <ul className="hidden md:flex gap-10 text-lg font-medium">
              <li className="hover:text-green-200 transition cursor-pointer">خدمات</li>
              <li className="hover:text-green-200 transition cursor-pointer">نوبت‌دهی</li>
              <li className="hover:text-green-200 transition cursor-pointer">درباره ما</li>
              <li className="hover:text-green-200 transition cursor-pointer">تماس با ما</li>
            </ul>

            {/* منوی موبایل */}
            <MobileMenu />
          </div>
        </nav>

        {/* محتوای صفحات */}
        <main>{children}</main>

      </body>
    </html>
  );
}

/* ------------------ کامپوننت منوی موبایل ------------------ */
function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden relative">
      <FaBars
        className="text-3xl cursor-pointer"
        onClick={() => setOpen(!open)}
      />

      {/* منوی بازشو */}
      {open && (
        <div className="absolute right-0 mt-4 bg-white text-green-700 shadow-xl rounded-lg w-48 py-4 animate-slideDown">
          <ul className="flex flex-col gap-4 px-4 text-lg">
            <li className="hover:text-green-500 cursor-pointer">خدمات</li>
            <li className="hover:text-green-500 cursor-pointer">نوبت‌دهی</li>
            <li className="hover:text-green-500 cursor-pointer">درباره ما</li>
            <li className="hover:text-green-500 cursor-pointer">تماس با ما</li>
          </ul>
        </div>
      )}
    </div>
  );
}