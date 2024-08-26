import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Navbar() {
  const router = useRouter();

  const isActive = (pathname: string) => router.pathname === pathname;

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-center">
        <Link href="/" className="mb-4 sm:mb-0">
          <Image
            src={"/new_jco_logo.png"}
            alt="JCO Logo"
            width={72}
            height={72}
          />
        </Link>
        <ul className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-8 text-center">
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
        </ul>
      </div>
    </nav>
  );
}
