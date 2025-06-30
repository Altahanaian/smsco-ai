export default function HomePage() {
  return (
    <main
      dir="rtl"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-gray-100 to-gray-200 p-6"
    >
      <div className="text-center max-w-xl space-y-6">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
          مرحبًا بك في <span className="text-indigo-600">سمسكو</span>
        </h1>
        <p className="text-lg text-gray-700">
          منصتنا الذكية تربطك بالمستشار الأنسب باستخدام تقنيات الذكاء الاصطناعي،
          وتمنحك تجربة احترافية في الاستشارات والتدريب.
        </p>
        <p className="text-sm text-gray-500">
          ابدأ رحلتك الآن نحو استشارات ذكية وقرارات واثقة.
        </p>
        <div className="mt-4">
          <a
            href="/ar/services"
            className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-6 rounded-xl shadow-md transition"
          >
            استكشف خدماتنا
          </a>
        </div>
      </div>
    </main>
  );
}
