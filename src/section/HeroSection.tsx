import React, { useState, useRef } from "react";
import Menu from "../components/Menu";
import { FaPause, FaPlay, FaVolumeMute, FaVolumeUp } from "react-icons/fa"; 

const HeroSection: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(true); // Contrôle de la lecture de la vidéo
  const [isLoading, setIsLoading] = useState(true); // Contrôle du chargement de la vidéo
  const [isMuted, setIsMuted] = useState(true); // Contrôle du son de la vidéo (muet ou non)
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handleLoadedData = () => {
    setIsLoading(false); // La vidéo est chargée
  };

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying); // Inverse l'état de lecture
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      // Bascule la propriété muted de la vidéo
      videoRef.current.muted = !videoRef.current.muted;
    }
    setIsMuted(!isMuted); // Met à jour l'état
  };

  return (
    <div
      id="hero-section"
      className="relative w-screen h-screen flex items-end justify-center bg-cover bg-center -z-40"
    >
      {/* Indicateur de chargement */}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center z-20 bg-black bg-opacity-75">
          <span className="text-white">Chargement...</span>
        </div>
      )}

      <video
        ref={videoRef}
        style={{ zIndex: 0 }}
        className="absolute inset-0 w-full h-full object-cover"
        src="/assets/HUBLOT-BIG_BANG_UNICO_NESPRESSO_ORIGIN.mp4"
        onLoadedData={handleLoadedData}
        muted={isMuted} // Contrôle du son selon l'état
        playsInline
        autoPlay
        width="100vw"
       
      />
      {/* Bouton de lecture/pause en bas à gauche */}
      <button
        onClick={togglePlayPause}
        className="absolute bottom-4 left-4 bg-white bg-opacity-80 text-secondary p-2 rounded z-10 shadow-md md:p-4 md:text-lg"
      >
        {isPlaying ? <FaPause size={20} /> : <FaPlay size={20} />}
      </button>

      {/* Bouton de contrôle du son en bas à droite */}
      <button
        onClick={toggleMute}
        className="absolute bottom-4 right-4 bg-white bg-opacity-80 text-secondary p-2 rounded z-10 shadow-md md:p-4 md:text-lg"
      >
        {isMuted ? <FaVolumeMute size={20} /> : <FaVolumeUp size={20} />}
      </button>

      <div className="container mx-auto flex items-center justify-center">
        <div className="absolute inset-0 pointer-events-none">
          <div className="border border-black mx-[8.375vw] mt-[8.5vw] mb-[8.5625vw] w-[calc(100vw-17vw)] h-[calc(100vh-18vw)]"></div>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default HeroSection;
