const Footer = () => {
  return (
    <div className="py-10">
      <footer className="bg-[#808080] text-white py-8 px-3">
        <div className="container mx-auto flex flex-col md:flex-row justify-between">
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-semibold">Entertainment Media</h2>
            <p className="text-sm mt-2">
              Your go-to source for entertainment news and more.
            </p>
          </div>

          <div className="mb-4 md:mb-0">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="mt-2">
              <li>
                <a href="#" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Movies
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  TV Shows
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  News
                </a>
              </li>
            </ul>
          </div>

          <div className="mb-4 md:mb-0">
            <h3 className="text-lg font-semibold">Connect With Us</h3>
            <ul className="mt-2">
              <li>
                <a href="#" className="hover:underline">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  YouTube
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <p className="mt-2">
              123 Entertainment St
              <br />
              Hollywood, CA 90001
              <br />
              contact@example.com
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
