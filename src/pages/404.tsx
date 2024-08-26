import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white text-center">
      <h1 className="text-9xl font-bold tracking-widest text-gray-800">404</h1>
      <h2 className="text-4xl font-normal mt-5 text-gray-800">
        Page Not Found
      </h2>
      <p className="text-lg text-gray-600 mt-2 mb-8">
        The page you are looking for doesn&apos;t exist
      </p>
      <Link
        href="/"
        className="inline-block px-10 py-4 bg-yellow-500 text-white text-base border-2 border-yellow-500 transition-colors duration-300 hover:bg-white hover:text-yellow-500"
      >
        GO HOME
      </Link>
    </div>
  );
}
