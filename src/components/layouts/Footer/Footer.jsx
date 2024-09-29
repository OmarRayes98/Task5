import logo from "../../../assets/images/logo.png"
const Footer = () => {
  return (

<footer class="custom-container">
    <div class="py-6 lg:py-8">
        <div class="md:flex gap-8 md:gap-14">
          <div class="mb-6 md:mb-0">
              <a href="" class="flex items-center mb-6">
                  <img src={logo} class="h-12 md:h-14 me-3" alt="Flora Logo" />
              </a>
              <p className="opacity-50 max-w-[350px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet tempus
              felis vitae sit est quisque
              </p>
          </div>
          <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                  <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Resources</h2>
                  <ul class="text-gray-500 dark:text-gray-400 font-medium">
                      <li class="mb-4">
                          <a href="https://flowbite.com/" class="hover:underline">Flowbite</a>
                      </li>
                      <li class="mb-4">
                          <a href="https://github.com/themesberg/flowbite" class="hover:underline ">Github</a>
                      </li>
                      <li>
                          <a href="https://tailwindcss.com/" class="hover:underline">Tailwind CSS</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow us</h2>
                  <ul class="text-gray-500 dark:text-gray-400 font-medium">
                      <li class="mb-4">
                          <a href="https://github.com/themesberg/flowbite" class="hover:underline ">Github</a>
                      </li>
                      <li class="mb-4">
                          <a href="https://github.com/themesberg/flowbite" class="hover:underline ">Github</a>
                      </li>
                      <li>
                          <a href="https://discord.gg/4eeurUVvTy" class="hover:underline">Discord</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
                  <ul class="text-gray-500 dark:text-gray-400 font-medium">
                      <li class="mb-4">
                          <a href="#" class="hover:underline">Privacy Policy</a>
                      </li>
                      <li class="mb-4">
                          <a href="https://github.com/themesberg/flowbite" class="hover:underline ">Github</a>
                      </li>
                      <li>
                          <a href="#" class="hover:underline">Terms &amp; Conditions</a>
                      </li>
                  </ul>
              </div>
          </div>
      </div>

      <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div class="sm:flex sm:items-center sm:justify-between font-normal ">
          <span class="text-sm text-black sm:text-center  ">© 2023 flora . All Rights Reserved.
          </span>
          <div class=" flex items-center mt-2 md:mt-0 gap-8 text-sm text-black sm:text-center ">
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
