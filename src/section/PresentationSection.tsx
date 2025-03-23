import BlurBackground from "../components/BlurBackground";

function PresentationSection() {
  return (
    <div
      className="relative w-screen h-screen bg-primary text-gray font-Akkordeon font-medium tracking-[10px] text-[200px] xl:text-[270px] z-20 xl:z-30 pb-[10%]"
      id="presentation-section"
    >
      <div className="flex justify-end mr-[135px] xl:relative xl:top-14 tracking-[10px]">NEW</div>
      <div className="ml-3 xl:ml-20 xl:relative xl:bottom-12">COLLABORATION</div>
      <div className="  flex justify-center items-center  relative bottom-96 ">
        <BlurBackground />
        <img
          src="/assets/watch 1.png"
          alt="whatch"
          className="h-screen  xl:relative xl:bottom-[250px]"
        />
      </div>

      <div className="flex justify-end absolute top-[28rem] xl:top-[38rem]  xl:mr-[20rem] right-0">
        NESPRESSO
      </div>
      <div className="flex justify-start absolute top-[40rem] xl:top-[55rem] left-0 xl:left-28 ml-[131px]">
        HUBLOT
      </div>
    </div>
  );
}

export default PresentationSection;
