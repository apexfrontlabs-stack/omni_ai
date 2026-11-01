import Navbar from "./Navbar";
import Footer from "./Footer";
export default function PageLayout({ children }) {
  return (
    <>
      <Navbar />
      <main className="min-h-[60vh]">{children}</main>
      <Footer />
    </>
  );
}