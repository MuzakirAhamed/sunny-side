import { useState } from "react";
import Button from "./Button";

export default function NavBar() {
  const [menuCard,setMenuCard] = useState(false)
  function handleMenu(){
    setMenuCard((menuCard)=>!menuCard)
  }
  return (
    <div className="sm:flex sm:justify-between sm:px-10 sm:py-8 px-3 flex justify-between py-6">
      <p className="font-secondary font-black text-slate-50 text-3xl tracking-wide">
        sunnyside
      </p>
      <div className="sm:flex sm:space-x-14">
        <div className={`md:flex md:space-x-12 ${menuCard ? "bg-slate-500 flex flex-col absolute right-8 top-20 w-3/4 z-10" : 'hidden'}`}>
          <Button type={`${menuCard ? "hamburger": "base"}`}>About</Button>
          <Button type={`${menuCard ? "hamburger": "base"}`}>Services</Button>
          <Button type={`${menuCard ? "hamburger": "base"}`}>Projects</Button>
          <Button type={`${menuCard ? "hamburger": "base"}`}>Contact</Button>
        </div>
        <div>
          <button className="md:hidden" onClick={handleMenu}>
            <img src="../Assets/icon-hamburger.svg" />
          </button>
        </div>
      </div>
    </div>
  );
}
