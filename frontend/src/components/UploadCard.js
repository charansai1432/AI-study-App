import React, { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { FaUpload, FaFileUpload } from "react-icons/fa";

const UploadCard = () => {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => setFile(e.target.files[0]);

  const handleUpload = async () => {
    if (!file) return alert("Please select a PDF file first!");
    setLoading(true);
    const formData = new FormData();
    formData.append("file", file);

    try {
      await axios.post("http://127.0.0.1:8000/api/upload/", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert("File uploaded and summarized successfully!");
    } catch (err) {
      console.error(err);
      alert("Error uploading file");
    }
    setLoading(false);
  };

  return (
    <div className="text-center">
      <motion.h1
        className="text-4xl font-bold text-white mb-8 tracking-tight"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        AI Study Buddy
      </motion.h1>

      <motion.div
        className="text-white text-lg mb-8 max-w-2xl mx-auto text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <p className="mb-6 font-semibold">Discover how AI Study Buddy can revolutionize your study and work routine:</p>
        <ul className="list-none space-y-3 text-left inline-block">
          <li className="flex items-start gap-2">
            <span className="text-blue-300 font-bold w-4 flex-shrink-0">•</span>
            <span>Upload PDF documents for instant AI-powered summaries, saving you hours of reading.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-300 font-bold w-4 flex-shrink-0">•</span>
            <span>Get key insights and main points extracted automatically, perfect for quick reviews.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-300 font-bold w-4 flex-shrink-0">•</span>
            <span>Ideal for students preparing for exams, professionals analyzing reports, and researchers skimming literature.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-300 font-bold w-4 flex-shrink-0">•</span>
            <span>Secure and fast processing ensures your documents are handled with care and efficiency.</span>
          </li>
        </ul>
      </motion.div>

      <motion.div
        className="flex gap-4 justify-center items-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <motion.label
          htmlFor="file-upload"
          className="cursor-pointer bg-white/20 hover:bg-white/30 text-white px-6 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 border border-white/20 flex items-center justify-center gap-3"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaFileUpload />
          Choose PDF file
        </motion.label>
        <input
          id="file-upload"
          type="file"
          accept="application/pdf"
          onChange={handleFileChange}
          className="hidden"
        />

        <motion.button
          onClick={handleUpload}
          disabled={loading}
          className="bg-white/20 hover:bg-white/30 text-white px-6 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 border border-white/20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaUpload />
          {loading ? "Summarizing..." : "Upload & Summarize"}
        </motion.button>
      </motion.div>
    </div>
  );
};

export default UploadCard;
