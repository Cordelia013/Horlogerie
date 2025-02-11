import React, { useState, useRef } from "react";
import Menu from "../components/Menu";

const HeroSection: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(true); // Contrôle de la lecture de la vidéo
  const [isLoading, setIsLoading] = useState(true); // Contrôle du chargement de la vidéo
  const videoRef = useRef<HTMLVideoElement | null>(null); // Référence à la vidéo

  const handleLoadedData = () => {
    setIsLoading(false); // La vidéo est chargée
  };

  const toggleVideo = (e: React.MouseEvent<HTMLVideoElement>) => {
    const video = e.currentTarget as HTMLVideoElement;
    if (isPlaying) {
      video.pause();
    } else {
      video.play();
    }
    setIsPlaying(!isPlaying); // Inverse l'état
  };

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying); // Inverse l'état
    }
  };

  return (
    <div className="relative w-full h-screen flex items-end justify-center bg-cover bg-center">
      {/* Affiche un indicateur tant que la vidéo est en cours de chargement */}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center z-20 bg-white bg-opacity-75">
          <span>Chargement...</span>
        </div>
      )}

      <video
        ref={videoRef}
        style={{ zIndex: 0 }}
        className="absolute inset-0 w-full h-full object-cover"
        src="/assets/HUBLOT-BIG_BANG_UNICO_NESPRESSO_ORIGIN.mp4"
        onClick={toggleVideo}
        onLoadedData={handleLoadedData} // Utilise isLoading en mettant à jour l'état
        muted
        playsInline
        autoPlay
      />

      <button
        onClick={togglePlayPause}
        className="absolute bottom-4 left-4 bg-white bg-opacity-80 text-secondary p-2 rounded z-10 shadow-md"
      >
        {isPlaying ? "Mettre en pause" : "Jouer"}
      </button>

      <div className="container mx-auto flex items-center justify-center">
        <div className="absolute inset-0 pointer-events-none">
          <div className="border border-black mx-[135px] mt-[136px] mb-[137px] w-[calc(100%-270px)] h-[calc(100%-273px)]"></div>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default HeroSection;
