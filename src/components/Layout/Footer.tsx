import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa6";

const getYear = () => new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="bg-[#f2f3f5] text-[#292a34] py-16 px-4 font-sans mt-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <ul className="space-y-4">
            {["OUR STORY", "OUR PRODUCTS", "STORES", "ONLINE ORDER"].map(
              (item, index) => (
                <li key={index}>
                  <Link
                    href={`/${item.toLowerCase().replace(" ", "-")}`}
                    className="text-sm hover:text-[#ff6600] transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>
        <div>
          <ul className="space-y-4">
            {["IN THE PRESS", "EVENTS", "FRANCHISE", "CONTACT US"].map(
              (item, index) => (
                <li key={index}>
                  <Link
                    href={`/${item.toLowerCase().replace(" ", "-")}`}
                    className="text-sm hover:text-[#ff6600] transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>
        <div>
          <p className="text-sm mb-4">GET IN TOUCH</p>
          <div className="flex space-x-4 mb-4">
            <FaFacebookF className="text-xl cursor-pointer hover:text-[#ff6600] transition-colors" />
            <FaInstagram className="text-xl cursor-pointer hover:text-[#ff6600] transition-colors" />
            <FaYoutube className="text-xl cursor-pointer hover:text-[#ff6600] transition-colors" />
          </div>
          <p className="text-sm mt-8 mb-4">CHANGE REGION</p>
          <div className="flex items-center">
            <Image
              src={"/id-flag.png"}
              alt="Indonesia Flag"
              width={24}
              height={16}
              className="mr-2"
            />
            <p className="text-sm">INDONESIA</p>
          </div>
          <p className="text-sm mt-8 mb-4">LANGUAGE</p>
          <div className="flex space-x-2">
            <p className="text-sm font-bold">EN</p>
            <p className="text-sm">ID</p>
          </div>
        </div>
        <div className="flex flex-col justify-end space-y-4">
          <p className="text-sm">
            &copy; {getYear()} JCO DONUT & COFFEE. All Rights Reserved.
          </p>
          <div className="text-sm">
            <Link
              href="/terms"
              className="hover:text-[#ff6600] transition-colors"
            >
              Terms of Use
            </Link>
            <span className="mx-2">|</span>
            <Link
              href="/privacy"
              className="hover:text-[#ff6600] transition-colors"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
