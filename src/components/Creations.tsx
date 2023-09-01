import WorksCard from "./WorksCard";

export default function Creations() {
  return (
    <section className="h-screen max-w-[1440px] mx-auto">
      <div className="flex justify-between my-20">
        <h1 className="text-5xl uppercase">our creations</h1>
        <a className="uppercase border-2 border-black text-lg px-10 grid place-content-center cursor-pointer hover:text-white hover:bg-black transition">
          <span>see all</span>
        </a>
      </div>

      <div className="grid grid-cols-4">

        <WorksCard
          title="deep earth" 
          imageSrc="/images/desktop/image-deep-earth.jpg"
        />

        <WorksCard
          title="night arcade"
          imageSrc="/images/desktop/image-night-arcade.jpg"
        />

        <WorksCard
          title="night arcade"
          imageSrc="/images/desktop/image-night-arcade.jpg"
        />

        <WorksCard
          title="night arcade"
          imageSrc="/images/desktop/image-night-arcade.jpg"
        />
      </div>
    </section>
  );
}
