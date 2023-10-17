import Link from "next/link";

export default function Home() {
  return (
    // Global Container
    <div className="flex items-center justify-center min-h-screen bg-cyan-50">
      <div className="bg-white p-6 m-3 space-y-10 shadow-2xl rounded-3xl md:p-40 ">
        {/* Menu Container */}
        <div class="flex flex-col items-center justify-center space-y-3 md:flex-row md:space-y-0 md:space-x-8 md:mb-24 md:justify-end">
          {/* Menu Items */}
          <div class="group">
            <Link href="#">Vector</Link>
            <div class="mt-2 duration-150 border-b-2 opacity-0 border-black group-hover:opacity-100"></div>
          </div>
          <div class="group">
            <Link href="/">Illustrations</Link>
            <div class="mt-2 duration-150 border-b-2 opacity-0 border-black group-hover:opacity-100"></div>
          </div>
          <div class="group">
            <Link href="#">Images</Link>
            <div class="mt-2 duration-150 border-b-2 opacity-0 border-black group-hover:opacity-100"></div>
          </div>
          <div class="group">
            <Link href="#">Icons</Link>
            <div class="mt-2 duration-150 border-b-2 opacity-0 border-black group-hover:opacity-100"></div>
          </div>
        </div>

        {/* Search Container */}
        <div className="flex flex-col md:flex-row justify-between space-y-5 md:space-y-0">
          {/* Input and SVG Container */}
          <div className="flex justify-between border-b">
            <input
              className="focus:outline-none ml-3 placeholder:font-thin pb-3"
              type="text"
              placeholder="Search"
            />
            <button className="pb-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-8 text-gray-300 duration-200 hover:scale-110"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <circle cx="10" cy="10" r="7" />
                <line x1="21" y1="21" x2="15" y2="15" />
              </svg>
            </button>
          </div>
          {/* Upload Button */}
          <button className="py-3 px-14 ml-4 md:ml-4 sm:ml-0 text-lg font-normal text-white bg-black border border-black rounded-md shadow-2xl duration-200 hover:bg-white hover:text-black">
            Upload
          </button>
        </div>

        {/* Gallery Container */}

        <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {/* Image 1 */}
          <div className="relative group">
            <img
              src="/mini-projects-pictures/image1.jpg"
              alt=""
              className="w-72"
            />
            <div className="absolute bottom-0 left-0 right-0 p-2 px-4 text-white duration-500 bg-black opacity-0 group-hover:opacity-100 bg-opacity-40">
              <div className="flex justify-between w-full">
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
          <div className="relative group">
            <img
              src="/mini-projects-pictures/image2.jpg"
              alt=""
              className="w-72"
            />
            <div className="absolute bottom-0 left-0 right-0 p-2 px-4 text-white duration-500 bg-black opacity-0 group-hover:opacity-100 bg-opacity-40">
              <div className="flex justify-between w-full">
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
          <div className="relative group">
            <img
              src="/mini-projects-pictures/image3.jpg"
              alt=""
              className="w-72"
            />
            <div className="absolute bottom-0 left-0 right-0 p-2 px-4 text-white duration-500 bg-black opacity-0 group-hover:opacity-100 bg-opacity-40">
              <div className="flex justify-between w-full">
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
          <div className="relative group">
            <img
              src="/mini-projects-pictures/image4.jpg"
              alt=""
              className="w-72"
            />
            <div className="absolute bottom-0 left-0 right-0 p-2 px-4 text-white duration-500 bg-black opacity-0 group-hover:opacity-100 bg-opacity-40">
              <div className="flex justify-between w-full">
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
          <div className="relative group">
            <img
              src="/mini-projects-pictures/image5.jpg"
              alt=""
              className="w-72"
            />
            <div className="absolute bottom-0 left-0 right-0 p-2 px-4 text-white duration-500 bg-black opacity-0 group-hover:opacity-100 bg-opacity-40">
              <div className="flex justify-between w-full">
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
          <div className="relative group">
            <img
              src="/mini-projects-pictures/image6.jpg"
              alt=""
              className="w-72"
            />
            <div className="absolute bottom-0 left-0 right-0 p-2 px-4 text-white duration-500 bg-black opacity-0 group-hover:opacity-100 bg-opacity-40">
              <div className="flex justify-between w-full">
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
