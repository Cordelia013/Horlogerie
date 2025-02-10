import { useState } from "react";
import { CSSProperties } from "react"; // ✅ Import nécessaire

const BlurBackground = () => {
  const [isBlurred] = useState(false);

  const blurStyle: CSSProperties = { // ✅ Type ajouté
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backdropFilter: "blur(5px)",
    WebkitBackdropFilter: "blur(5px)",
    background: "rgba(62, 71, 51, 0.5)",
    zIndex: 9999,
    opacity: isBlurred ? 1 : 0,
    visibility: isBlurred ? "visible" : "hidden",
    transition: "opacity 0.3s ease-in-out, visibility 0.3s ease-in-out",
  };



  return (
    <>
      <div style={blurStyle}>o</div>
    
    </>
  );
};

export default BlurBackground;
