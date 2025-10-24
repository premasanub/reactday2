import React from 'react';

const Header = () => {
    return (
        <div>
          <nav className="flex flex-row justify-between items-center gap-2 h-16 md:h-[119px] w-full max-w-[1440px] mx-auto px-4">
  <img src="assets/logo.png" alt="logo" className="h-16 md:h-auto w-auto" />
  <div className="hidden md:flex flex-row items-center gap-5 md:gap-10 lg:gap-24">
    <div className="flex gap-4 lg:gap-8 justify-between">
      <p className="text-lg lg:text-xl hover:underline hover:cursor-pointer hover:text-[#0E38CD]">
        Home
      </p>
      <p className="text-lg lg:text-xl hover:underline hover:cursor-pointer hover:text-[#0E38CD]">
        About
      </p>
      <p className="text-lg lg:text-xl hover:underline hover:cursor-pointer hover:text-[#0E38CD]">
        Courses
      </p>
      <p className="text-lg lg:text-xl hover:underline hover:cursor-pointer hover:text-[#0E38CD]">
        Contact
      </p>
    </div>
    <div className="flex gap-4 lg:gap-7 relative">
      <img className="w-4 lg:w-6 h-4 lg:h-6" src="assets/cart_2.svg" alt="Cart" />
      <div className="flex items-center justify-center absolute top-[-5px] lg:top-[-10px] left-2 lg:left-3 h-3 lg:h-5 w-3 lg:w-5 rounded-full bg-[#2AAA94] text-[10px] text-white text-center text font-normal">
        0
      </div>
      <img className="w-4 lg:w-6 h-4 lg:h-6" src="assets/profile.svg" alt="Profile" />
      <img className="w-4 lg:w-6 h-4 lg:h-6" src="assets/search.svg" alt="Search" />
    </div>
    <div className="font-Saira flex gap-3">
      <button className="text-lg lg:text-xl font-medium px-6 lg:px-9 h-12 lg:h-[60px] text-[#4A4A4A] underline underline-offset-4 focus:outline-none">
        Login
      </button>
      <button className="text-lg lg:text-xl font-medium px-3 md:px-6 lg:px-9 text-white h-12 lg:h-[60px] bg-gradient-to-br from-[#083F9B] to-[#7F56D9] rounded-lg">
        Signup
      </button>
    </div>
  </div>
  <img src="assets/hamburger_menu.svg" className="flex md:hidden h-10 w-10 p-2" alt="menu" />
</nav>

        </div>
    );
};

export default Header;