import Link from "next/link";
import { useState } from "react";

export default function Loopstudios() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      {/* Hero Section */}

      <section id="hero-loopstudios">
        {/* Hero Container */}

        <div className="container mx-auto max-w-6xl px-6 py-12">
          {/* Menu/Logo Container */}
          <nav className="flex items-center justify-between font-bold text-white">
            {/* Logo */}
            <img src="/loopstudios-images/logo.svg" alt="" />
            {/* Menu */}
            <div className="hidden h-10 font-alata md:flex md:space-x-8">
              <div className="group">
                <Link href="#">About</Link>
                <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
              </div>
              <div className="group">
                <Link href="#">Careers</Link>
                <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
              </div>
              <div className="group">
                <Link href="#">Events</Link>
                <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
              </div>
              <div className="group">
                <Link href="#">Products</Link>
                <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
              </div>
              <div className="group">
                <Link href="#">Support</Link>
                <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
              </div>
            </div>

            {/* Todo -> Hamburger Button */}
            <div className="md:hidden">
              <button
                className={`circle-menu z-40 block shadow shadow-white hover:scale-110 focus:outline-none md:hidden ${
                  menuOpen ? "open" : ""
                }`}
                id="menu-btn"
                type="button"
                onClick={toggleMenu}
              >
                <div className="circle-menu-line"></div>
              </button>
            </div>
          </nav>

          {/* Todo -> Mobile Menu */}

          <div
            id="menu"
            className={`absolute bottom-0 left-0 top-0 ${
              menuOpen ? "flex" : "hidden"
            } min-h-screen w-full flex-col space-y-3 self-end bg-black py-1 pl-12 pt-40 text-lg uppercase text-white`}
          >
            <a href="#" className="hover:text-pink-500">
              About
            </a>
            <a href="#" className="hover:text-pink-500">
              Careers
            </a>
            <a href="#" className="hover:text-pink-500">
              Events
            </a>
            <a href="#" className="hover:text-pink-500">
              Products
            </a>
            <a href="#" className="hover:text-pink-500">
              Support
            </a>
          </div>

          <div className="mb-32 mt-32 max-w-lg border-2 p-4 font-josefin text-4xl uppercase text-white md:m-32 md:mx-0 md:p-10 md:text-6xl">
            IMPRESSIVE EXPERIENCES THAT DELIVER
          </div>
        </div>
      </section>

      {/* Feature Section */}

      <section id="feature">
        <div className="container relative mx-auto my-32 flex max-w-6xl flex-col px-6 text-gray-900 md:flex-row md:px-0">
          {/* Image */}
          <img src="/loopstudios-images/desktop/image-interactive.jpg" alt="" />

          {/* Text Container */}

          <div className="top-48 bg-white pr-0 md:absolute md:right-0 md:py-20 md:pl-20">
            <h2 className="mb-6 mt-10 max-w-lg text-center font-josefin text-4xl uppercase text-gray-900 md:mt-0 md:text-left md:text-5xl">
              THE LEADER IN INTERACTIVE VR
            </h2>
            <p className="max-w-md text-center font-josefin md:text-left">
              Founded in 2011, Loopstudios has been producing world-class
              virtual reality projects for some of the best companies around the
              globe. Our award-winning creations have transformed businesses
              through digital experiences that bind to their brand.
            </p>
          </div>
        </div>
      </section>

      {/* Crations Section */}
      <section id="creations">
        <div className="container mx-auto my-32 max-w-6xl px-6 text-gray-900">
          {/* Crations Header */}
          <div className="mb-20 flex justify-center md:justify-between">
            <h2 className="text-center font-josefin text-4xl uppercase md:text-left md:text-5xl">
              our creations
            </h2>
            <button className="btns-loopstudios hidden md:block">
              see all
            </button>
          </div>

          {/* . Items Container . */}
          <div class="item-container">
            {/* . Item 1 . */}
            <div class="item group">
              {/* . Desktop Image . */}
              <img
                src="/loopstudios-images/desktop/image-deep-earth.jpg"
                alt=""
                class="hidden w-full duration-200 group-hover:scale-110 md:block"
              />
              {/* . Mobile Image . */}
              <img
                src="/loopstudios-images/mobile/image-deep-earth.jpg"
                alt=""
                class="w-full md:hidden"
              />
              {/* . Item Gradient . */}
              <div class="item-gradient"></div>
              {/* . Item Text . */}
              <h5 className="item-text">Deep Earth</h5>
            </div>

            {/* . Item 2 . */}
            <div class="item group">
              {/* . Desktop Image . */}
              <img
                src="/loopstudios-images/desktop/image-night-arcade.jpg"
                alt=""
                class="hidden w-full duration-200 group-hover:scale-110 md:block"
              />
              {/* . Mobile Image . */}
              <img
                src="/loopstudios-images/mobile/image-night-arcade.jpg"
                alt=""
                class="w-full md:hidden"
              />
              {/* . Item Gradient . */}
              <div class="item-gradient"></div>
              {/* . Item Text . */}
              <h5 className="item-text">Night Arcade</h5>
            </div>

            {/* . Item 3 . */}
            <div class="item group">
              {/* . Desktop Image . */}
              <img
                src="/loopstudios-images/desktop/image-soccer-team.jpg"
                alt=""
                class="hidden w-full duration-200 group-hover:scale-110 md:block"
              />
              {/* . Mobile Image . */}
              <img
                src="/loopstudios-images/mobile/image-soccer-team.jpg"
                alt=""
                class="w-full md:hidden"
              />
              {/* . Item Gradient . */}
              <div class="item-gradient"></div>
              {/* . Item Text . */}
              <h5 className="item-text">Soccer Team VR</h5>
            </div>

            {/* . Item 4 . */}
            <div class="item group">
              {/* . Desktop Image . */}
              <img
                src="/loopstudios-images/desktop/image-grid.jpg"
                alt=""
                class="hidden w-full duration-200 group-hover:scale-110 md:block"
              />
              {/* . Mobile Image . */}
              <img
                src="/loopstudios-images/mobile/image-grid.jpg"
                alt=""
                class="w-full md:hidden"
              />
              {/* . Item Gradient . */}
              <div class="item-gradient"></div>
              {/* . Item Text . */}
              <h5 className="item-text">The Grid</h5>
            </div>
          </div>

          {/* . Item Container 2 . */}
          <div class="item-container mt-10">
            {/* . Item 1 . */}
            <div class="item group">
              {/* . Desktop Image . */}
              <img
                src="/loopstudios-images/desktop/image-from-above.jpg"
                alt=""
                class="hidden w-full duration-200 group-hover:scale-110 md:block"
              />
              {/* . Mobile Image . */}
              <img
                src="/loopstudios-images/mobile/image-from-above.jpg"
                alt=""
                class="w-full md:hidden"
              />
              {/* . Item Gradient . */}
              <div class="item-gradient"></div>
              {/* . Item Text . */}
              <h5 className="item-text">From Up Above VR</h5>
            </div>

            {/* . Item 2 . */}
            <div class="item group">
              {/* . Desktop Image . */}
              <img
                src="/loopstudios-images/desktop/image-pocket-borealis.jpg"
                alt=""
                class="hidden w-full duration-200 group-hover:scale-110 md:block"
              />
              {/* . Mobile Image . */}
              <img
                src="/loopstudios-images/mobile/image-pocket-borealis.jpg"
                alt=""
                class="w-full md:hidden"
              />
              {/* . Item Gradient . */}
              <div class="item-gradient"></div>
              {/* . Item Text . */}
              <h5 className="item-text">Pocket Borealis</h5>
            </div>

            {/* . Item 3 . */}
            <div class="item group">
              {/* . Desktop Image . */}
              <img
                src="/loopstudios-images/desktop/image-curiosity.jpg"
                alt=""
                class="hidden w-full duration-200 group-hover:scale-110 md:block"
              />
              {/* . Mobile Image . */}
              <img
                src="/loopstudios-images/mobile/image-curiosity.jpg"
                alt=""
                class="w-full md:hidden"
              />
              {/* . Item Gradient . */}
              <div class="item-gradient"></div>
              {/* . Item Text . */}
              <h5 className="item-text">The Curiosity</h5>
            </div>

            {/* . Item 4 . */}
            <div class="item group">
              {/* . Desktop Image . */}
              <img
                src="/loopstudios-images/desktop/image-fisheye.jpg"
                alt=""
                class="hidden w-full duration-200 group-hover:scale-110 md:block"
              />
              {/* . Mobile Image . */}
              <img
                src="/loopstudios-images/mobile/image-fisheye.jpg"
                alt=""
                class="w-full md:hidden"
              />
              {/* . Item Gradient . */}
              <div class="item-gradient"></div>
              {/* . Item Text . */}
              <h5 className="item-text">Make It Fisheye</h5>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black">
        {/* Footer Container */}
        <div className="container mx-auto max-w-6xl py-10">
          {/* Footer Flex Container */}
          <div className="mb-8 flex flex-col items-center space-y-6 md:flex-row md:items-start md:justify-between md:space-y-0">
            {/* Menu and Logo Container */}
            <div className="itmes-center flex flex-col space-y-8 md:items-start md:space-y-4">
              {/* Logo Container */}
              <div className="h-8">
                <img
                  className="w-44 md:ml-3"
                  src="/loopstudios-images/logo.svg"
                  alt=""
                />
              </div>

              {/* Menu Container */}
              <div className="flex flex-col items-center space-y-4 font-bold text-white md:ml-3 md:flex-row md:space-x-6 md:space-y-0">
                {/* Item 1 */}
                <div className="group h-10">
                  <Link className="" href="#">
                    About
                  </Link>
                  <div className="mx-1 group-hover:border-b group-hover:border-blue-50"></div>
                </div>

                {/* Item 2 */}
                <div className="group h-10">
                  <Link className="" href="#">
                    Careers
                  </Link>
                  <div className="mx-1 group-hover:border-b group-hover:border-blue-50"></div>
                </div>

                {/* Item 3 */}
                <div className="group h-10">
                  <Link className="" href="#">
                    Events
                  </Link>
                  <div className="mx-1 group-hover:border-b group-hover:border-blue-50"></div>
                </div>

                {/* Item 4 */}
                <div className="group h-10">
                  <Link className="" href="#">
                    Products
                  </Link>
                  <div className="mx-1 group-hover:border-b group-hover:border-blue-50"></div>
                </div>

                {/* Item 5 */}
                <div className="group h-10">
                  <Link className="" href="#">
                    Support
                  </Link>
                  <div className="mx-1 group-hover:border-b group-hover:border-blue-50"></div>
                </div>
              </div>
            </div>

            {/* Social and Copy Container */}

            <div className="flex flex-col items-start justify-between space-y-4 text-gray-500">
              {/* Icons Container */}
              <div className="mx-auto flex items-center justify-center space-x-4 md:mx-0 md:justify-end">
                {/* Icon 1 */}
                <div className="group h-8">
                  <Link href="#">
                    <img src="/loopstudios-images/icon-facebook.svg" alt="" />
                  </Link>
                </div>

                {/* Icon 2 */}
                <div className="-2 group h-8">
                  <Link href="#">
                    <img src="/loopstudios-images/icon-twitter.svg" alt="" />
                  </Link>
                </div>

                {/* Icon 3 */}
                <div className="group h-8">
                  <Link href="#">
                    <img src="/loopstudios-images/icon-pinterest.svg" alt="" />
                  </Link>
                </div>

                {/* Icon 4 */}
                <div className="group h-8">
                  <Link href="#">
                    <img src="/loopstudios-images/icon-instagram.svg" alt="" />
                  </Link>
                </div>
              </div>

              {/* Copy Continer */}
              <div className="font-josefin  font-bold">
                &copy; 2022 Loopstudios. All Rights Reserved
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
