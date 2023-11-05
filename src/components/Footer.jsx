export default function Footer() {
  return (
    <div className="bg-[#8fe6d4] h-80 flex justify-center items-center">
      <div className="max-w-fit mx-auto flex flex-col space-y-10 items-center">
        <p className="font-secondary font-black text-3xl text-[#0c6b58]">
          sunnyside
        </p>
        <ul className="flex space-x-5 ">
          <li className="cursor-pointer hover:text-slate-50">About</li>
          <li className="cursor-pointer hover:text-slate-50">Services</li>
          <li className="cursor-pointer hover:text-slate-50">Projects</li>
        </ul>
        <ul className="flex space-x-5">
          <li className="cursor-pointer ">
            <img src="../Assets/icon-facebook.svg" className="hover:fill hover:bg-white" />
          </li>
          <li className="cursor-pointer">
            <img src="../Assets/icon-instagram.svg" className="hover:fill hover:bg-white"/>
          </li>
          <li className="cursor-pointer">
            <img src="../Assets/icon-pinterest.svg" className="hover:fill hover:bg-white"/>
          </li>
          <li className="cursor-pointer">
            <img src="../Assets/icon-twitter.svg" className="hover:fill hover:bg-white"/>
          </li>
        </ul>
        <div></div>
      </div>
    </div>
  );
}
