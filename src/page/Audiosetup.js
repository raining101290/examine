import { useReactMediaRecorder } from "react-media-recorder";
import React, { useState } from "react";
//https://codesandbox.io/s/y74b09?file=/src/RecordView.js
const Audiosetup = () => {
  const {
    status,
    startRecording,
    stopRecording,
    mediaBlobUrl,
    clearBlobUrl
  } = useReactMediaRecorder({ audio: true });

  const [url, setUrl] = useState(mediaBlobUrl);
  const resetRecording = () => {
    console.log("clicked");
    // setUrl(clearBlobUrl);
    clearBlobUrl();
  };

  return (
    <div>
      <p>{status}</p>
      <button onClick={startRecording}>Start Recording</button>
      <button onClick={stopRecording}>Stop Recording</button>
      <audio src={mediaBlobUrl} controls />
      <button onClick={clearBlobUrl}>Reset Recording</button>

      <h1>helloo</h1>
    </div>
  );
};

export default Audiosetup;
