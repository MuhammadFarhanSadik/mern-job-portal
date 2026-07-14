import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", formData);
      localStorage.setItem("token", res.data.token); // টোকেন সেভ করা
      alert("Login successful!");
      navigate("/"); // হোম পেজে রিডাইরেক্ট করা
    } catch (error) {
      alert("Invalid email or password");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-6">Login</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input 
          type="email" placeholder="Email" className="p-2 border rounded"
          onChange={(e) => setFormData({...formData, email: e.target.value})} required 
        />
        <input 
          type="password" placeholder="Password" className="p-2 border rounded"
          onChange={(e) => setFormData({...formData, password: e.target.value})} required 
        />
        <button type="submit" className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;