import { MenuIcon, X } from "lucide-react";
import { useState } from "react";

const Navbar2 = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleMenuToggle = () => setMobileOpen((open) => !open);
  const handleClose = () => setMobileOpen(false);

  return (
    <nav className="w-full flex items-center justify-between py-6 px-6 md:px-12 bg-white relative">
      <div className="flex items-center">
        <a href="/" className="font-bold text-xl flex items-center">
          <span className="text-[#c4ff00] mr-1">●</span> Icone
        </a>
      </div>

      {/* Desktop menu */}
      <div className="hidden md:flex space-x-8 items-center">
        
        <a
          href="#insights"
          className="text-sm font-medium hover:text-gray-500 transition-colors"
        >
          Insights
        </a>
        <a
          href="#projects"
          className="text-sm font-medium hover:text-gray-500 transition-colors"
        >
          Projects
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

      {/* Mobile menu button */}
      <div className="md:hidden">
        <button onClick={handleMenuToggle} aria-expanded={mobileOpen}>
          <span className="sr-only">Open menu</span>
          {mobileOpen ? <X /> : <MenuIcon />}
        </button>
      </div>

      {/* Mobile menu dropdown */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-black/40" onClick={handleClose}>
          <div
            className="absolute top-0 right-0 w-64 bg-white shadow-lg h-full flex flex-col p-6 space-y-6"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="self-end mb-4"
              onClick={handleClose}
              aria-label="Close menu"
            >
              <X />
            </button>
            <a
              href="#how-it-works"
              className="text-base font-medium hover:text-gray-500 transition-colors"
              onClick={handleClose}
            >
              How it works
            </a>
            <a
              href="#services"
              className="text-base font-medium hover:text-gray-500 transition-colors"
              onClick={handleClose}
            >
              Service
            </a>
            <a
              href="#clients"
              className="text-base font-medium hover:text-gray-500 transition-colors"
              onClick={handleClose}
            >
              Client
            </a>
            <a
              href="#contact"
              className="text-base font-medium hover:text-gray-500 transition-colors"
              onClick={handleClose}
            >
              Contact
            </a>
            <a
              href="#faq"
              className="text-base font-medium hover:text-gray-500 transition-colors"
              onClick={handleClose}
            >
              FAQ
            </a>
            <button className="rounded-full hover:border-gray-500 border border-neutral-600 text-black hover:bg-black/5 p-1.5">
              Get Started <span className="ml-1">→</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar2;
