
export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100">
     
      {/* Hero Section */}
     export default function Hero() 
    <section className="bg-gradient-to-b from-green-600 to-green-400 text-white py-20 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">

        {/* متن سمت راست */}
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            خدمات پلیس +۱۰ به‌صورت سریع و آنلاین
          </h1>

          <p className="mt-4 text-lg text-green-100">
            ارائه خدمات هویتی، گذرنامه، گواهینامه و استعلامات به‌صورت حضوری و آنلاین.
          </p>

          <div className="mt-6 flex gap-4">
            <button className="bg-white text-green-700 px-6 py-3 rounded-lg font-semibold shadow hover:bg-green-100 transition">
              مشاهده خدمات
            </button>

            <button className="bg-green-800 px-6 py-3 rounded-lg font-semibold shadow hover:bg-green-900 transition">
              نوبت‌دهی فوری
            </button>
          </div>
        </div>

        {/* تصویر سمت چپ */}
        <div className="flex-1 flex justify-center">
          <img
            src="/download.png"
            alt="Police Services"
            className="w-72 md:w-96 drop-shadow-xl rounded-xl"
          />
        </div>

      </div>
    </section>
  ;

      {/* Services Section */}
      <section className="py-16 px-6">
        <h3 className="text-2xl font-bold text-center mb-10">خدمات پرکاربرد</h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h4 className="font-bold text-lg mb-2">گذرنامه</h4>
            <p className="text-gray-600">مدارک لازم، هزینه‌ها و مراحل انجام کار</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h4 className="font-bold text-lg mb-2">گواهینامه</h4>
            <p className="text-gray-600">تعویض، تمدید، المثنی و شرایط</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h4 className="font-bold text-lg mb-2">سوءپیشینه</h4>
            <p className="text-gray-600">مدارک لازم و نحوه دریافت</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 bg-gray-200 text-gray-700">
        © 2026 دفتر پلیس +۱۰ – طراحی شده توسط امیر
      </footer>
    </main>
  );
}