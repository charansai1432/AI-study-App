import UploadCard from './components/UploadCard';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-cyan-900 relative overflow-hidden flex flex-col">
      <div className="absolute top-0 left-0 w-full h-32 pointer-events-none">
        <svg
          className="absolute top-0 overflow-hidden w-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,60 C150,100 350,0 600,60 C850,120 1050,20 1200,60 L1200,120 L0,120 Z"
            fill="rgba(255,255,255,0.05)"
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

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="flex-1 flex items-center justify-center relative z-10">
        <UploadCard />
      </div>

      <Footer />
    </div>
  );
}

export default App;
