import logo from './logo.svg';
import './App.css';
import ReactPlayer from 'react-player';
const streamURL = "https://a74af375e82d.us-east-1.playback.live-video.net/api/video/v1/us-east-1.568164034746.channel.eWbeqPyE2mvM.m3u8"


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div style = {{width: 900}}>
       <ReactPlayer
          url = {streamURL}
          width = "100%"
          height = "100%"
          playing
       />
       </div>
      </header>
    </div>
  );
}

export default App;
