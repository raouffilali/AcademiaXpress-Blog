import { images } from "../constants";
import { AiOutlineTwitter, AiFillHeart } from "react-icons/ai";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { BsTelegram } from "react-icons/bs";

function Footer() {
  return (
    <section className="bg-dark-hard ">
      <footer className="container mx-auto grid grid-cols-10 px-5 py-10 gap-y-10 gap-x-5 md:pt-20 md:grid-cols-12 lg:grid-cols-10 lg:gap-x-10 ">
        {/* 4 col for eache information (services ....)  */}
        {/* col-1 */}
        <div className="col-span-5 md:col-span-4 lg:col-span-2 ">
          <h3 className="text-dark-light  md:text-lg">Product</h3>
          <ul className="text-[#959EAD] text-sm mt-5 space-y-4 md:text-base">
            <li>
              <a href="/">Landing Page</a>
            </li>
            <li>
              <a href="/">Features</a>
            </li>
            <li>
              <a href="/">Documentaion</a>
            </li>
            <li>
              <a href="/">Referal Program</a>
            </li>
            <li>
              <a href="/">Pricing</a>
            </li>
          </ul>
        </div>
        {/* col-2 */}
        <div className="col-span-5 md:col-span-4 lg:col-span-2 ">
          <h3 className="text-dark-light md:text-lg">Services</h3>
          <ul className="text-[#959EAD] text-sm mt-5 space-y-4 md:text-base">
            <li>
              <a href="/">Documentation</a>
            </li>
            <li>
              <a href="/">Design</a>
            </li>
            <li>
              <a href="/">Themes</a>
            </li>
            <li>
              <a href="/">Illustrations</a>
            </li>
            <li>
              <a href="/">UI Kit</a>
            </li>
          </ul>
        </div>
        {/* col-3 */}
        <div className="col-span-5 md:col-span-4 md:col-start-5 lg:col-span-2 lg:col-start-auto">
          <h3 className="text-dark-light md:text-lg">Company</h3>
          <ul className="text-[#959EAD] text-sm mt-5 space-y-4 md:text-base">
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">Terms</a>
            </li>
            <li>
              <a href="/">Privacy</a>
            </li>
            <li>
              <a href="/">Careers</a>
            </li>
          </ul>
        </div>
        {/* col-4 */}
        <div className="col-span-5 md:col-span-4 lg:col-span-2 ">
          <h3 className="text-dark-light md:text-lg">More</h3>
          <ul className="text-[#959EAD] text-sm mt-5 space-y-4 md:text-base">
            <li>
              <a href="/">Documentation</a>
            </li>
            <li>
              <a href="/">License</a>
            </li>
            <li>
              <a href="/">Documentaion</a>
            </li>
            <li>
              <a href="/">Changelog</a>
            </li>
          </ul>
        </div>
        {/* Logo +text+ text */}

        <div className="col-span-10 md:order-first md:col-span-4">
          <img
            src={images.logo1}
            alt="logo image"
            className=" brightness-0 invert w-1/4 md:w-1/2 lg:w-1/2 mx-auto"
          />
          <p className="text-sm text-dark-light text-center mt-4 md:text-left md:text-base lg:text-sm">
            Unlock a fresh perspective on learning through{" "}
            <span className=" text-yellow-500">Academia+</span>
          </p>
          {/*create social Links */}
          <ul className="flex justify-center items-center mt-5 space-x-4 text-gray-300 md:justify-start">
            <li>
              <a href="/">
                <AiOutlineTwitter className="w-6 h-auto" />
              </a>
            </li>
            <li>
              <a href="/">
                <FaFacebookF className="w-6 h-auto" />
              </a>
            </li>
            <li>
              <a href="/">
                <FaInstagram className="w-6 h-auto" />
              </a>
            </li>
            <li>
              <a href="/">
                <FaLinkedinIn className="w-6 h-auto" />
              </a>
            </li>
            <li>
              <a href="/">
                <IoLogoYoutube className="w-6 h-auto" />
              </a>
            </li>
            <li>
              <a href="/">
                <BsTelegram className="w-6 h-auto" />
              </a>
            </li>
          </ul>
        </div>
        {/* Last section in the footer */}
        <div className="hidden md:flex flex-col items-center space-y-4 md:col-span-12  ">
          <div className="bg-primary text-white rounded-full p-3 ">
            <AiFillHeart className="w-7 h-auto " />
          </div>
          <p className="font-bold italic text-dark-light">
            © 2023 Academia+. All rights reserved.
          </p>
        </div>
      </footer>
    </section>
  );
}

export default Footer;
