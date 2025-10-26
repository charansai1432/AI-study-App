// import logo from './logo.svg';
import './App.css';
import UploadCard from './components/UploadCard';
function App() {
  return (
    
    <div className="App">
      <div className="min-h-screen bg-gradient-to-br from-blue-100 to-indigo-200 flex justify-center items-center">
      <UploadCard />
    </div>
      {/* <header className="App-header"> */}
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      {/* </header> */}
    </div>
  );
}

export default App;
