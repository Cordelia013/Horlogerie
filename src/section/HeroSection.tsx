import Menu from "../components/Menu";

export default function HeroSection() {
  return (
    <>
      <div className="relative w-full h-screen flex items-end justify-center bg-cover bg-center">
        <video
          style={{ zIndex: 0 }}
          className="absolute inset-0 w-full h-full object-cover"
          src="/assets/HUBLOT-BIG BANG UNICO NESPRESSO ORIGIN.mp4"
          onClick={(e) => {
            const video = e.target as HTMLVideoElement;
            // eslint-disable-next-line @typescript-eslint/no-unused-expressions
            video.paused ? video.play() : video.pause();
          }}
          muted
          playsInline
        />

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
