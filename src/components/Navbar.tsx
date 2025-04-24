import { Link } from "react-router-dom";
import { ShoppingCart, Moon, Sun, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleDarkMode = () => setDarkMode((prev) => !prev);
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <header className="bg-black border-b-2 text-white shadow-md px-6 py-4 flex items-center 
    justify-between relative">
      {/* سمت چپ - لوگو و سبد خرید */}
      <div className="flex items-center gap-4 relative">
        {/* لوگو */}
        <div className="text-xl md:text-2xl font-bold text-white bg-purple-500 px-3 py-1 rounded-md flex items-center gap-2">
          My Shop 🤤
        </div>

        {/* سبد خرید */}
        <div className="relative">
          <Link to="/cart">
            <div className="bg-purple-500 p-2 rounded-full hover:bg-purple-700 transition-colors cursor-pointer">
              <ShoppingCart className="w-6 h-6 text-white" />
            </div>
            <span className="absolute -top-2 -right-2 bg-purple-700 text-white text-xs font-bold px-2 py-0.5 rounded-full">
              0
            </span>
          </Link>
        </div>
      </div>

      {/* منوی وسط برای دسکتاپ */}
      <nav className="hidden md:flex items-center gap-6 text-lg font-medium">
        <Link to="/" className="text-purple-500 hover:text-white hover:underline transition-colors duration-200">
          Home
        </Link>
        <Link to="/store" className="text-purple-500 hover:text-white hover:underline transition-colors duration-200">
          Store
        </Link>
        <Link to="/about" className="text-purple-500 hover:text-white hover:underline transition-colors duration-200">
          About us
        </Link>
        <Link to="/contact" className="text-purple-500 hover:text-white hover:underline transition-colors duration-200">
          Contact us
        </Link>
      </nav>

      {/* سمت راست */}
      <div className="flex items-center gap-4">
        {/* دارک مود */}
        <button
          onClick={toggleDarkMode}
          className="bg-purple-500 p-2 rounded-full hover:bg-purple-700 transition-colors"
        >
          {darkMode ? <Moon className="text-white w-5 h-5" /> : <Sun className="text-white w-5 h-5" />}
        </button>

        {/* دکمه لاگین */}
        <Link
          to="/login"
          className="bg-purple-500 hover:bg-purple-700 text-white font-medium px-3 py-1 md:px-4 md:py-2 rounded-md text-sm md:text-base transition-colors"
        >
          Login
        </Link>

        {/* آیکون منو فقط در موبایل */}
        <button
          onClick={toggleMenu}
          className="md:hidden bg-purple-500 p-2 rounded-md hover:bg-purple-700 transition-colors"
        >
          {isMenuOpen ? <X className="w-5 h-5 text-white" /> : <Menu className="w-5 h-5 text-white" />}
        </button>
      </div>

      {/* منوی موبایل */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-black px-6 py-4 flex flex-col gap-4 md:hidden z-50 border-t border-purple-800">
          <Link to="/" onClick={toggleMenu} className="text-purple-400 hover:text-white transition-colors">
            Home
          </Link>
          <Link to="/store" onClick={toggleMenu} className="text-purple-400 hover:text-white transition-colors">
            Store
          </Link>
          <Link to="/about" onClick={toggleMenu} className="text-purple-400 hover:text-white transition-colors">
            About us
          </Link>
          <Link to="/contact" onClick={toggleMenu} className="text-purple-400 hover:text-white transition-colors">
            Contact us
          </Link>
        </div>
      )}
    </header>
  );
}
