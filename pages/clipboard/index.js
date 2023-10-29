import Link from "next/link";

export default function Clipboard() {
  return (
    <>
      {/* Hero Section */}
      <section
        id="hero"
        className="bg-[url('/clipboard-images/bg-header-desktop.png')] bg-contain bg-no-repeat"
      >
        <div className="section-container mb-40 pt-16">
          {/* image */}
          <img
            className="mx-auto my-16"
            src="/clipboard-images/logo.svg"
            alt=""
          />

          <h3 className="mb-8 text-4xl font-bold text-darkGrayishBlue md:text-5xl">
            A history of everything you copy
          </h3>

          <p className="mx-auto mb-10 max-w-3xl text-2xl text-grayishBlue">
            Clipboard allows you to track and organize everything you copy.
            Instantly access your clipboard on all your devices.
          </p>

          {/* Button Container */}

          <div className="button-container">
            <Link
              className="rounded-full bg-strongCyan p-4 px-8 shadow-lg duration-150 hover:opacity-90"
              href="#"
            >
              Download for iOS
            </Link>
            <Link
              className="rounded-full bg-lightBlue p-4 px-8 shadow-lg duration-150 hover:opacity-90"
              href="#"
            >
              Download for Mac
            </Link>
          </div>
        </div>
      </section>

      {/* Snippets Section */}
      <section id="snippets">
        <div className="section-container my-20">
          <h3 className="mb-8 text-4xl font-bold text-darkGrayishBlue md:text-5xl">
            Keep track of your snippets
          </h3>

          <p className="section-content mb-24">
            Clipboard instantly stores any item you copy in the cloud, meaning
            you can access your snippets immediately on all your devices. Our
            Mac and iOS apps will help you organize everything.
          </p>
        </div>
      </section>

      {/* Features Section */}

      <section id="features">
        <div className="section-container my-20">
          <div className=" relative flex flex-col md:flex-row md:space-x-32">
            <div className="md:w-1/2">
              <img
                className="right-[50%] top-0 md:absolute"
                src="/clipboard-images/image-computer.png"
                alt=""
              />
            </div>

            <div className="mb-24 mt-16 flex flex-col space-y-12 text-xl md:mb-60 md:mt-6 md:w-1/2 md:pl-16 md:text-left">
              <div>
                <h5 className="mb-2 text-2xl font-bold text-darkGrayishBlue">
                  Quick Search
                </h5>
                <p className="mx-auto text-grayishBlue">
                  Easily search your snippets by content, category, web address,
                  application, and more.
                </p>
              </div>

              <div>
                <h5 className="mb-2 text-2xl font-bold text-darkGrayishBlue">
                  iCloud Sync
                </h5>
                <p className="mx-auto text-grayishBlue">
                  Instantly saves and syncs snippets across all your devices.
                </p>
              </div>

              <div>
                <h5 className="mb-2 text-2xl font-bold text-darkGrayishBlue">
                  Completely History
                </h5>
                <p className="mx-auto text-grayishBlue">
                  Retrieve any snippets from the first moment you started using
                  the app.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Access Anywhere Section*/}
      <section id="Clipboard Anywhere" className="Clipboard Anywhere">
        <div className="section-container my-20">
          <h3 className="mb-8 text-4xl font-bold text-darkGrayishBlue md:text-5xl">
            Access Clipboard Anywhere
          </h3>

          <p className="section-content mb-24">
            Whether you’re on the go, or at your computer, you can access all
            your Clipboard snippets in a few simple clicks.
          </p>

          <img
            className="mx-auto"
            src="/clipboard-images/image-devices.png"
            alt=""
          />
        </div>
      </section>

      {/* Supercharge section */}

      <section id="supercharge">
        <div className="section-container my-20">
          <h3 className="mb-8 text-4xl font-bold text-darkGrayishBlue md:text-5xl">
            Supercharge your workflow
          </h3>

          <p className="section-content mb-16">
            We've got the tools to boost your productivity.
          </p>
          {/* Items Container */}
          <div className="flex flex-col items-center justify-between space-y-16 md:flex-row md:space-x-12 md:space-y-0">
            {/* Item 1 */}
            <div className="flex flex-col items-center space-y-5">
              <img
                className="mb-6"
                src="/clipboard-images/icon-blacklist.svg"
                alt=""
              />

              <h5 className="mb-2 text-2xl font-bold text-darkGrayishBlue">
                Create Blacklists
              </h5>

              <p className="max-w-md text-grayishBlue">
                Easily search your snippets by content, category, web address,
                application, and more.
              </p>
            </div>

            {/* Item 2 */}
            <div className="flex flex-col items-center space-y-5">
              <img
                className="mb-6"
                src="/clipboard-images/icon-text.svg"
                alt=""
              />

              <h5 className="mb-2 text-2xl font-bold text-darkGrayishBlue">
                Plain Text Snippets
              </h5>

              <p className="max-w-md text-grayishBlue">
                Remove unwanted formatting from copied text for a consistent
                look.
              </p>
            </div>

            {/* Item 3 */}
            <div className="flex flex-col items-center space-y-5">
              <img
                className="mb-6"
                src="/clipboard-images/icon-preview.svg"
                alt=""
              />

              <h5 className="mb-2 text-2xl font-bold text-darkGrayishBlue">
                Sneak Preview
              </h5>

              <p className="max-w-md text-grayishBlue">
                Quick preview of all snippets on your Clipboard for easy access.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* References Section */}

      <section id="references">
        {/* Logo icons */}
        <div className="mx-auto my-44 flex max-w-6xl flex-col items-center justify-between space-y-16 px-10 md:flex-row md:space-y-0">
          <img src="/clipboard-images/logo-google.png" alt="" />
          <img src="/clipboard-images/logo-ibm.png" alt="" />
          <img src="/clipboard-images/logo-microsoft.png" alt="" />
          <img src="/clipboard-images/logo-hp.png" alt="" />
          <img src="/clipboard-images/logo-vector-graphics.png" alt="" />
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section id="bottom">
        <div className="section-container my-20">
          <h3 className="mb-8 text-4xl font-bold text-darkGrayishBlue md:text-5xl">
            Clipboard for iOS and MacOS
          </h3>
          <p className="section-content mb-10 text-xl">
            Available for free on the App Store. Download for Mac or iOS, sync
            with iCloud and you're ready to start adding to your clipboard.
          </p>

          {/* Button Container */}
          <div className="button-container">
            <Link
              href="#"
              className="rounded-full bg-strongCyan p-4 px-8 shadow-lg duration-200 hover:opacity-80"
            >
              Download for iOS
            </Link>
            <Link
              href="#"
              className="rounded-full bg-lightBlue p-4 px-8 shadow-lg duration-200 hover:opacity-80"
            >
              Download for Mac
            </Link>
          </div>
        </div>
      </section>

      <footer className="bg-gray-50">
        <div className="section-container">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <img className="scale-50" src="/clipboard-images/logo.svg" alt="" />

            {/* Container for Menus and Social */}

            <div className="mb-10 flex flex-1 flex-col items-center justify-between space-y-6 text-grayishBlue md:mb-0 md:flex-row md:space-y-0">
              {/* Menus */}
              <div className="flex flex-col space-y-4 md:ml-24 md:flex-row md:space-x-24 md:space-y-0">
                {/* Menu 1 */}
                <div className="flex flex-col space-y-4 text-center md:text-left">
                  <div>
                    <Link className="hover:text-strongCyan" href="#">
                      FAQs
                    </Link>
                  </div>
                  <div>
                    <Link className="hover:text-strongCyan" href="#">
                      Contact Us
                    </Link>
                  </div>
                </div>

                {/* Menu 3 */}
                <div className="flex flex-col space-y-4 text-center md:text-left">
                  <div>
                    <Link className="hover:text-strongCyan" href="#">
                      Privacy Policy
                    </Link>
                  </div>
                  <div>
                    <Link className="hover:text-strongCyan" href="#">
                      Press Kit
                    </Link>
                  </div>
                </div>

                {/* Menu 5 */}
                <div className="flex flex-col space-y-4 text-center md:text-left">
                  <div>
                    <Link className="hover:text-strongCyan" href="#">
                      Install Guide
                    </Link>
                  </div>
                </div>
              </div>

              {/* Social Icons*/}
              <div className="flex w-32 justify-between py-1 md:py-0">
                <Link href="#">
                  {" "}
                  <img
                    className="ficon duration-200"
                    src="/clipboard-images/icon-facebook.svg"
                    alt=""
                  />{" "}
                </Link>
                <Link href="#">
                  {" "}
                  <img
                    className="ficon duration-200"
                    src="/clipboard-images/icon-twitter.svg"
                    alt=""
                  />{" "}
                </Link>
                <Link href="#">
                  {" "}
                  <img
                    className="ficon duration-200"
                    src="/clipboard-images/icon-instagram.svg"
                    alt=""
                  />{" "}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
