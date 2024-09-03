import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { FaShoppingCart, FaUser, FaSignOutAlt } from "react-icons/fa";
import { useAtomValue, useSetAtom } from "jotai";
import { cartCountAtom } from "@/shared/store/cartAtoms";
import { isAuthenticatedAtom, userAtom, logoutAtom } from "@/shared/store/authAtoms";

export default function Navbar() {
  const router = useRouter();
  const isAuthenticated = useAtomValue(isAuthenticatedAtom);
  const cartItemCount = useAtomValue(cartCountAtom);
  const user = useAtomValue(userAtom);
  const logout = useSetAtom(logoutAtom);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (pathname: string) => router.pathname === pathname;

  const handleLogout = () => {
    logout();
    router.push("/");
  };

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-center">
        <Link href="/" className="mb-4 sm:mb-0">
          <Image src="/new_jco_logo.png" alt="JCO Logo" width={72} height={72} />
        </Link>
        <ul className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-8 items-center">
          {["ABOUT", "PRODUCTS"].map((item) => (
            <li key={item}>
              <Link
                href={`/${item.toLowerCase()}`}
                className={`font-medium transition-colors ${
                  isActive(`/${item.toLowerCase()}`) ? "text-[#ff6600]" : "text-gray-800 hover:text-[#ff6600]"
                }`}
              >
                {item}
              </Link>
            </li>
          ))}
          {isAuthenticated ? (
            <>
              <li>
                <Link href="/cart" className="relative p-2">
                  <FaShoppingCart className="text-2xl text-gray-800 hover:text-[#ff6600] transition-colors inline" />
                  {cartItemCount > 0 && (
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                      {cartItemCount}
                    </span>
                  )}
                </Link>
              </li>
              <li className="relative group">
                <button
                  className="bg-[#ff6600] text-white px-4 py-2 rounded-full hover:bg-[#e55c00] transition-colors flex items-center"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  <FaUser className="mr-2" />
                  <span className="max-w-[100px] truncate">{user?.username || "User"}</span>
                </button>
                <div
                  className={`absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 transition-all duration-300 ${
                    isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
                  }`}
                >
                  <button
                    onClick={handleLogout}
                    className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                  >
                    <FaSignOutAlt className="mr-2" />
                    Logout
                  </button>
                </div>
              </li>
            </>
          ) : (
            <li>
              <Link
                href="/login"
                className="bg-[#ff6600] text-white px-4 py-2 rounded-full hover:bg-[#e55c00] transition-colors flex items-center"
              >
                <FaUser className="mr-2" />
                Login
              </Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}
