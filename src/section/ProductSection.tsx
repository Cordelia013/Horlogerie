import CircularAnimation from "../components/CircularAnimation";

function ProductSection() {
  return (
    <div
      className="relative w-screen h-[150vh] text-gray font-Akkordeon font-medium tracking-[10px] text-[200px]  "
      id="product-section"
    >
      <CircularAnimation />
      <div className="w-full flex justify-center item-center flex-col relative left-[50%] ">
        <h3 className="text-[15vh]  ">Header</h3>
        <p className="text-base w-5/12 xl:w-4/12 font-montrea ">
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
  );
}

export default ProductSection;
