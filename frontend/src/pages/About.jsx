function About() {
  return (
    <div className="max-w-4xl mx-auto py-16 px-6">
      <h1 className="text-4xl font-extrabold text-blue-600 mb-6 text-center">
        About Our Platform
      </h1>
      
      <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          Welcome to <strong>MERN Job Portal</strong>, your bridge to professional excellence. 
          We believe that every talented individual deserves a platform to showcase their 
          skills and connect with companies that value innovation and growth.
        </p>

        <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h3>
        <p className="text-gray-600 mb-6">
          Our mission is to simplify the job search process by leveraging modern technology 
          (MERN stack) to create a seamless experience for both job seekers and recruiters. 
          We are dedicated to building a future where matching skills with opportunities is fast, 
          transparent, and accessible to everyone.
        </p>

        <h3 className="text-2xl font-bold text-gray-800 mb-4">Why Choose Us?</h3>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>Extensive database of verified job openings.</li>
          <li>User-friendly interface for easy navigation.</li>
          <li>Secure and reliable application tracking.</li>
          <li>Direct connection with top-tier companies.</li>
        </ul>
      </div>
    </div>
  );
}

export default About;