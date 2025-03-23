import { useState } from "react";
import { CSSProperties } from "react"; // Import nécessaire

const BlurBackground = () => {
  const [isBlurred] = useState(true);

  const blurStyle: CSSProperties = {
    position: "absolute",
    top: window.innerWidth > 1280 ? '40%' : '50%' ,
    left: "50%",
    // top: "40%", 
    // width: "50vw",
    // height: "50vh",
    transform: "translate(-50%, -50%)",
    // backdropFilter: "blur(60px)",
    WebkitBackdropFilter: "blur(20px)",
    background:
      "radial-gradient(circle, rgba(62, 71, 51, 0.6) 0%, rgba(62, 71, 51, 0) 80%)",
    zIndex: -20,
    opacity: isBlurred ? 0.7 : 0,
    visibility: isBlurred ? "visible" : "hidden",
    transition: "opacity 0.3s ease-in-out, visibility 0.3s ease-in-out",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <>
      <div style={blurStyle}>
        <div data-svg-wrapper>
          <svg
            width="1059"
            height="1005"
            viewBox="0 0 1059 1005"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="0.23" filter="url(#filter0_f_4103_2)">
              <path
                d="M317.413 282.668C241.914 345.168 190.852 398.565 196.414 508.668C200.607 591.7 241.914 722.668 317.413 770.168C411.887 829.605 507.641 812.631 616.413 770.168C739.379 722.164 825.414 634.668 852.913 528.668C880.413 422.668 848.019 340.294 772.413 262.168C648.72 134.351 392.913 220.168 317.413 282.668Z"
                fill="url(#paint0_linear_4103_2)"
              />
              <path
                d="M317.413 282.668C241.914 345.168 190.852 398.565 196.414 508.668C200.607 591.7 241.914 722.668 317.413 770.168C411.887 829.605 507.641 812.631 616.413 770.168C739.379 722.164 825.414 634.668 852.913 528.668C880.413 422.668 848.019 340.294 772.413 262.168C648.72 134.351 392.913 220.168 317.413 282.668Z"
                stroke="black"
              />
            </g>
            <defs>
              <filter
                id="filter0_f_4103_2"
                x="0.400009"
                y="0.400299"
                width="1057.8"
                height="1003.84"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="15"
                  result="effect1_foregroundBlur_4103_2"
                />
              </filter>
              <linearGradient
                id="paint0_linear_4103_2"
                x1="529.298"
                y1="196"
                x2="529.298"
                y2="808.642"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#3E4733" />
                <stop offset="0.51" stopColor="#3CA367" />
                <stop offset="1" stopColor="#3E4733" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </>
  );
};

export default BlurBackground;
