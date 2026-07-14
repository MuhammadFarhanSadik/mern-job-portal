function Contact() {
  return (
    <div className="max-w-4xl mx-auto py-16 px-6">
      <h1 className="text-4xl font-extrabold text-blue-600 mb-6 text-center">
        Contact Us
      </h1>
      <p className="text-center text-gray-600 mb-12">
        Have questions? We'd love to hear from you. Send us a message and we'll get back to you soon.
      </p>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <form className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
          <input type="text" placeholder="Your Name" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" required />
          <input type="email" placeholder="Your Email" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" required />
          <textarea placeholder="Your Message" rows="4" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" required></textarea>
          <button type="submit" className="bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition">
            Send Message
          </button>
        </form>

        {/* Contact Info */}
        <div className="flex flex-col justify-center gap-6">
          <div>
            <h3 className="text-xl font-bold text-gray-800">Our Office</h3>
            <p className="text-gray-600">Chattogram, Bangladesh</p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-800">Email Us</h3>
            <p className="text-blue-600 font-medium">support@mernjobportal.com</p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-800">Follow Us</h3>
            <p className="text-gray-600">Check out our GitHub and social profiles for updates!</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;