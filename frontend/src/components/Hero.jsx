function Hero() {
  return (
    <section className="bg-blue-600 text-white py-20">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* বাম পাশে মোটিভেশনাল টেক্সট */}
        <div className="max-w-lg">
          <h1 className="text-5xl font-bold leading-tight">
            Your Future Starts Here.
          </h1>
          <p className="mt-6 text-lg text-blue-100">
            Success is not final, failure is not fatal: it is the courage to continue that counts. Find your dream role today and build your career.
          </p>
          <button className="mt-8 bg-yellow-400 text-black px-8 py-3 rounded-full font-bold hover:bg-yellow-500 transition">
            Browse Jobs
          </button>
        </div>

        {/* ডান পাশে সার্কেল ইমেজ */}
        <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-white shadow-xl">
          <img src="/hero.png" alt="Hero" className="w-full h-full object-cover" />
        </div>
      </div>
    </section>
  );
}

export default Hero;