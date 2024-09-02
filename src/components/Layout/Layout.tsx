import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow sm:px-6 lg:px-8">{children}</main>
      <Footer />
    </div>
  );
}
