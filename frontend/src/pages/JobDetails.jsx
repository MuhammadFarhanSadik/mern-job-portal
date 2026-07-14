import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function JobDetails() {
  const { id } = useParams();
  const [job, setJob] = useState(null);

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/jobs/${id}`);
        setJob(res.data);
      } catch (error) {
        console.error("Error fetching job details:", error);
      }
    };
    fetchJob();
  }, [id]);

  if (!job) return <p className="text-center mt-10">Loading job details...</p>;

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
      <h1 className="text-3xl font-bold mb-4">{job.title}</h1>
      <p className="text-blue-600 font-semibold text-lg mb-2">{job.companyName}</p>
      <div className="flex gap-4 mb-6">
        <span className="bg-gray-100 px-3 py-1 rounded">{job.location}</span>
        <span className="bg-blue-50 text-blue-600 px-3 py-1 rounded">{job.jobType}</span>
      </div>
      <h3 className="text-xl font-semibold mb-2">Description</h3>
      <p className="text-gray-700 mb-6">{job.description}</p>
      <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
        Apply Now
      </button>
    </div>
  );
}

export default JobDetails;