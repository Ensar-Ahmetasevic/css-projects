import { useForm } from "react-hook-form";
import Link from "next/link";
import { useState } from "react";

export default function Shortly() {
  const [menuOpen, setMenuOpen] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      {/* Nav Container */}

      <nav className="container relative mx-auto p-6">
        {/* Flex Container For All Items */}

        <div className="flex items-center justify-between">
          {/* Flex Continer For Logo nad Menu */}
          <div className="flex items-center space-x-20">
            <img src="/shortly-images/logo.svg" alt="" />
            {/* Left Menu */}
            <div className="hidden space-x-8 font-poppins font-bold lg:flex">
              <Link
                className="text-grayishViolet hover:text-veryDarkViolet"
                href="#"
              >
                Features
              </Link>
              <Link
                className="text-grayishViolet hover:text-veryDarkViolet"
                href="#"
              >
                Pricing
              </Link>
              <Link
                className="text-grayishViolet hover:text-veryDarkViolet"
                href="#"
              >
                Resources
              </Link>
            </div>
          </div>

          {/* Right Buttons Menu */}
          <div className="hidden items-center space-x-6 font-bold text-grayishViolet lg:flex">
            <div className="font-poppins hover:text-veryDarkViolet">LogIn</div>
            <Link
              className="rounded-full bg-cyan px-8 py-3 font-poppins font-bold text-white hover:opacity-70"
              href="#"
            >
              Sign Up
            </Link>
          </div>

          {/* Hamburger Button */}
          <button
            id="menu-btn"
            className={`hamburger block focus:outline-none lg:hidden ${
              menuOpen ? "open" : ""
            }`}
            type="button"
            onClick={toggleMenu}
          >
            <span className="hamburger-top"></span>
            <span className="hamburger-middle"></span>
            <span className="hamburger-bottom"></span>
          </button>
        </div>

        {/* Todo Mobile Menu */}

        <div
          id="menu"
          className={`z-100 absolute left-6 right-6 top-20 ${
            menuOpen ? "flex" : "hidden"
          } rounded-lg bg-darkViolet p-6`}
        >
          <div className="flex w-full flex-col items-center justify-center space-y-6 rounded-sm font-bold text-white">
            <Link href="#" className="w-full text-center">
              Features
            </Link>
            <Link href="#" className="w-full text-center">
              Pricing
            </Link>
            <Link href="#" className="w-full text-center">
              Resources
            </Link>
            <Link
              href="#"
              className="w-full border-t border-gray-400 pt-6 text-center"
            >
              Login
            </Link>
            <Link
              href="#"
              className="w-full rounded-full bg-cyan py-3 text-center"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero">
        {/* Hero Container */}
        <div className="container mx-auto flex flex-col-reverse p-6 lg:flex-row">
          {/* Content Container */}
          <div className="mb-44 flex flex-col space-y-10  text-center font-poppins lg:mb-52 lg:mt-16 lg:w-1/2 lg:text-left">
            <h1 className="text-5xl font-bold lg:max-w-md lg:text-6xl">
              More than just shorter links
            </h1>
            <p className="text-2xl text-gray-400 lg:max-w-md">
              Build your brand's recognition and get detailed insights on how
              your links are performing.
            </p>
            <div>
              <Link
                className="rounded-full bg-cyan px-10 py-5 text-2xl font-bold text-white hover:opacity-70 lg:py-4"
                href="#"
              >
                Get Started
              </Link>
            </div>
          </div>

          {/* Image */}

          <div className="mx-auto mb-24 md:w-180 lg:mb-0 lg:w-1/2">
            <img src="/shortly-images/illustration-working.svg" alt="" />
          </div>
        </div>
      </section>

      {/* Shorten Section */}
      <section id="shorten" className="relative bg-gray-100">
        {/* Shorten Container */}
        <div className="mx-auto flex max-w-4xl flex-col space-y-6 p-6">
          {/* Form */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            id="link-form"
            className="relative -mt-20 flex w-full flex-col space-y-4 rounded-lg bg-darkViolet p-10 md:space-x-3 md:space-y-0 lg:flex-row"
          >
            <input
              className={`${
                errors.URL ? "border-red" : ""
              } flex-1 rounded-lg border-2 p-3 placeholder-yellow-500 focus:outline-none`}
              id="link-input"
              type="text"
              placeholder="Shorten a link here"
              {...register("URL", {
                required: "This field is required",
                pattern: {
                  value: /^(https?|ftp|file):\/\/[^\s/$.?#].[^\s]*$/,
                  message: "Please enter a valid URL",
                },
              })}
            />
            <button className="rounded-lg bg-cyan px-10 py-3 text-white hover:bg-cyanLight focus:outline-none md:py-2">
              Shoten It
            </button>
            {errors.URL && (
              <p className="absolute bottom-3 left-10 font-poppins text-sm italic text-red md:left-7">
                {errors.URL.message}
              </p>
            )}
          </form>

          {/* Link 1 */}
          <div className="flex w-full flex-col items-center justify-between rounded-lg bg-white p-6 md:flex-row">
            <p className="text-center font-poppins font-bold text-veryDarkViolet md:text-left">
              https://frontendmentor.io
            </p>
            <div className="flex flex-1 flex-col items-center justify-end space-x-4 space-y-2 md:flex-row md:space-y-0">
              <div className="font-poppins font-bold text-cyan">
                https://rel.ink/dslfns
              </div>
              <button className="rounded-lg bg-cyan p-2 px-8 font-poppins text-white hover:opacity-70 focus:outline-none">
                Copy
              </button>
            </div>
          </div>

          {/* Link 2 */}
          <div className="flex w-full flex-col items-center justify-between rounded-lg bg-white p-6 md:flex-row">
            <p className="text-center font-poppins font-bold text-veryDarkViolet md:text-left">
              https://twitter.com/frontendmentor
            </p>
            <div className="flex flex-1 flex-col items-center justify-end space-x-4 space-y-2 md:flex-row md:space-y-0">
              <div className="font-poppins font-bold text-cyan">
                https://rel.ink/gxOXp9
              </div>
              <button className="rounded-lg bg-darkViolet  p-2 px-8 font-poppins text-white hover:opacity-70 focus:outline-none">
                Copy
              </button>
            </div>
          </div>

          {/* Link 3 */}
          <div className="flex w-full flex-col items-center justify-between rounded-lg bg-white p-6 md:flex-row">
            <p className="text-center font-poppins font-bold text-veryDarkViolet md:text-left">
              https://linkedin.com/frontend-mentor
            </p>
            <div className="flex flex-1 flex-col items-center justify-end space-x-4 space-y-2 md:flex-row md:space-y-0">
              <div className="font-poppins font-bold text-cyan">
                https://rel.ink/gob3X9
              </div>
              <button className="rounded-lg bg-cyan p-2 px-8 font-poppins text-white hover:opacity-70 focus:outline-none">
                Copy
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="bg-gray-100 py-24 " id="Statistics">
        <div className="container mx-auto px-3 font-poppins">
          <h2 className="mb-6 text-center text-4xl font-bold">
            Advanced Statistics
          </h2>
          <p className="mx-auto max-w-xs text-center text-gray-400 md:max-w-md">
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </p>
        </div>
      </section>

      {/* Feature Box Section */}
      <section id="features" className="bg-gray-100 pb-32 ">
        <div className="container relative mx-auto flex flex-col items-start px-6 md:flex-row md:space-x-7">
          {/* Horizonal Line */}
          <div className="absolute left-16 top-24 hidden h-3 w-10/12 bg-cyan md:block"></div>

          {/* Vertical Line */}
          <div className="absolute left-1/2 -ml-1 h-full w-2 bg-cyan md:hidden"></div>

          {/* Box 1 */}
          <div className="relative flex flex-col space-y-6 rounded-lg bg-white p-6 text-center font-poppins md:w-1/3 md:text-left">
            {/* Image Positioning */}
            <div className="absolute -top-10 left-1/2 -ml-10 md:left-16">
              {/* Image Container For Background nad Center */}
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-veryDarkViolet p-4">
                <img src="/shortly-images/icon-brand-recognition.svg" alt="" />
              </div>
            </div>
            <h5 className="pt-6 text-center text-xl font-bold capitalize md:text-left">
              brand recognition
            </h5>
            <p className="text-center text-gray-400 md:text-left">
              Boost your brand recognition with each click. Generic links don't
              mean a thing. Branded links help instil confidence in your
              content.
            </p>
          </div>

          {/* Box 2 */}
          <div className="relative mt-24 flex flex-col space-y-6 rounded-lg bg-white p-6 text-center font-poppins md:mt-8 md:w-1/3 md:text-left">
            {/* Image Positioning */}
            <div className="absolute -top-10 left-1/2 -ml-10 md:left-16">
              {/* Image Container For Background nad Center */}
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-veryDarkViolet p-4">
                <img src="/shortly-images/icon-detailed-records.svg" alt="" />
              </div>
            </div>
            <h5 className="pt-6 text-center text-xl font-bold capitalize md:text-left">
              Detailed Records
            </h5>
            <p className="text-center text-gray-400 md:text-left">
              Gain insights into who is clicking your links. Knowing when and
              where people engage with your content helps inform better
              decisions.
            </p>
          </div>

          {/* Box 3 */}
          <div className="relative mt-24 flex flex-col space-y-6 rounded-lg bg-white p-6 text-center font-poppins md:mt-16 md:w-1/3 md:text-left">
            {/* Image Positioning */}
            <div className="absolute -top-10 left-1/2 -ml-10 md:left-16">
              {/* Image Container For Background nad Center */}
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-veryDarkViolet p-4">
                <img src="/shortly-images/icon-fully-customizable.svg" alt="" />
              </div>
            </div>
            <h5 className="pt-6 text-center text-xl font-bold capitalize md:text-left">
              Fully Customizable
            </h5>
            <p className="text-center text-gray-400 md:text-left">
              Improve brand awareness and content discoverability through
              customizable links, supercharging audience engagement.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="bg-darkViolet py-24">
        <div className="flex flex-col space-y-6 p-2 font-poppins">
          <h5 className="mx-auto space-y-10 text-center text-4xl font-bold text-white">
            Boost your links today
          </h5>
          <button className="mx-auto rounded-full bg-cyan px-10 py-5 text-2xl font-bold text-white hover:bg-cyanLight focus:outline-none md:py-3 md:text-base">
            Get Started
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-veryDarkViolet py-16">
        <div className="container mx-auto flex flex-col items-center justify-between space-y-16 md:flex-row md:items-start md:space-y-0">
          {/* Logo */}
          <img src="/shortly-images/logo.svg" alt="" />

          {/* Menus Container */}
          <div className="flex flex-col space-y-16 md:flex-row md:space-x-20 md:space-y-0">
            {/* Menu 1 */}
            <div className="flex w-full flex-col items-center space-y-3 font-poppins text-white md:items-start">
              <div className="mb-3 font-bold capitalize">Features</div>

              <div className="flex flex-col items-center space-y-3 font-poppins text-grayishViolet  md:items-start">
                <Link className="hover:text-cyan" href="#">
                  Link Shortening
                </Link>
                <Link className="hover:text-cyan" href="#">
                  Branded Links
                </Link>
                <Link className="hover:text-cyan" href="#">
                  Analytics
                </Link>
              </div>
            </div>
            {/* Menu 2 */}
            <div className="flex w-full flex-col items-center space-y-3 font-poppins text-white md:items-start">
              <div className="mb-3 font-bold capitalize">Resources</div>

              <div className="flex flex-col items-center space-y-3 font-poppins text-grayishViolet md:items-start">
                <Link className="hover:text-cyan" href="#">
                  Blog
                </Link>
                <Link className="hover:text-cyan" href="#">
                  Developers
                </Link>
                <Link className="hover:text-cyan" href="#">
                  Support
                </Link>
              </div>
            </div>
            {/* Menu 3 */}
            <div className="flex w-full flex-col items-center space-y-3 font-poppins text-white md:items-start">
              <div className="mb-3 font-bold capitalize">Company</div>

              <div className="flex flex-col items-center space-y-3 font-poppins text-grayishViolet md:items-start">
                <Link className="hover:text-cyan" href="#">
                  About
                </Link>
                <Link className="hover:text-cyan" href="#">
                  Our Team
                </Link>
                <Link className="hover:text-cyan" href="#">
                  Careers
                </Link>
                <Link className="hover:text-cyan" href="#">
                  Contact
                </Link>
              </div>
            </div>
          </div>

          {/* Social Container */}
          <div className="flex space-x-6">
            <Link href="#">
              <img
                className="ficon"
                src="/shortly-images/icon-facebook.svg"
                alt=""
              />
            </Link>
            <Link href="#">
              <img
                className="ficon"
                src="/shortly-images/icon-twitter.svg"
                alt=""
              />
            </Link>
            <Link href="#">
              <img
                className="ficon"
                src="/shortly-images/icon-pinterest.svg"
                alt=""
              />
            </Link>
            <Link href="#">
              <img
                className="ficon"
                src="/shortly-images/icon-instagram.svg"
                alt=""
              />
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}
