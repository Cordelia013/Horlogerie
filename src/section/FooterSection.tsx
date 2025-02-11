

function FooterSection() {
  return (
    <div className="w-full h-[29em] relative bg-primary flex flex-col text-gray font-Akkordeon  z-20">
      <div className="flex justify-between flex-row mx-4 pt-10 mt-[117px]  font-montreal bottom-0">
        <div className="flex text-base gap-8">
          <div className="">ACCEUIL </div>
          <div className="">PRESENTATION </div>
        </div>

        <div className="flex text-base gap-8">
          <div className="">PRODUCT</div>
          <div className="">TECHNICAL</div>
        </div>
      </div>

      <div className="flex justify-between mx-4 -mt-[1rem]  text-[200px]">
        <div className="">NESPRESSO</div>
        <div className="">x</div>
        <div className="">HUBLOT</div>
      </div>
    </div>
  );
}

export default FooterSection