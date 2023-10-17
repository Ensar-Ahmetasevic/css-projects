export default function Home() {
  return (
    // global container
    <div className="flex items-center justify-center h-screen bg-zinc-700">
      <div className="bg-zinc-800 rounded-2xl p-2 mx-6">
        {/* flex container */}
        <div className="flex flex-col md:flex-row rounded-l-xl">
          {/* image */}
          <img
            className="object-fit rounded-xl h-80 md:h-64 md:rounded-l-xl md:rounded-r-none transform hover:scale-105 hover:rounded-xl duration-200"
            src="/mini-projects-pictures/image.jpg"
            alt=""
          />

          {/* content */}
          <div className="p-6 md:p-12">
            <h2 className="font-serif text-xl font-medium text-center text-white md:text-left">
              Get diet and fitness tips in your inbox
            </h2>
            <p className="max-w-xs my-4 text-xs leading-5 tracking-wide text-center text-white md:text-left">
              Eat better and exercise better. Sing up for the Diet&Fitness
              newsletter
            </p>
            <div className="flex flex-col md:flex-row mt-5 space-y-4 md:space-y-0 md:space-x-3 ">
              <input
                type="text"
                placeholder="Enter your email address"
                className="p-2 text-center text-white bg-zinc-800 border border-zinc-600 placeholder:text-xs md:text-left focus:outline-none"
              />
              <button className="rounded-md bg-lime-500 py-3 px-5 text-xs text-zinc-800 hover:bg-lime-700 hover:text-white duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
