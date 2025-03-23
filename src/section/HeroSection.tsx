import React, { useState, useRef } from "react";
import Menu from "../components/Menu";
import { FaVolumeMute, FaVolumeUp } from "react-icons/fa"; // Assurez-vous d'avoir installé react-icons

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
      className="relative w-screen h-screen flex items-end justify-center bg-cover bg-center"
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
      />

      {/* Bouton de lecture/pause en bas à gauche */}
      <button
        onClick={togglePlayPause}
        className="absolute bottom-4 left-4 bg-white bg-opacity-80 text-secondary p-2 rounded z-10 shadow-md"
      >
        {isPlaying ? "Mettre en pause" : "Jouer"}
      </button>

      {/* Bouton de contrôle du son en bas à droite */}
      <button
        onClick={toggleMute}
        className="absolute bottom-4 right-4 bg-white bg-opacity-80 text-secondary p-2 rounded z-10 shadow-md"
      >
        {isMuted ? <FaVolumeMute size={20} /> : <FaVolumeUp size={20} />}
      </button>

      <div className="container mx-auto flex items-center justify-center">
        <div className="absolute inset-0 pointer-events-none">
          <div className="border border-black mx-[10vw] mt-[10vh] mb-[10vh] w-[calc(100%-20vw)] h-[calc(100%-20vh)]"></div>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default HeroSection;
