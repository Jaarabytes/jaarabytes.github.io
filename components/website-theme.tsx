import { useState, useRef } from 'react';
import { FaMusic } from "react-icons/fa6";
const PlayButton: React.FC = () => {
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    if (playing) {
      audioRef.current?.pause();
    } else {
      audioRef.current?.play();
    }
    setPlaying(!playing);
  };

  return (
    <div className="fixed bottom-4 right-4">
      <button
        onClick={togglePlay}
        className="px-6 py-2 bg-blue-500 text-white rounded animate-pulse-slow"
      >
        <FaMusic className="text-3xl" />
        {/* 30 seconds is little, make it 50 seconds or 1 minute */}
        {/* The song is Love me again by John Newman, it's the FIFA 14 Theme song */}
        <p className='py-2'>{playing ? 'Stop!' : 'Play!'}</p>
      </button>
      <audio ref={audioRef} src="/real.mp3" loop />
    </div>
  );
};

export default PlayButton;
