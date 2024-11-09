import { SidebarLinks } from "../Constants/constants";
import { assets } from "../assets/icons/assets";
import { Link } from "react-scroll";
import Portfolio from "../assets/images/p2.jpg";
import Resume from "../assets/PDF/Piraisudan_MERN_Fresher.pdf";
export default function Sidebar() {
  return (
    <div className="h-screen w-[80px] px-2 py-10 top-0 left-0 fixed hidden sm:block border-r border-gray-300 ">
      <div className="flex flex-col justify-between items-center w-full h-full">
        <img src={Portfolio} alt="" className="size-14 rounded-md " />
        <div>
          {SidebarLinks.map((links, index) => (
            <Link
              key={index}
              to={links.route}
              smooth={true}
              duration={950}
              className="w-full"
            >
              <div className="flex flex-col items-center my-4 group cursor-pointer active:bg-opacity-5 p-1 rounded-md hover:bg-gray-3 hover:bg-opacity-15">
                <span className="absolute left-[85px] bg-gray-3 bg-opacity-25 px-2 rounded-md group-hover:scale-100 scale-0 text-white">
                  {links.label}
                </span>
                <img src={links.image} alt={links.label} className="size-8 " />
              </div>
            </Link>
          ))}
        </div>
        <div className=" text-nowrap flex flex-col items-center">
          <a href={Resume} download="Piraisudan_MERN_Fresher_Resume.pdf">
            <button>
              <img
                src={assets.DownloadIcon}
                alt=""
                className="size-9  hover:bg-opacity-15 active:bg-opacity-5 p-1 rounded-md hover:bg-gray-3"
              />
            </button>
          </a>
          <p className="mt-2 font-serif font-medium">CV</p>
        </div>
      </div>
    </div>
  );
}
