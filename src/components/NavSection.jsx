import NavBar from "./NavBar";

export default function NavSection() {
  return (
    <div className="sm:max-w-full sm:h-screen bg-[url('../Assets/image-header.jpg')] sm:bg-cover w-screen h-screen bg-cover bg-center">
        <NavBar/>
        <p className="font-secondary font-black tracking-widest text-slate-50 text-center text-5xl mt-20">WE ARE CREATIVES</p>
        <img src="../Assets/icon-arrow-down.svg" className="block mx-auto sm:my-28 h-24 my-10"/>
    </div>
  )
}
