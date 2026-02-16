import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logos/logo.png";

export default function Navbar(){

  const [menuOpen,setMenuOpen]=useState(false);
  const [dropdownOpen,setDropdownOpen]=useState(false);

  const closeAll=()=>{
    setMenuOpen(false);
    setDropdownOpen(false);
  }

  const linkClass=({isActive}) =>
    `relative py-2 transition-colors
     ${isActive?"text-red-500":"text-gray-900"}
     hover:text-red-500`;

  return(

<header className="bg-white sticky top-0 z-50 shadow-sm">

  <div className="w-full px-8 lg:px-14 py-4 flex items-center">

    {/* LOGO */}
    <div className="flex-shrink-0">
      <img src={logo} className="h-[60px] lg:h-[72px] object-contain"/>
    </div>

    {/* RIGHT SIDE (push menu right) */}
    <div className="flex-1 flex justify-end">

      {/* HAMBURGER */}
      <button
        className="lg:hidden flex flex-col gap-1 ml-auto"
        onClick={()=>setMenuOpen(!menuOpen)}
      >
        <span className="w-6 h-[2px] bg-gray-800"/>
        <span className="w-6 h-[2px] bg-gray-800"/>
        <span className="w-6 h-[2px] bg-gray-800"/>
      </button>

      {/* MENU */}
      <nav className={`absolute lg:static top-full left-0 w-full lg:w-auto
          bg-white lg:bg-transparent
          flex flex-col lg:flex-row
          lg:items-center gap-5 lg:gap-8
          px-6 lg:px-0 py-6 lg:py-0
          border-t lg:border-none
          ${menuOpen?"flex":"hidden lg:flex"}`}>


      <NavLink to="/home" className={linkClass} onClick={closeAll}>Home</NavLink>

      <NavLink to="/about" className={linkClass} onClick={closeAll}>
        About Us
      </NavLink>

      {/* DROPDOWN */}
      <div
        className="relative"
        onMouseEnter={()=>setDropdownOpen(true)}
        onMouseLeave={()=>setDropdownOpen(false)}
      >

        <button
          onClick={()=>setDropdownOpen(!dropdownOpen)}
          className="py-2 text-gray-900 hover:text-red-500"
        >
          Colleges ▾
        </button>

        <div className={`lg:absolute lg:top-full lg:left-0
          bg-white shadow-md border lg:min-w-[180px]
          flex flex-col
          ${dropdownOpen?"block":"hidden"}`}>

          {[
            ["IBMR","/ibmr"],
            ["ISR","/isr"],
            ["COC","/coc"],
            ["COL","/col"],
            ["SOC","/soc"],
            ["IFT","/ift"],
            ["IOHM","/iohm"],
            ["COE","/coe"],
            ["DOSS","/doss"],
          ].map(([name,path])=>(
            <NavLink
              key={path}
              to={path}
              onClick={closeAll}
              className="px-4 py-2 hover:bg-red-500 hover:text-white"
            >
              {name}
            </NavLink>
          ))}

        </div>

      </div>

      <NavLink to="/placements" className={linkClass} onClick={closeAll}>
        Placements
      </NavLink>

      <NavLink to="/activities" className={linkClass} onClick={closeAll}>
        Student Life
      </NavLink>

      <NavLink to="/facilities" className={linkClass} onClick={closeAll}>
        Facilities
      </NavLink>

      <NavLink to="/contact" className={linkClass} onClick={closeAll}>
        Contact Us
      </NavLink>

    </nav>
    </div>

  </div>

</header>

  );
}
