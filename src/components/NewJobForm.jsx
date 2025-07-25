import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const NewJobForm = () => {
  const [title, setTitle] = useState("");
  const [salary, setSalary] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "http://localhost:8000/employer/jobs/",
        { title, salary },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        }
      );
      navigate("/dashboard"); // ή όπου θες να ανακατευθυνθεί
    } catch (err) {
      console.error("Failed to create job", err);
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 border rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Create New Job</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-semibold">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border px-3 py-2 rounded"
            required
          />
        </div>
        <div>
          <label className="block font-semibold">Salary ($)</label>
          <input
            type="number"
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
            className="w-full border px-3 py-2 rounded"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded">
          Create Job
        </button>
      </form>
    </div>
  );
};

export default NewJobForm;
