import BlurBackground from "../components/BlurBackground";
import CircularAnimation from "../components/CircularAnimation";

function PresentationSection() {
  return (
    <>
    <div
      className="relative w-screen  text-gray font-Akkordeon font-medium tracking-[10px] text-[10vw]    "
      id="presentation-section"
    >
      <div className="flex justify-end mr-[5vw]  relative top-10 tracking-[10px] text-[15vw] ">NEW</div>
      <div className="relative bottom-[19vh] text-[15vw] ">COLLABORATION</div>
      <div className="  flex justify-center items-center  relative bottom-96 ">
   
        <img
          src="/assets/watch 1.png"
          alt="whatch"
          className="relative bottom-[25vh] w-[40vw]"
        />
    
      </div>

      <div className="flex justify-end absolute  top-[75vh] text-[15vw] right-[5vw] ">
        NESPRESSO
      </div>
      <div className="flex justify-start absolute top-[100vh] text-[15vw] left-[5vw] ">
        HUBLOT
      </div>
        <BlurBackground />   
     
    </div>
    <div
      className="relative w-full h-full  text-gray font-Akkordeon font-medium tracking-[10px] text-[200px] -z-99 "
      id="product-section"
    >
      <CircularAnimation />
       <div className="w-full flex justify-center item-center flex-col relative left-[50%] ">
        
        <h3 className="text-[15vh]  ">Header</h3>
        <p className="text-base w-5/12  font-montrea ">
          Lorem ipsum dolor sit amet consectetur. Mauris ipsum ut velit egestas
          consequat aenean. Vitae neque ipsum mi eu. Maecenas quis dignissim
          diam hendrerit. Erat nisi malesuada et pellentesque. Dui elit pharetra
          accumsan erat condimentum dignissim amet intege
        </p>
        <img
          src="/assets/clock-2.png"
          alt="image clock"
          className=" w-[30vw] h-[30vh] absolute left-96 top-[35vh] pt-8 "
        />
      </div> 
    </div>
          
           </>
  );
}

export default PresentationSection;
