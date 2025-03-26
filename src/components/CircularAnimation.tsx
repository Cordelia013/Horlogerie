import { motion } from "framer-motion";

const CircularAnimation = () => {
  const numbers = Array.from({ length: 6 }, (_, i) =>
    i.toString().padStart(1, "0")
  ); // Chiffres de 00 à 11

  // 🔧 Personnalisation facile
  const config = {
    radius: window.innerHeight * 0.4, // Rayon du cercle des chiffres
    spacing: 30, // Distance entre le point et le chiffre
    textOffset: 5, // Décalage supplémentaire des chiffres
    pointSize: 6, // Taille des points blancs
    repeatDelay:12,
    rotationSpeed: 60, // 60 secondes = 1 minute
  };
// Calcul des dimensions et du centre du cercle
const circleTop = -5; // offset top du cercle
const circleLeft = 1; // offset left du cercle
const circleDiameter = window.innerHeight * 0.8; // 80vh en pixels

const circleCenterY = circleTop + circleDiameter / 2;
const circleCenterX = circleLeft + circleDiameter / 2;
 
  return (
    <div className="flex justify-start items-center w-screnn  h-screen mx-auto ">
   {/* Cercle central */}
   <div
        className="absolute   w-[545px]  h-[650px]   top-[650px]  -left-44 border border-secondary
       rounded-full border-dashed" 
      
      > 

      {/* Conteneur tournant */}
      <motion.div
  animate={{
    rotate: [0, 120],
  }}
  transition={{
    repeat: Infinity,
    repeatDelay: config.repeatDelay,
    duration: config.rotationSpeed,
    ease: "linear",
  }}
  className="absolute z-10"
  style={{
    transformOrigin: "center",
    top: `${circleCenterY}px`,
    left: `${circleCenterX}px`,
  }}
>
        {numbers.map((number, index) => {
          const angle = 360 * (index / numbers.length) - 90; // Positionne "00" en haut
          const radian = (angle * Math.PI) / 180;

          // 📍 Position des éléments
          const dotPos = {
            x: Math.cos(radian) * config.radius,
            y: Math.sin(radian) * config.radius,
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
              {/* 🟢 Point blanc */}
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  width: `${config.pointSize}px`,
                  height: `${config.pointSize}px`,
                  backgroundColor: "white",
                  borderRadius: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              />

              {/* 🔢 Chiffre */}
              <div
                className="text-secondary font-normal text-8xl font-Monument"
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
