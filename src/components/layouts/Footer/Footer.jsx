import logo from "../../../assets/images/logo.png"
const Footer = () => {
  return (

<footer className="custom-container">
    <div className="py-6 lg:py-8">
        <div className="md:flex gap-8 md:gap-14">
          <div className="mb-6 md:mb-0">
              <a href="" className="flex items-center mb-6">
                  <img src={logo} className="h-12 md:h-14 me-3" alt="Flora Logo" />
              </a>
              <p className="opacity-50 max-w-[350px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet tempus
              felis vitae sit est quisque
              </p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Resources</h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                      <li className="mb-4">
                          <a href="https://flowbite.com/" className="hover:underline">Flowbite</a>
                      </li>
                      <li className="mb-4">
                          <a href="https://github.com/themesberg/flowbite" className="hover:underline ">Github</a>
                      </li>
                      <li>
                          <a href="https://tailwindcss.com/" className="hover:underline">Tailwind CSS</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow us</h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                      <li className="mb-4">
                          <a href="https://github.com/themesberg/flowbite" className="hover:underline ">Github</a>
                      </li>
                      <li className="mb-4">
                          <a href="https://github.com/themesberg/flowbite" className="hover:underline ">Github</a>
                      </li>
                      <li>
                          <a href="https://discord.gg/4eeurUVvTy" className="hover:underline">Discord</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                      <li className="mb-4">
                          <a href="#" className="hover:underline">Privacy Policy</a>
                      </li>
                      <li className="mb-4">
                          <a href="https://github.com/themesberg/flowbite" className="hover:underline ">Github</a>
                      </li>
                      <li>
                          <a href="#" className="hover:underline">Terms &amp; Conditions</a>
                      </li>
                  </ul>
              </div>
          </div>
      </div>

      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div className="sm:flex sm:items-center sm:justify-between font-normal ">
          <span className="text-sm text-black sm:text-center  ">© 2023 flora . All Rights Reserved.
          </span>
          <div className=" flex items-center mt-2 md:mt-0 gap-8 text-sm text-black sm:text-center ">
            <span>
            Terms & Conditions 
            </span>
            <span>
            Privacy Policy
            </span>
          </div>

      </div>
    </div>
</footer>

  )
}

export default Footer
