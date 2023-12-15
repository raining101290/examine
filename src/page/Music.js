import React, { useState, useEffect } from "react";
import Switch from "react-switch";
import { Link } from 'react-router-dom';

const useAudio  = () => {
    const url = 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3';
  const [audio] = useState(new Audio(url));
  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
      playing ? audio.play() : audio.pause();
    },
    [playing]
  );

  useEffect(() => {
    audio.addEventListener('ended', () => setPlaying(false));
    return () => {
      audio.removeEventListener('ended', () => setPlaying(false));
    };
  }, []);

  return [playing, toggle];
};

const Music = ({ url }) => {
  const [playing, toggle] = useAudio(url);
  const [checked, setChecked] = useState(false);
  const [count, setCount] = useState(0);

  const handleChange = (checked) => {
    if(count == '0')
    {
     // alert('0')
      setChecked(true)
      setCount(1);
      toggle()
    }
    else
    {
      setCount(0);
      setChecked(false)
      toggle();
     // alert('1')
    }
   // alert(checked)
  }
  

  return (
    <div>
     {/*  <button onClick={toggle}>{playing ? "Pause" : "Play"}</button> */}
      <Switch onChange={handleChange} checked={checked} />
      <Link to="/Login">Login</Link>
    </div>
  );
};

export default Music;
