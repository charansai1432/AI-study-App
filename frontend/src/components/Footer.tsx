import { Github, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

interface TeamMember {
  name: string;
  github: string;
}

const Footer = () => {
  const teamMembers: TeamMember[] = [
    { name: "Charan sai", github: "https://github.com/charansai1432" },
    { name: "Kruthika", github: "https://github.com/Kruthikaramesh" },
    { name: "Mahesh", github: "https://github.com/Maheshroyce" },
    { name: "Sahana", github: "https://github.com/Sandyaramu" },
    { name: "Mujeeb", github: "https://github.com/MUJEEB76" }
  ];

  return (
    <footer className="relative z-10 bg-black/20 backdrop-blur-md border-t border-white/10 py-8 mt-auto">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className="text-center mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-white text-xl font-bold mb-4 flex items-center justify-center gap-2">
            Developed with <Heart className="w-5 h-5 text-red-400 fill-red-400" /> by Our Team
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {teamMembers.map((member, index) => (
              <motion.a
                key={index}
                href={member.github}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 border border-white/20 flex items-center gap-2 group"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                <Github className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                {member.name}
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="text-center text-blue-200 text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <p>&copy; {new Date().getFullYear()} AI Study Buddy. All rights reserved.</p>
          <p className="mt-2 text-xs text-blue-300">
            Empowering students and professionals with AI-driven learning tools
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
