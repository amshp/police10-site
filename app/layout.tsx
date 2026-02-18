import "./globals.css";

export const metadata = {
  title: "Police10",
  description: "Police10 Services Website",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fa" dir="rtl">
      <body className="bg-gray-100">

        {/* --- Navbar مستقیم داخل لی‌اوت --- */}
        <nav className="bg-green-700 text-white py-4 shadow-md">
          <div className="max-w-6xl mx-auto flex items-center justify-between px-6">

            {/* لوگو */}
            <h1 className="text-2xl font-bold">Police10+</h1>

            {/* منوی دسکتاپ */}
            <ul className="hidden md:flex gap-8 text-lg">
              <li className="hover:text-gray-200 cursor-pointer">خدمات</li>
              <li className="hover:text-gray-200 cursor-pointer">نوبت‌دهی</li>
              <li className="hover:text-gray-200 cursor-pointer">درباره ما</li>
              <li className="hover:text-gray-200 cursor-pointer">تماس با ما</li>
            </ul>

            {/* منوی موبایل */}
            <div className="md:hidden text-3xl cursor-pointer">
              ☰
            </div>
          </div>
        </nav>

        {/* --- محتوای صفحات --- */}
        <main>{children}</main>

      </body>
    </html>
  );
}