import './App.css';
import UploadCard from './components/UploadCard';

function App() {
  return (
    <div className="App min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Animated wave lines at top */}
      <div className="absolute top-0 left-0 w-full h-32">
        <svg
          className="absolute top-0 overflow-hidden"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,60 C150,100 350,0 600,60 C850,120 1050,20 1200,60 L1200,120 L0,120 Z"
            fill="rgba(255,255,255,0.1)"
            className="animate-pulse"
          >
            <animate
              attributeName="d"
              dur="10s"
              repeatCount="indefinite"
              values="M0,60 C150,100 350,0 600,60 C850,120 1050,20 1200,60 L1200,120 L0,120 Z;
                      M0,80 C150,40 350,120 600,80 C850,40 1050,100 1200,80 L1200,120 L0,120 Z;
                      M0,60 C150,100 350,0 600,60 C850,120 1050,20 1200,60 L1200,120 L0,120 Z"
            />
          </path>
        </svg>
      </div>
      <div className="flex justify-center items-start min-h-screen relative z-10">
        <UploadCard />
      </div>
    </div>
  );
}

export default App;
