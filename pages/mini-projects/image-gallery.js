import Link from "next/link";

export default function Home() {
  return (
    // Global Container
    <div className="bg-cyan-50 flex min-h-screen items-center justify-center">
      <div className="m-3 space-y-10 rounded-3xl bg-white p-6 shadow-2xl md:p-40 ">
        {/* Menu Container */}
        <div className="flex flex-col items-center justify-center space-y-3 md:mb-24 md:flex-row md:justify-end md:space-x-8 md:space-y-0">
          {/* Menu Items */}
          <div className="group">
            <Link href="#">Vector</Link>
            <div className="mt-2 border-b-2 border-black opacity-0 duration-150 group-hover:opacity-100"></div>
          </div>
          <div className="group">
            <Link href="/">Illustrations</Link>
            <div className="mt-2 border-b-2 border-black opacity-0 duration-150 group-hover:opacity-100"></div>
          </div>
          <div className="group">
            <Link href="#">Images</Link>
            <div className="mt-2 border-b-2 border-black opacity-0 duration-150 group-hover:opacity-100"></div>
          </div>
          <div className="group">
            <Link href="#">Icons</Link>
            <div className="mt-2 border-b-2 border-black opacity-0 duration-150 group-hover:opacity-100"></div>
          </div>
        </div>

        {/* Search Container */}
        <div className="flex flex-col justify-between space-y-5 md:flex-row md:space-y-0">
          {/* Input and SVG Container */}
          <div className="flex justify-between border-b">
            <input
              className="ml-3 pb-3 placeholder:font-thin focus:outline-none"
              type="text"
              placeholder="Search"
            />
            <button className="pb-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 text-gray-300 duration-200 hover:scale-110"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <circle cx="10" cy="10" r="7" />
                <line x1="21" y1="21" x2="15" y2="15" />
              </svg>
            </button>
          </div>
          {/* Upload Button */}
          <button className="ml-4 rounded-md border border-black bg-black px-14 py-3 text-lg font-normal text-white shadow-2xl duration-200 hover:bg-white hover:text-black sm:ml-0 md:ml-4">
            Upload
          </button>
        </div>

        {/* Gallery Container */}

        <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {/* Image 1 */}
          <div className="group relative">
            <img
              src="/mini-projects-pictures/image1.jpg"
              alt=""
              className="w-72"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-40 p-2 px-4 text-white opacity-0 duration-500 group-hover:opacity-100">
              <div className="flex w-full justify-between">
                <div className="font-normal">
                  <p className="text-sm">Abstract Painting</p>
                  <p className="text-xs">245 likes - 35 Shares</p>
                </div>
                <div className="flex items-center">
                  <img src="/mini-projects-pictures/bookmark.svg" alt="" />
                </div>
              </div>
            </div>
          </div>

          {/* Image 2 */}
          <div className="group relative">
            <img
              src="/mini-projects-pictures/image2.jpg"
              alt=""
              className="w-72"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-40 p-2 px-4 text-white opacity-0 duration-500 group-hover:opacity-100">
              <div className="flex w-full justify-between">
                <div className="font-normal">
                  <p className="text-sm">Abstract Painting</p>
                  <p className="text-xs">245 likes - 35 Shares</p>
                </div>
                <div className="flex items-center">
                  <img src="/mini-projects-pictures/bookmark.svg" alt="" />
                </div>
              </div>
            </div>
          </div>

          {/* Image 3 */}
          <div className="group relative">
            <img
              src="/mini-projects-pictures/image3.jpg"
              alt=""
              className="w-72"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-40 p-2 px-4 text-white opacity-0 duration-500 group-hover:opacity-100">
              <div className="flex w-full justify-between">
                <div className="font-normal">
                  <p className="text-sm">Abstract Painting</p>
                  <p className="text-xs">245 likes - 35 Shares</p>
                </div>
                <div className="flex items-center">
                  <img src="/mini-projects-pictures/bookmark.svg" alt="" />
                </div>
              </div>
            </div>
          </div>

          {/* Image 4 */}
          <div className="group relative">
            <img
              src="/mini-projects-pictures/image4.jpg"
              alt=""
              className="w-72"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-40 p-2 px-4 text-white opacity-0 duration-500 group-hover:opacity-100">
              <div className="flex w-full justify-between">
                <div className="font-normal">
                  <p className="text-sm">Abstract Painting</p>
                  <p className="text-xs">245 likes - 35 Shares</p>
                </div>
                <div className="flex items-center">
                  <img src="/mini-projects-pictures/bookmark.svg" alt="" />
                </div>
              </div>
            </div>
          </div>

          {/* Image 5 */}
          <div className="group relative">
            <img
              src="/mini-projects-pictures/image5.jpg"
              alt=""
              className="w-72"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-40 p-2 px-4 text-white opacity-0 duration-500 group-hover:opacity-100">
              <div className="flex w-full justify-between">
                <div className="font-normal">
                  <p className="text-sm">Abstract Painting</p>
                  <p className="text-xs">245 likes - 35 Shares</p>
                </div>
                <div className="flex items-center">
                  <img src="/mini-projects-pictures/bookmark.svg" alt="" />
                </div>
              </div>
            </div>
          </div>

          {/* Image 6 */}
          <div className="group relative">
            <img
              src="/mini-projects-pictures/image6.jpg"
              alt=""
              className="w-72"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-40 p-2 px-4 text-white opacity-0 duration-500 group-hover:opacity-100">
              <div className="flex w-full justify-between">
                <div className="font-normal">
                  <p className="text-sm">Abstract Painting</p>
                  <p className="text-xs">245 likes - 35 Shares</p>
                </div>
                <div className="flex items-center">
                  <img src="/mini-projects-pictures/bookmark.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
