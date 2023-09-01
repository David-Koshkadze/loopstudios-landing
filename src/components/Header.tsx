export default function Header() {
  return (
    <header className="bg-green-100 bg-hero-desktop">
      <nav className="flex justify-between items-center border py-4">
        <h1>loopstudios</h1>
        <div className="flex gap-4">
          <a href="#about">About</a>
          <a href="#careers">Careers</a>
          <a href="#events">Events</a>
          <a href="#products">Products</a>
          <a href="#support">Support</a>
        </div>
      </nav>

      <div>
        <h1>immersive experiences that deliver</h1>
      </div>
    </header>
  )
}
