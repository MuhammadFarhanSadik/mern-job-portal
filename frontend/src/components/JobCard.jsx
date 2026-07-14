import axios from "axios";
import { Link } from "react-router-dom";

function JobCard({ job }) {
  const handleApply = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("Please login to apply");
      return;
    }

    try {
      await axios.post(
        `http://localhost:5000/api/jobs/apply/${job._id}`,
        {},
        { headers: { Authorization: `Bearer ${token}` } }
      );
      alert("Applied successfully!");
    } catch (error) {
      alert("Failed to apply");
    }
  };

  return (
    <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-lg font-bold text-gray-900">{job.title}</h3>
          <p className="text-sm text-blue-600 font-medium">{job.companyName}</p>
        </div>
      </div>

      <div className="flex gap-2 mb-4">
        <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">{job.location}</span>
        <span className="bg-blue-50 text-blue-600 text-xs px-2 py-1 rounded">{job.jobType}</span>
      </div>

      <div className="flex justify-between items-center pt-4 border-t border-gray-100">
        <span className="text-gray-900 font-semibold">{job.salary}</span>
        <div className="flex gap-2">
          <Link 
            to={`/jobs/${job._id}`}
            className="text-sm border border-blue-600 text-blue-600 px-4 py-2 rounded-lg font-medium hover:bg-blue-50 transition"
          >
            Details
          </Link>
          <button 
            onClick={handleApply}
            className="text-sm bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition"
          >
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default JobCard;