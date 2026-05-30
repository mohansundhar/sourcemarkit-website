import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ["home", "about", "services", "case-studies", "contact"];

      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const top = section.offsetTop - 120;
          const bottom = top + section.offsetHeight;

          if (window.scrollY >= top && window.scrollY < bottom) {
            setActive(id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menu = [
    { name: "Home", id: "home" },
    { name: "About Us", id: "about" },
    { name: "Services", id: "services" },
    { name: "Case Studies", id: "case-studies" },
    { name: "Contact Us", id: "contact" },
  ];

  return (
    <div
      className={`fixed top-0 w-full flex justify-center z-50 transition-all duration-300 ${
        scrolled
          ? "py-2 bg-white/80 backdrop-blur-md shadow-md"
          : "py-4 bg-transparent"
      }`}
    >
      <div className="w-[95%] max-w-7xl rounded-full px-6 py-3 flex items-center justify-between bg-white shadow-sm">

        {/* LOGO */}
        <h1 className="text-2xl font-bold text-primary tracking-wide">
          SourceMarkit
        </h1>

        {/* MENU */}
        <div className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          {menu.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`transition ${
                active === item.id
                  ? "text-primary font-semibold"
                  : "hover:text-primary"
              }`}
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-4">

  <a
    href="https://sourcemarkit.in/login"
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-600 hover:text-primary transition"
  >
    Login
  </a>

  {/* 🔥 UPDATED BUTTON */}
  <a
    href="#contact"
    className="bg-gradient-to-r from-primary to-secondary text-white px-5 py-2 rounded-full font-semibold hover:scale-105 transition"
  >
    Request Demo
  </a>

</div>

      </div>
    </div>
  );
}