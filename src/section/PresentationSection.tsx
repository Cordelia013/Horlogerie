import BlurBackground from "../components/BlurBackground";

function PresentationSection() {
  return (
    <div
      className="relative w-screen h-screen bg-primary text-gray font-Akkordeon font-medium tracking-[0.5vw] text-[10vw] xl:text-[14vw] z-20 xl:z-30 pb-[10vh]"
      id="presentation-section"
    >
      <div className="flex justify-end mr-[7vw] xl:relative xl:top-[1.5vh] tracking-[0.5vw]">NEW</div>
      <div className="ml-[0.2vw] xl:ml-[1vw] xl:relative xl:bottom-[1vh]">COLLABORATION</div>
      <div className="flex justify-center items-center relative bottom-[50vh]">
        <BlurBackground />
        <img
          src="/assets/watch 1.png"
          alt="whatch"
          className="h-screen xl:relative xl:bottom-[25vh]"
        />
      </div>

      <div className="flex justify-end absolute top-[40vh] xl:top-[50vh] xl:mr-[10vw] right-0">
        NESPRESSO
      </div>
      <div className="flex justify-start absolute top-[60vh] xl:top-[70vh] left-0 xl:left-[2vw] ml-[7vw]">
        HUBLOT
      </div>
    </div>
  );
}

export default PresentationSection;
