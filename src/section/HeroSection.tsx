import Menu from "../components/Menu";
import backgroundImage from "/assets/img-header.png"; // Remplace par le bon chemin d'import



export default function HeroSection() {
    return (
      <>
        <div
          className="relative w-full h-screen flex items-end justify-center"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="container mx-auto flex items-center justify-center">
            {" "}
            {/* Ajout de la classe container */}
            <div className="absolute inset-0 ">
              <div className="border border-black mx-[135px] mt-[136px] mb-[137px] w-[calc(100%-270px)] h-[calc(100%-273px)]"></div>
            </div>
            <Menu />
          </div>
        </div>
      </>
    );
}
