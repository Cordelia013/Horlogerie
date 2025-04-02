import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const CircularAnimation = () => {
  const [_dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });
  const containerRef = useRef(null);

  const numbers = Array.from({ length: 9 }, (_, i) =>
    i.toString().padStart(1, "0")
  );

  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // 🔧 Personnalisation facile
  const config = {
    fixedDistance: 10,
    spacing: 30,
    pointSize: 6,
    rotationSpeed: 1,
  };

  // Calcul des dimensions du cercle
  const circleDiameter = 530;
  const circleRadius = circleDiameter / 2;

  // Rayon pour positionner les chiffres
  const totalRadius = circleRadius + config.fixedDistance;
 
  return (
    <div ref={containerRef} className="flex justify-start items-center w-screen h-screen mx-auto">
      {/* Cercle central */}
      <div
        className="absolute w-[550px] h-[550px] top-[205px] -left-64 border border-secondary rounded-full border-dashed"
      > 
        {/* Conteneur tournant */}
        <motion.div
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            repeat: Infinity,
            duration: 60,
            ease: (t) => {
              const step = Math.floor(t * 60) / 60;
              return step + Math.sin(step * Math.PI * 2) * 0.005;
            },
            times: [0, 1],
            repeatType: "loop",
          }}
          className="absolute z-10"
          style={{
            transformOrigin: "center",
            width: "100%",
            height: "100%",
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
                    top: "50%",
                    left: "50%",
                    width: `${config.pointSize}px`,
                    height: `${config.pointSize}px`,
                    backgroundColor: "white",
                    borderRadius: "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                />

                {/* Chiffre */}
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
