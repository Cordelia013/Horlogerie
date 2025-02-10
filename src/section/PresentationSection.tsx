import BlurBackground from "../components/BlurBackground";


function PresentationSection() {
  return (
    <div className="relative w-full h-screen bg-primary text-gray font-Akkordeon font-medium tracking-[10px] text-[200px] z-20 ">
      <div className="flex justify-end mr-[135px] tracking-[10px]">NEW</div>
      <div className="ml-3">COLLABORATION</div>
      <div className="  flex justify-center items-center  relative bottom-96 ">
        <BlurBackground />
        <img
          src="/assets/watch 1.png"
          alt="whatch"
          className="h-[700px] "
        />
      </div>

      <div className="flex justify-end absolute top-[28rem] right-0">
        NESPRESSO
      </div>
      <div className="flex justify-start absolute top-[40rem] left-0 ml-[131px]">
        HUBLOT
      </div>
    </div>
  );
}

export default PresentationSection