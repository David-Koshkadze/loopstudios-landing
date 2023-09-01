export default function Header() {
  return (
    <header className="h-screen bg-hero-desktop bg-cover bg-no-repeat text-white pb-10">

      <div className="max-w-[1440px] mx-auto">

        <nav className="flex justify-between items-center border py-4">
          <h1 className="font-semibold text-xl">loopstudios</h1>
          <div className="flex gap-4 text-sm">
            <a href="#about">About</a>
            <a href="#careers">Careers</a>
            <a href="#events">Events</a>
            <a href="#products">Products</a>
            <a href="#support">Support</a>
          </div>
        </nav>

        <div className="border w-full items-center">
          <div className="border-2 border-white p-8 w-[600px]">
            <h1 className="text-7xl uppercase ">
              immersive experiences that deliver
            </h1>
          </div>
        </div>
      </div>
    </header>
  );
}
