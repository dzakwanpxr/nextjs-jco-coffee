import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { FaShoppingCart, FaUser } from "react-icons/fa";

export default function Navbar() {
  const router = useRouter();

  const isActive = (pathname: string) => router.pathname === pathname;

  const cartItemCount = 3;

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-center ">
        <Link href="/" className="mb-4 sm:mb-0">
          <Image
            src={"/new_jco_logo.png"}
            alt="JCO Logo"
            width={72}
            height={72}
          />
        </Link>
        <ul className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-8 text-center items-center">
          {["ABOUT", "PRODUCTS"].map((item, index) => (
            <li key={index}>
              <Link
                href={`/${item.toLowerCase()}`}
                className={`font-medium transition-colors ${
                  isActive(`/${item.toLowerCase()}`)
                    ? "text-[#ff6600]"
                    : "text-gray-800 hover:text-[#ff6600]"
                }`}
              >
                {item}
              </Link>
            </li>
          ))}
          <li>
            <Link href="/cart" className="relative p-2">
              <FaShoppingCart className="text-2xl text-gray-800 hover:text-[#ff6600] inline" />
              {cartItemCount > 0 && (
                <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {cartItemCount}
                </span>
              )}
            </Link>
          </li>
          <li>
            <button className="bg-[#ff6600] text-white px-4 py-2 rounded-full hover:bg-[#e55c00] transition-colors flex items-center">
              <FaUser className="mr-2" />
              Login
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
