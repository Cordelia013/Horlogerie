function FooterSection() {
  return (
    <div className="w-full h-[50vh] relative flex flex-col text-gray font-Akkordeon  z-20">
      <div className="flex justify-between flex-row mx-[1vw] pt-[2.5vh] mt-[15vh]  font-montreal bottom-0">
        <div className="flex text-[1.5vw] gap-[2vw]">
          <div className="">ACCUEIL </div>
          <div className="">PRESENTATION </div>
        </div>

        <div className="flex text-[1.5vw] gap-[2vw]">
          <div className="">PRODUCT</div>
          <div className="">TECHNICAL</div>
        </div>
      </div>

      <div className="flex justify-between mx-[1vw] -mt-[1vh]  text-[9.5vw]">
        <div className="">NESPRESSO</div>
        <div className="">x</div>
        <div className="">HUBLOT</div>
      </div>
    </div>


  );
}

export default FooterSection