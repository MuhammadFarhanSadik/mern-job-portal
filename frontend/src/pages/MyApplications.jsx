import { useEffect, useState } from "react";
import axios from "axios";

function MyApplications() {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    const fetchApplications = async () => {
      const token = localStorage.getItem("token");
      try {
        const res = await axios.get("http://localhost:5000/api/applications", {
          headers: { Authorization: `Bearer ${token}` }
        });
        setApplications(res.data);
      } catch (error) {
        console.error("Error fetching applications:", error);
      }
    };
    fetchApplications();
  }, []);

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6">
      <h2 className="text-3xl font-bold mb-6">My Applications</h2>
      {applications.length > 0 ? (
        <div className="space-y-4">
          {applications.map((app) => (
            <div key={app._id} className="p-4 bg-white shadow rounded-lg border">
              <h3 className="font-bold text-lg">{app.job.title}</h3>
              <p className="text-gray-600">{app.job.companyName}</p>
              <span className="text-sm text-blue-600">Status: {app.status || "Pending"}</span>
            </div>
          ))}
        </div>
      ) : (
        <p>You haven't applied to any jobs yet.</p>
      )}
    </div>
  );
}

export default MyApplications;