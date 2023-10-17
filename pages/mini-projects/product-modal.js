export default function Home() {
  return (
    // Global Container
    <div className="flex items-center justify-center min-h-screen bg-slate-100">
      {/* Card Container*/}
      <div className="flex flex-col p-6 m-3 space-y-10 bg-white rounded-2xl shadow-2xl md:flex-row md:space-y-0 md:space-x-10 md:m-0 md:p-16">
        {/* Image */}
        <div>
          <img
            className="mx-auto hover:scale-105 duration-300 w-60"
            src="/mini-projects-pictures/headphone.png"
            alt=""
          />
        </div>
        {/* Content */}

        <div className="flex flex-col space-y-6">
          {/* Label and Title Container*/}

          <div className="flex flex-col mb-4 space-y-3 text-center md:text-left">
            <div>
              <div className="inline-block px-3 py-1 text-sm text-white bg-black rounded-full">
                Free Shipping
              </div>
            </div>
            {/* Title */}
            <div className="max-w-sm text-2xl font-medium">
              Razer Kraken Kitty Edt Gaming Headset Quartz
            </div>
            {/* Price Conteiner */}
            <div className="flex flex-col mb-4 space-y-2 text-center md:text-left">
              <p className="line-through">$799</p>
              <p className="text-5xl font-bold">$599</p>
              <p className="text-sm font-light text-gray-400">
                This offer is valid until April 3rd or as long as stock lasts!
              </p>
            </div>
            {/* Button Group */}
            <div className="group">
              <button className="w-full transition-all duration-200 bg-blue-700 text-white border-b-8 border-b-blue-700 rounded-xl group-hover:border-t-8 group-hover:border-b-0 group-hover:border-t-blue-700 group-hover:shadow-lg">
                <div className="px-8 py-4 duration-200 bg-blue-500 rounded-lg group-hover:bg-blue-700">
                  Add to Cart
                </div>
              </button>
            </div>
            {/* Stock */}
            <div className="flex items-center space-x-3 group">
              <div className="w-3 h-3 bg-green-400 rounded-full group-hover:animate-ping"></div>
              <div className="text-sm">50+ pcs. in stock</div>
            </div>
            {/* Bottom Buttons Container */}
            <div className="flex flex-col space-y-4 md:space-y-0 md:space-x-4 md:flex-row">
              <button
                className="flex items-center justify-center border-2 border-gray-300 rounded-lg px-5 py-3 space-x-3 shadow-md
              hover:bg-opacity-30 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-150"
              >
                <img
                  src="/mini-projects-pictures/weight.png"
                  alt=""
                  className="w-8"
                />
                <span>Add to cart</span>
              </button>
              <button
                className="flex items-center justify-center border-2 border-gray-300 rounded-lg px-5 py-3 space-x-3 shadow-md
              hover:bg-opacity-30 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-150"
              >
                <img
                  src="/mini-projects-pictures/heart.png"
                  alt=""
                  className="w-8"
                />
                <span>Add to wishlist</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
