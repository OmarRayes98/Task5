import { Button } from '@/components/ui/button';
import { dataNavbar } from '@/constants/dataNavbar'
import { IoMenu , IoClose } from "react-icons/io5";

const NavMobileDialog
 = ({logo,isMenuOpen,handleMenuToggle}) => {
  return (
    <div id="nav-dialog" className={`fixed md:hidden  custom-container overflow-x-auto z-10 inset-0 bg-white  py-7 ${isMenuOpen ? '':'hidden'} `}>
    <div id="nav-bar" className="flex justify-between items-center" >
    <a href="" id="brand">
      <img className="h-9 inline" src={logo} alt="logo" />
    </a>

    <div 
     onClick={() => handleMenuToggle((prev) => !prev)}
     className="cursor-pointer text-4xl	 text-primary">
      {isMenuOpen ? (
        <IoClose/>
      ) : (
        <IoMenu/>
      )}
     </div>
     
     </div>

     <ul className="flex flex-col gap-8 my-12 ">
      {
          dataNavbar.map((link)=>(
              <li key={link.id} className="border-y-[1px] border-black py-6 px-5 first:border-0 first:rounded-sm first:bg-[#D7E6EA] ">
              <a href="" className="font-normal text-2xl block hover:text-primary capitalize">
                  {link.title}
              </a>
          </li>
          ))
      }
  
    </ul>

    <div className='mt-16 text-center'>
    <Button className="font-normal h-9 w-[135px]">
      Login
    </Button>
    </div>


    </div>
  )
}

export default NavMobileDialog

