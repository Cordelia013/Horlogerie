import CircularAnimation from "../components/CircularAnimation";

function ProductSection() {
  return (
    <div
      className="relative w-screen h-screen xl:pb-60 bg-primary text-gray font-Akkordeon font-medium tracking-[10px] text-[200px] z-20"
      id="product-section"
    >
      <CircularAnimation />
      <div className="w-full flex justify-center item-center flex-col relative -top-96 left-[600px] xl:left-[50%] ">
        <h3 className="text-[96px] xl:text-[150px] ">Header</h3>
        <p className="text-base w-5/12 xl:w-4/12 font-montreal">
          Lorem ipsum dolor sit amet consectetur. Mauris ipsum ut velit egestas
          consequat aenean. Vitae neque ipsum mi eu. Maecenas quis dignissim
          diam hendrerit. Erat nisi malesuada et pellentesque. Dui elit pharetra
          accumsan erat condimentum dignissim amet intege
        </p>
        <img
          src="/assets/clock-2.png"
          alt="image clock"
          className=" w-1/3 xl:w-3/12 absolute left-96 top-96 mt-10"
        />
      </div>
    </div>
  );
}

export default ProductSection;
