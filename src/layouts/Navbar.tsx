import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 bg-darkBg/80 backdrop-blur-md z-50">
      <div className="container mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <a href="/" >
            <span className="font-semibold text-white">Icone</span>
          </a>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#home" className="text-white hover:text-neon transition-colors">Home</a>
          <a href="#work" className="text-white hover:text-neon transition-colors">Work</a>
          <a href="#about" className="text-white hover:text-neon transition-colors">About Us</a>
          <a href="#services" className="text-white hover:text-neon transition-colors">Services</a>
          <a href="#testimonials" className="text-white hover:text-neon transition-colors">Testimonials</a>
          <a href="#contact" className="btn-primary">Contact us</a>
        </div>
        
        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-darkerBg py-4">
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            <a href="#home" className="text-white hover:text-neon transition-colors py-2">Home</a>
            <a href="#work" className="text-white hover:text-neon transition-colors py-2">Work</a>
            <a href="#about" className="text-white hover:text-neon transition-colors py-2">About Us</a>
            <a href="#services" className="text-white hover:text-neon transition-colors py-2">Services</a>
            <a href="#testimonials" className="text-white hover:text-neon transition-colors py-2">Testimonials</a>
            <a href="#contact" className="btn-primary inline-block text-center">Contact us</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;