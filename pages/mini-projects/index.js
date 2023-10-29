import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Projects */}

      <section
        className="bg-[url('/clipboard-images/bg-header-desktop.png')] bg-contain bg-no-repeat"
        id="projects"
      >
        <div className="container mx-auto max-w-6xl px-6 pt-20">
          {/* Crations Header */}
          <div className="mb-10 flex flex-col text-left font-bold text-gray-800 md:mb-20">
            <h1 className="font-josefin text-2xl md:text-4xl">Mini Projects</h1>
            <Link className="hover:underline" href="/">
              Home Page
            </Link>
          </div>

          {/* . Items Container 1 . */}
          <div className="my-10 flex w-full flex-col justify-between space-y-6 text-2xl uppercase text-white md:flex-row md:space-x-8 md:space-y-0">
            {/* . Item 1 . */}
            <Link
              className="group relative overflow-hidden rounded-lg border-x-8 border-gray-500 md:w-1/2"
              href="mini-projects/login-modal"
            >
              {/* . Desktop Image . */}
              <img
                src="/home-page/mini-projects/login-modal.png"
                alt=""
                className="h-200 w-200 duration-300 group-hover:scale-110 md:block"
              />

              {/* . Item Gradient . */}
              <div className="item-gradient"></div>
              {/* . Item Text . */}
              <h5 className="item-text">Login Modal</h5>
            </Link>

            {/* . Item 2 . */}
            <Link
              className="group relative overflow-hidden rounded-lg border-x-8 border-gray-500 md:w-1/2"
              href="mini-projects/image-gallery"
            >
              {/* . Desktop Image . */}
              <img
                src="/home-page/mini-projects/image-gallery.png"
                alt=""
                className="h-200 w-200 duration-300 group-hover:scale-110 md:block"
              />

              {/* . Item Gradient . */}
              <div className="item-gradient"></div>
              {/* . Item Text . */}
              <h5 className="item-text">Image Gallery</h5>
            </Link>
          </div>

          {/* . Items Container 2 . */}
          <div className="my-10 flex w-full flex-col justify-between space-y-6  text-2xl uppercase text-white md:flex-row md:space-x-8 md:space-y-0">
            {/* . Item 3 . */}
            <Link
              className="group relative overflow-hidden rounded-lg border-x-8 border-gray-500 md:w-1/2"
              href="/mini-projects/email-subscribe"
            >
              {/* . Desktop Image . */}
              <img
                src="/home-page/mini-projects/email-subscribe.png"
                alt=""
                className="h-200 w-200 duration-300 group-hover:scale-110 md:block"
              />

              {/* . Item Gradient . */}
              <div className="item-gradient"></div>
              {/* . Item Text . */}
              <h5 className="item-text">Email Subscribe</h5>
            </Link>

            {/* . Item 4 . */}
            <Link
              className="group relative overflow-hidden rounded-lg border-x-8 border-gray-500 md:w-1/2"
              href="mini-projects/pricing-cards"
            >
              {/* . Desktop Image . */}
              <img
                src="/home-page/mini-projects/pricing-cards.png"
                alt=""
                className="h-200 w-200 duration-300 group-hover:scale-110 md:block"
              />

              {/* . Item Gradient . */}
              <div className="item-gradient"></div>
              {/* . Item Text . */}
              <h5 className="item-text">Pricing Cards</h5>
            </Link>
          </div>

          {/* . Items Container 3 . */}

          <div className="my-10 flex w-full flex-col justify-between space-y-6  text-2xl uppercase text-white md:flex-row md:space-x-8 md:space-y-0">
            <Link
              className="group relative overflow-hidden rounded-lg border-x-8 border-gray-500 md:w-1/2"
              href="/mini-projects/product-modal"
            >
              {/* . Desktop Image . */}
              <img
                src="/home-page/mini-projects/product-modal.png"
                alt=""
                className="h-200 w-200 duration-300 group-hover:scale-110 md:block"
              />

              {/* . Item Gradient . */}
              <div className="item-gradient"></div>
              {/* . Item Text . */}
              <h5 className="item-text">Product Modal</h5>
            </Link>

            {/* . Item 1 . */}
            <Link
              className="group relative overflow-hidden rounded-lg border-x-8 border-gray-500 md:w-1/2"
              href="/mini-projects/testimonial-grid"
            >
              {/* . Desktop Image . */}
              <img
                src="/home-page/mini-projects/testimonial-grid.png"
                alt=""
                className="h-200 w-200 duration-300 group-hover:scale-110 md:block"
              />

              {/* . Item Gradient . */}
              <div className="item-gradient"></div>
              {/* . Item Text . */}
              <h5 className="item-text">Testemonial Grid</h5>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
