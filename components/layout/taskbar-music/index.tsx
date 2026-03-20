"use client";

import { useEffect, useRef } from "react";
import { AudioWaveform } from "react-music-waveform";

const TaskbarMusic = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const audio = wrapperRef.current?.querySelector("audio");

    if (audio) {
      audio.loop = true;
    }
  }, []);

  return (
    <div ref={wrapperRef} className="fixed bottom-12 left-2">
      <AudioWaveform
        src="/musics/chuc-ngu-ngon-instrumental.mp3"
        style="solmara"
        theme="light"
        height={40}
        width={80}
        showControls={true}
        showTimestamp={false}
        showSpeedControl={false}
      />
    </div>
  );
};

export default TaskbarMusic;