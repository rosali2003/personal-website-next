import Header from "./components/Header";
import HeroSection from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Header />
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <Projects />
        <Footer />
      </div>
    </main>
  );
}
