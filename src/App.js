import logo from "./logo.svg";
import "./App.css";
import ReactPlayer from "react-player";
import { HashRouter, Link, Routes, Route } from "react-router-dom";
import AuthComponent from "./AuthComponent";
import { Amplify } from "aws-amplify";
import config from "./aws-exports";

Amplify.configure(config);

const streamURL =
  "https://a74af375e82d.us-east-1.playback.live-video.net/api/video/v1/us-east-1.568164034746.channel.eWbeqPyE2mvM.m3u8";

function Router() {
  return (
    <HashRouter>
      <div>
        <nav>
          <Link to="/">Stream</Link>
          <Link to="/auth">Profile</Link>
        </nav>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/auth" element={<AuthComponent />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div style={{ width: 900, height: 900 }}>
          <ReactPlayer url={streamURL} width="100%" height="100%" playing />
        </div>
      </header>
    </div>
  );
}

export default App;
