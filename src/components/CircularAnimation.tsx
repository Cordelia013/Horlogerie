import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const CircularAnimation = () => {
  const containerRef = useRef(null);
  const numbers = Array.from({ length: 8 }, (_, i) =>
    i.toString().padStart(1, "0")
  );

  // Hook personnalisé pour les dimensions de la fenêtre
  const useWindowDimensions = () => {
    const [dimensions, setDimensions] = useState({
      width: window.innerWidth,
      height: window.innerHeight,
    });

    useEffect(() => {
      const handleResize = () => {
        setDimensions({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      };
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);

    return dimensions;
  };

  const { width, height } = useWindowDimensions();
  
  // Calcul des dimensions dynamiques
  const circleSize = Math.min(width * 0.6 , height * 0.8 );
  const circlePosition = {
    top: `${height * 0.15}px`,
    left: `${(width - circleSize) / 2}px`, // Centrer horizontalement
  };

  // Configuration
  const config = {
    fixedDistance: 10,
    spacing: 30,
    pointSize: 6,
  };

  // Calcul des dimensions du cercle
  const circleDiameter = circleSize;
  const circleRadius = circleDiameter / 2;

  // Rayon pour positionner les chiffres
  const totalRadius = circleRadius + config.fixedDistance - 10;
 
  return (
    <div ref={containerRef} className="absolute -left-[50%] -top-[50%] w-screen h-screen mx-auto ">
      {/* Cercle central avec dimensions dynamiques */}
      <div
        className="absolute border border-secondary rounded-full border-dashed"
        style={{
          width: `${circleSize}px`,
          height: `${circleSize}px`,
          top: circlePosition.top,
          left: circlePosition.left,
        }}
      > 
        {/* Conteneur tournant */}
        <motion.div
          animate={{
            rotate: 360
          }}
          transition={{
            repeat: Infinity,
            duration: 60,
            ease: (t) => {
              // Crée 60 pas discrets avec un léger rebond
              const step = Math.floor(t * 60) / 60;
              return step + Math.sin(step * Math.PI * 2) * 0.005;
            },
            repeatType: "loop",
          }}
          className="absolute z-10"
          style={{
            transformOrigin: "center",
            width: "calc(100%)",
            height: "calc(100%)",
            top: 0,
            left: 0,
          }}
        >
          {numbers.map((number, index) => {
            const angle = 360 * (index / numbers.length) - 90;
            const radian = (angle * Math.PI) / 180;

            const dotPos = {
              x: Math.cos(radian) * totalRadius,
              y: Math.sin(radian) * totalRadius,
            };

            return (
              <motion.div
                key={index}
                className="absolute"
                style={{
                  top: `calc(50% + ${dotPos.y}px)`,
                  left: `calc(50% + ${dotPos.x}px)`,
                  transform: `translate(-50%, -50%) rotate(${angle}deg)`,
                }}
              >
                {/* Point blanc */}
                <div
                  style={{
                    position: "absolute",
                    top: "60%",
                    left: "60%",
                    width: `${config.pointSize}px`,
                    height: `${config.pointSize}px`,
                    backgroundColor: "white",
                    borderRadius: "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                />

                {/* Chiffre */}
                <div
                  className="text-secondary font-normal text-7xl font-Monument"
                  style={{
                    position: "absolute",
                    left: `${config.spacing + 5}px`,
                    top: "50%",
                    transform: "translateY(-25%)",
                  }}
                >
                  {number}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default CircularAnimation;
