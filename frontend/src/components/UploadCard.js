import React, { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { FaUpload } from "react-icons/fa";

const UploadCard = () => {
  const [file, setFile] = useState(null);
  const [summary, setSummary] = useState("");
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => setFile(e.target.files[0]);

  const handleUpload = async () => {
    if (!file) return alert("Please select a PDF file first!");
    setLoading(true);
    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await axios.post("http://127.0.0.1:8000/api/upload/", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setSummary(res.data.summary);
    } catch (err) {
      console.error(err);
      alert("Error uploading file");
    }
    setLoading(false);
  };

  return (
    <motion.div
      className="bg-white rounded-2xl shadow-2xl p-8 w-[400px] text-center"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
    >
      <h1 className="text-2xl font-bold text-indigo-600 mb-6">AI Study Buddy</h1>

      <input
        type="file"
        accept="application/pdf"
        onChange={handleFileChange}
        className="mb-4"
      />
      <button
        onClick={handleUpload}
        disabled={loading}
        className="bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-2 rounded-lg flex items-center justify-center gap-2 mx-auto"
      >
        <FaUpload /> {loading ? "Summarizing..." : "Upload & Summarize"}
      </button>

      {summary && (
        <div className="mt-6 bg-gray-100 p-4 rounded-lg text-left">
          <h2 className="font-semibold text-lg mb-2 text-indigo-700">Summary:</h2>
          <p className="text-gray-700 text-sm">{summary}</p>
        </div>
      )}
    </motion.div>
  );
};

export default UploadCard;
