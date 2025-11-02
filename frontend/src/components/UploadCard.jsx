import { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { Upload, FileUp, CheckCircle2 } from "lucide-react";

const UploadCard = () => {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [summary, setSummary] = useState("");
  const [fileName, setFileName] = useState("");

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    setFileName(selectedFile?.name || "");
    setSummary("");
  };

  const handleUpload = async () => {
    if (!file) return alert("Please select a PDF file first!");
    setLoading(true);
    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.post("http://127.0.0.1:8000/api/upload/", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setSummary(response.data.summary || "File uploaded and summarized successfully!");
      alert("File uploaded and summarized successfully!");
    } catch (err) {
      console.error(err);
      alert("Error uploading file. Please try again.");
    }
    setLoading(false);
  };

  return (
    <div className="w-full max-w-5xl mx-auto px-6 py-12">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h1
          className="text-6xl font-extrabold text-white mb-4 tracking-tight"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          AI Study Buddy
        </motion.h1>
        <motion.p
          className="text-xl text-blue-200 font-light"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Your intelligent companion for document analysis and learning
        </motion.p>
      </motion.div>

      <motion.div
        className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-12 mb-8 border border-white/20 shadow-2xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <div className="text-white mb-8">
          <h2 className="text-3xl font-bold mb-6 text-center">
            How AI Study Buddy Helps You
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <motion.div
              className="bg-white/5 rounded-2xl p-6 border border-white/10"
              whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.08)" }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex items-start gap-4">
                <div className="bg-blue-400/20 p-3 rounded-xl">
                  <FileUp className="w-6 h-6 text-blue-300" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Instant Summaries</h3>
                  <p className="text-blue-100 text-sm leading-relaxed">
                    Upload PDF documents and receive AI-powered summaries instantly, saving hours of reading time.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="bg-white/5 rounded-2xl p-6 border border-white/10"
              whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.08)" }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex items-start gap-4">
                <div className="bg-green-400/20 p-3 rounded-xl">
                  <CheckCircle2 className="w-6 h-6 text-green-300" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Key Insights</h3>
                  <p className="text-blue-100 text-sm leading-relaxed">
                    Extract main points and critical information automatically for quick reviews and exam prep.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="bg-white/5 rounded-2xl p-6 border border-white/10"
              whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.08)" }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex items-start gap-4">
                <div className="bg-purple-400/20 p-3 rounded-xl">
                  <Upload className="w-6 h-6 text-purple-300" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Versatile Use Cases</h3>
                  <p className="text-blue-100 text-sm leading-relaxed">
                    Perfect for students, professionals, and researchers analyzing reports, papers, and documents.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="bg-white/5 rounded-2xl p-6 border border-white/10"
              whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.08)" }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex items-start gap-4">
                <div className="bg-orange-400/20 p-3 rounded-xl">
                  <CheckCircle2 className="w-6 h-6 text-orange-300" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Secure & Fast</h3>
                  <p className="text-blue-100 text-sm leading-relaxed">
                    Your documents are processed securely with lightning-fast AI technology for optimal results.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div
          className="mt-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <div className="flex flex-col items-center gap-6">
            {fileName && (
              <motion.div
                className="text-white text-center bg-white/5 px-6 py-3 rounded-xl border border-white/20"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <p className="text-sm text-blue-200">Selected file:</p>
                <p className="font-semibold">{fileName}</p>
              </motion.div>
            )}

            <div className="flex flex-wrap gap-4 justify-center">
              <motion.label
                htmlFor="file-upload"
                className="cursor-pointer bg-white/20 hover:bg-white/30 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 border border-white/30 flex items-center justify-center gap-3 shadow-lg"
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.3)" }}
                whileTap={{ scale: 0.95 }}
              >
                <FileUp className="w-5 h-5" />
                Choose PDF File
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
                disabled={loading || !file}
                className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 shadow-lg disabled:from-gray-500 disabled:to-gray-600"
                whileHover={!loading && file ? { scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.3)" } : {}}
                whileTap={!loading && file ? { scale: 0.95 } : {}}
              >
                <Upload className="w-5 h-5" />
                {loading ? "Summarizing..." : "Upload & Summarize"}
              </motion.button>
            </div>
          </div>
        </motion.div>

        {summary && (
          <motion.div
            className="mt-8 bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h3 className="text-white font-bold text-xl mb-3">Summary:</h3>
            <p className="text-blue-100 leading-relaxed">{summary}</p>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default UploadCard;
