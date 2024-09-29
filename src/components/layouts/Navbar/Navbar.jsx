
import { useState } from "react";
import logo from "../../../assets/images/logo.png";
import { IoMenu , IoClose } from "react-icons/io5";
import { dataNavbar } from "@/constants/dataNavbar";
import { Button } from "../../ui/button";
import NavMobileDialog from "./NavMobileDialog";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuToggle = () => {
      setIsMenuOpen((prev) => !prev);
    };


  return (
    <nav className="bg-custom-bg custom-container py-7  flex items-center justify-between">
      <a href="" id="brand">
        <img className="h-9 md:h-14 inline" src={logo} alt="logo" />
      </a>

       <div 
       onClick={() => handleMenuToggle((prev) => !prev)}
       className="cursor-pointer  md:hidden text-4xl	  text-primary">
        {isMenuOpen ? (
          <IoClose />
        ) : (
          <IoMenu />
        )}
       </div>

      <ul className="hidden md:flex gap-12">
        {
            dataNavbar.map((link)=>(
                <li key={link.id} className="">
                <a href="" className="font-medium hover:text-primary capitalize">
                    {link.title}
                </a>
            </li>
            ))
        }
    
      </ul>
      <Button className="hidden md:flex font-normal h-9 w-[135px] ">
        Login
      </Button>

      <NavMobileDialog logo={logo}isMenuOpen={isMenuOpen} handleMenuToggle={handleMenuToggle}/>

    </nav>
  );
}

export default Navbar
