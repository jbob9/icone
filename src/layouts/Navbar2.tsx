const Navbar2 = () => {
  return (
    <nav className="w-full flex items-center justify-between py-6 px-6 md:px-12 bg-white">
      <div className="flex items-center">
        <a href="/" className="font-bold text-xl flex items-center">
          <span className="text-[#c4ff00] mr-1">●</span> Icone
        </a>
      </div>

      <div className="hidden md:flex space-x-8 items-center">
        <a
          href="#how-it-works"
          className="text-sm font-medium hover:text-gray-500 transition-colors"
        >
          How it works
        </a>
        <a
          href="#services"
          className="text-sm font-medium hover:text-gray-500 transition-colors"
        >
          Service
        </a>
        <a
          href="#clients"
          className="text-sm font-medium hover:text-gray-500 transition-colors"
        >
          Client
        </a>
        <a
          href="#contact"
          className="text-sm font-medium hover:text-gray-500 transition-colors"
        >
          Contact
        </a>
        <a
          href="#faq"
          className="text-sm font-medium hover:text-gray-500 transition-colors"
        >
          FAQ
        </a>
        <button className="rounded-full hover:border-gray-500 border border-neutral-600 text-black hover:bg-black/5 p-1.5">
          Get Started <span className="ml-1">→</span>
        </button>
      </div>

      <div className="md:hidden">
        <button>
          <span className="sr-only">Open menu</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar2;
