export default function HomePage() {
  return (
    <main
      dir="ltr"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-gray-100 to-gray-200 p-6"
    >
      <div className="text-center max-w-xl space-y-6">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
          Welcome to <span className="text-indigo-600">SMSCO</span>
        </h1>
        <p className="text-lg text-gray-700">
          Our smart platform connects you with the most suitable consultant
          using AI, providing a world-class experience in consulting and
          training.
        </p>
        <p className="text-sm text-gray-500">
          Start your journey now with smarter consulting and confident
          decisions.
        </p>
        <div className="mt-4">
          <a
            href="/en/services"
            className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-6 rounded-xl shadow-md transition"
          >
            Explore Our Services
          </a>
        </div>
      </div>
    </main>
  );
}
