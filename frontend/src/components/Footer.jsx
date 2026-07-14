function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-10">
      <div className="max-w-7xl mx-auto px-6 py-6 text-center">
        <h2 className="text-xl font-bold">MERN Job Portal</h2>
        <p className="mt-2 text-gray-300">
          Find your dream job with trusted companies.
        </p>
        <p className="mt-4 text-sm text-gray-400">
          © {new Date().getFullYear()} MERN Job Portal. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;