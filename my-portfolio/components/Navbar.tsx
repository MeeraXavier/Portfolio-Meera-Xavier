"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Skills", href: "/skills" },
  { name: "Experience", href: "/experience" },
  { name: "Projects", href: "/projects" },
  { name: "Achievements", href: "/achievements" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Close mobile menu when route changes
  useEffect(() => {
    const handleRouteChange = () => {
      setIsOpen(false);
    };

    // This will run when the component mounts and when pathname changes
    handleRouteChange();

    // Cleanup function
    return () => {
      // Any cleanup if needed
    };
  }, [pathname]);

  const isActive = (path: string) => {
    // Special case for home
    if (path === "/" && pathname === path) return true;
    // For other paths, check if the current path starts with the nav item path
    return path !== "/" && pathname.startsWith(path);
  };

  return (
    <header className="fixed top-0 w-full h-[60px] z-50 bg-gray-900/80 backdrop-blur-sm border-b border-gray-800 text-white">
      <nav className="h-full max-w-6xl mx-auto flex items-center justify-between px-6">
        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-bold tracking-wide text-white hover:text-purple-400 transition-colors duration-200"
        >
          <span className="text-purple-400">Meera</span> Xavier
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-sm">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className={`transition-colors duration-200 ${
                  isActive(item.href)
                    ? "text-purple-400 font-medium"
                    : "text-gray-300 hover:text-purple-400"
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-900/95 border-t border-gray-800 backdrop-blur-sm">
          <ul className="flex flex-col items-center py-6 space-y-6">
            {navItems.map((item) => (
              <li key={item.name} className="w-full text-center">
                <Link
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`transition-colors duration-200 text-lg block py-2 ${
                    isActive(item.href)
                      ? "text-purple-400 font-medium"
                      : "text-gray-300 hover:text-purple-400"
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
