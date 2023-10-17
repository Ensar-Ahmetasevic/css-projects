export default function Home() {
  return (
    // Global Container
    <div className="flex min-h-screen items-center justify-center bg-rose-50">
      {/* Main Container */}
      <div className="relative m-6 flex flex-col space-y-10 rounded-2xl bg-white shadow-2xl md:m-0 md:flex-row md:space-y-0">
        {/* Left Side */}

        <div className="p-6 md:p-20">
          <h2 className="mb-5 text-4xl font-bold">Log In</h2>
          <p className="mb-12 max-w-sm font-light text-gray-600">
            Log in to your account to upload or download pictures, videos or
            music.
          </p>
          <input
            type="email"
            className="w-full rounded-xl border border-gray-300 p-6 placeholder:font-light"
            placeholder="Enter your email address"
          />

          {/* Middle Content */}
          <div className="mt-6 flex flex-col items-center justify-between space-y-6 md:flex-row md:space-y-0">
            <div className="text-cyan-700 font-thin">Forgot password</div>

            <button className="bg-cyan-700 shadow-cyan-100 flex w-full items-center justify-center space-x-4 rounded-md border p-6 px-9 font-sans font-bold text-white shadow-lg transition duration-150 hover:-translate-y-0.5 hover:bg-opacity-90 hover:shadow-lg md:w-auto">
              <span>Next</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-7"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#ffffff"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <line x1="5" y1="12" x2="19" y2="12" />
                <line x1="13" y1="18" x2="19" y2="12" />
                <line x1="13" y1="6" x2="19" y2="12" />
              </svg>
            </button>
          </div>

          {/* Border */}
          <div className="mt-12 border-b border-b-gray-300"></div>

          {/* Border Content */}
          <p className="py-6 text-center text-sm font-thin text-gray-400">
            or log in with
          </p>

          {/* Bottom Buttons Sontainer */}

          <div className="flex flex-col space-x-0 space-y-6 md:flex-row md:space-x-3 md:space-y-0">
            <button className="flex flex-row items-center justify-center space-x-3 rounded border border-gray-300 py-2 shadow-sm transition duration-150 hover:-translate-y-0.5 hover:bg-opacity-30 hover:shadow-lg md:w-1/2">
              <img
                className="w-9"
                src="/mini-projects-pictures/facebook.png"
                alt="facebook-image"
              />
              <span className="font-thin">Facebook</span>
            </button>
            <button className="flex flex-row items-center justify-center space-x-3 rounded border border-gray-300 py-2 shadow-sm transition duration-150 hover:-translate-y-0.5 hover:bg-opacity-30 hover:shadow-lg md:w-1/2">
              <img
                className="w-9"
                src="/mini-projects-pictures/google.png"
                alt="facebook-image"
              />
              <span className="font-thin">Google</span>
            </button>
          </div>
        </div>

        {/* Right Side */}

        <img
          className="hidden w-[430px] md:block"
          src="/mini-projects-pictures/login-image.jpg"
          alt="login-image"
        />

        {/* Close Button */}

        <div className="group absolute -top-5 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 transition duration-150 hover:-translate-y-0.5 hover:cursor-pointer md:top-4 md:bg-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 text-black group-hover:text-gray-600"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </div>
      </div>
    </div>
  );
}
