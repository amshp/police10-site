export default function Home() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-10">

      {/* Box for News & Images */}
      <section className="bg-white shadow-md rounded-xl p-6 mb-10">
        <h2 className="text-2xl font-bold text-green-700 mb-4">اخبار و اطلاعیه‌ها</h2>
        <p className="text-gray-600">
          در این بخش می‌توانید اخبار، تصاویر و اطلاعیه‌های مهم دفتر را قرار دهید.
        </p>
      </section>

      {/* Services Section */}
      <section>
        <h2 className="text-2xl font-bold text-green-700 mb-6">خدمات دفتر</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Service 1 */}
          <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-green-700 mb-2">خدمات کافی‌نت</h3>
            <p className="text-gray-600">انواع خدمات اینترنتی و اداری.</p>
          </div>

          {/* Service 2 */}
          <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-green-700 mb-2">خدمات پلیس +۱۰</h3>
            <p className="text-gray-600">خدمات هویتی، گذرنامه، گواهینامه و ...</p>
          </div>

          {/* Service 3 */}
          <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-green-700 mb-2">خدمات پیشخوان دولت</h3>
            <p className="text-gray-600">خدمات دولتی و عمومی.</p>
          </div>

        </div>
      </section>
    </div>
  );
}