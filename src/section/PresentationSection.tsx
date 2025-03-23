import BlurBackground from "../components/BlurBackground";

function PresentationSection() {
  return (
    <div
      className="relative w-screen  text-gray font-Akkordeon font-medium tracking-[10px] text-[10vw]  z-20 xl:z-30 pb-[10%]"
      id="presentation-section"
    >
      <div className="flex justify-end mr-[5vw]  relative top-10 tracking-[10px] text-[15vw] ">NEW</div>
      <div className="relative bottom-[19vh] text-[15vw] ">COLLABORATION</div>
      <div className="  flex justify-center items-center  relative bottom-96 ">
        <BlurBackground />
        <img
          src="/assets/watch 1.png"
          alt="whatch"
          className="relative bottom-[35vh] w-[40vw]"
        />
      </div>

      <div className="flex justify-end absolute  top-[75vh] text-[15vw] right-[5vw] ">
        NESPRESSO
      </div>
      <div className="flex justify-start absolute top-[100vh] text-[15vw] left-[5vw] ">
        HUBLOT
      </div>
    </div>
  );
}

export default PresentationSection;
