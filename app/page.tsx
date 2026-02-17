export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="w-full bg-white shadow-sm py-4 px-6 flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-700">دفتر پلیس +۱۰</h1>
        <nav className="flex gap-6 text-gray-700">
          <a href="#" className="hover:text-blue-600">خدمات</a>
          <a href="#" className="hover:text-blue-600">سوالات متداول</a>
          <a href="#" className="hover:text-blue-600">چت‌بات</a>
          <a href="#" className="hover:text-blue-600">تماس با ما</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="text-center py-20 bg-blue-600 text-white">
        <h2 className="text-3xl font-bold mb-4">سامانه خدمات غیرحضوری پلیس +۱۰</h2>
        <p className="text-lg">پیش از مراجعه حضوری، همه اطلاعات لازم را اینجا دریافت کنید</p>
      </section>

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