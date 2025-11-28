import { ArrowUpRight } from "./icons";

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 px-4 md:px-12 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <span className="text-brand-yellow font-bold uppercase text-xs tracking-widest mb-2 block">
          Selected Works
        </span>
        <h2 className="text-5xl md:text-7xl font-display uppercase text-brand-cream">
          Our Brightest Creations
        </h2>
      </div>

      {/* Featured Large Project */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20 items-center">
        <div className="order-2 lg:order-1">
          <div className="flex items-center gap-2 text-xs font-bold uppercase text-gray-400 mb-2">
            <span>Jan 2025</span>
            <span className="w-1 h-1 bg-brand-yellow rounded-full"></span>
            <span>Visual Identity</span>
          </div>
          <h3 className="text-4xl md:text-6xl font-display uppercase leading-none mb-6">
            Puffilo : Bites <br /> of Cloud-Like Bliss
          </h3>
          <p className="text-gray-400 max-w-md mb-8">
            A playful and vibrant rebranding for a marshmallow confectionery
            brand, focusing on the sensory experience of softness and flavor.
          </p>
          <button className="flex items-center gap-2 bg-transparent text-brand-yellow border border-brand-yellow/30 hover:border-brand-yellow px-6 py-2 rounded-full uppercase font-bold text-sm transition-colors">
            See Project <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
        <div className="order-1 lg:order-2 relative group">
          <div className="absolute inset-0 bg-brand-yellow/10 rounded-[2rem] transform rotate-3 group-hover:rotate-6 transition-transform"></div>
          <img
            src="https://picsum.photos/seed/puffilo/800/600"
            alt="Puffilo Project"
            className="relative rounded-[2rem] shadow-2xl w-full object-cover h-[400px] border border-white/10"
          />
          {/* Floating elements */}
          <img
            src="https://picsum.photos/seed/sweet1/100/100"
            className="absolute -bottom-6 -left-6 w-24 h-24 rounded-xl border-4 border-brand-dark shadow-xl"
            alt="detail"
          />
          <img
            src="https://picsum.photos/seed/sweet2/100/100"
            className="absolute -top-6 -right-6 w-20 h-20 rounded-full border-4 border-brand-dark shadow-xl animate-pulse"
            alt="detail"
          />
        </div>
      </div>

      {/* Secondary Large Project */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20 items-center">
        <div className="relative group">
          <div className="absolute inset-0 bg-brand-green rounded-[2rem] transform -rotate-2 group-hover:-rotate-4 transition-transform border border-white/10"></div>
          <img
            src="https://picsum.photos/seed/fitness/800/600"
            alt="Haven Project"
            className="relative rounded-[2rem] shadow-2xl w-full object-cover h-[400px]"
          />
          <div className="absolute bottom-4 right-4 bg-brand-cream/90 p-4 rounded-xl shadow-lg max-w-[150px]">
            <img
              src="https://picsum.photos/seed/app/100/100"
              className="w-full h-auto rounded-md mb-2"
              alt="app icon"
            />
          </div>
        </div>
        <div className="pl-0 lg:pl-10">
          <div className="flex items-center gap-2 text-xs font-bold uppercase text-gray-400 mb-2">
            <span>Nov 2024</span>
            <span className="w-1 h-1 bg-brand-yellow rounded-full"></span>
            <span>Branding</span>
          </div>
          <h3 className="text-4xl md:text-6xl font-display uppercase leading-none mb-6">
            Haven: Unleash <br /> Your Best Self!
          </h3>
          <p className="text-gray-400 max-w-md mb-8">
            Comprehensive branding for a new-age fitness app, combining
            energetic visuals with a community-driven tone of voice.
          </p>
          <button className="flex items-center gap-2 bg-transparent text-brand-yellow border border-brand-yellow/30 hover:border-brand-yellow px-6 py-2 rounded-full uppercase font-bold text-sm transition-colors">
            See Project <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* List View */}
      <div className="space-y-6">
        {[
          {
            name: "Hoptonic Tea",
            date: "Nov 2024",
            type: "Web Design",
            img: "https://picsum.photos/seed/tea/200/100",
          },
          {
            name: "Caca Family",
            date: "Oct 2024",
            type: "Web Design",
            img: "https://picsum.photos/seed/family/200/100",
          },
          {
            name: "Edify",
            date: "Sept 2024",
            type: "Branding",
            img: "https://picsum.photos/seed/tech/200/100",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="group flex flex-col md:flex-row items-center justify-between border-t border-white/10 py-6 hover:bg-white/5 transition-colors px-4 rounded-xl cursor-pointer"
          >
            <h4 className="text-2xl md:text-4xl font-display uppercase text-white w-full md:w-1/3">
              {item.name}
            </h4>
            <div className="flex items-center justify-between w-full md:w-2/3 mt-4 md:mt-0">
              <span className="text-sm font-bold text-gray-400 uppercase">
                {item.date}
              </span>
              <span className="text-sm font-bold text-gray-400 uppercase">
                {item.type}
              </span>

              {/* Hover Preview Image */}
              <div className="hidden md:block w-32 h-20 rounded-lg overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-4 group-hover:translate-x-0 duration-300">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <button className="bg-brand-yellow text-brand-dark px-8 py-3 rounded-full font-bold uppercase text-sm hover:scale-105 transition-transform">
          Discover More
        </button>
      </div>
    </section>
  );
};

export default Portfolio;
