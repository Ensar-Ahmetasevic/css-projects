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
          <div className="mx-auto mb-20 flex max-w-full flex-col items-center justify-center py-5 font-bold text-gray-800">
            <h2 className="font-josefin text-4xl uppercase md:text-left md:text-5xl">
              Tailwind CSS Projects
            </h2>
          </div>

          {/* . Items Container . */}
          <div className="my-10 flex w-full flex-col justify-between space-y-6 text-2xl uppercase text-white md:flex-row md:space-x-8 md:space-y-0">
            {/* . Item 1 . */}
            <Link
              className="group relative overflow-hidden rounded-lg border-x-8 border-gray-500 md:w-1/2"
              href="/shortly"
            >
              {/* . Desktop Image . */}
              <img
                src="/home-page/shortly.png"
                alt=""
                className="h-200 w-200 duration-300 group-hover:scale-110 md:block"
              />

              {/* . Item Gradient . */}
              <div className="item-gradient"></div>
              <h5 className="item-text">Shortly</h5>
            </Link>

            {/* . Item 2 . */}
            <Link
              className="group relative overflow-hidden rounded-lg border-x-8 border-gray-500 md:w-1/2"
              href="https://book-mark-six.vercel.app/"
            >
              {/* . Desktop Image . */}
              <img
                src="/home-page/bookmark.png"
                alt=""
                className="h-200 w-200 duration-300 group-hover:scale-110 md:block"
              />

              {/* . Item Gradient . */}
              <div className="item-gradient"></div>
              <h5 className="item-text">Bookmark</h5>
            </Link>
          </div>

          {/* . Items Container . */}
          <div className="my-10 flex w-full flex-col justify-between space-y-6  text-2xl uppercase text-white md:flex-row md:space-x-8 md:space-y-0">
            {/* . Item 3 . */}
            <Link
              className="group relative overflow-hidden rounded-lg border-x-8 border-gray-500 md:w-1/2"
              href="https://fylo-three-phi.vercel.app/"
            >
              {/* . Desktop Image . */}
              <img
                src="/home-page/fylo.png"
                alt=""
                className="h-200 w-200 duration-300 group-hover:scale-110 md:block"
              />

              {/* . Item Gradient . */}
              <div className="item-gradient"></div>
              {/* . Item Text . */}
              <h5 className="item-text">Flyo</h5>
            </Link>

            {/* . Item 4 . */}
            <Link
              className="group relative overflow-hidden rounded-lg border-x-8 border-gray-500 md:w-1/2"
              href="/clipboard"
            >
              {/* . Desktop Image . */}
              <img
                src="/home-page/clipboard.png"
                alt=""
                className="h-200 w-200 duration-300 group-hover:scale-110 md:block"
              />

              {/* . Item Gradient . */}
              <div className="item-gradient"></div>
              {/* . Item Text . */}
              <h5 className="item-text">Clipboard</h5>
            </Link>
          </div>

          {/* . Items Container . */}
          <div className="my-10 flex w-full flex-col justify-between space-y-6  text-2xl uppercase text-white md:flex-row md:space-x-8 md:space-y-0">
            {/* . Item 2 . */}
            <Link
              className="group relative overflow-hidden rounded-lg border-x-8 border-gray-500 md:w-1/2"
              href="/loopstudios"
            >
              {/* . Desktop Image . */}
              <img
                src="/home-page/loopstudios.png"
                alt=""
                className="h-200 w-200 duration-300 group-hover:scale-110 md:block"
              />

              {/* . Item Gradient . */}
              <div className="item-gradient"></div>
              {/* . Item Text . */}
              <h5 className="item-text">Deep Earth</h5>
            </Link>

            {/* . Item 5 . */}
            <Link
              className="group relative overflow-hidden rounded-lg border-x-8 border-gray-500 md:w-1/2"
              href="/mini-projects"
            >
              {/* . Desktop Image . */}
              <img
                src="/home-page/mini-projects/mini-projects.png"
                alt=""
                className="h-200 w-200 duration-300 group-hover:scale-110 md:block"
              />

              {/* . Item Gradient . */}
              <div className="item-gradient"></div>
              {/* . Item Text . */}
              <h5 className="item-text">Mini Projects</h5>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
