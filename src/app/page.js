import About from "@/components/about";
import Blog from "@/components/blog";
import Categories from "@/components/Categories";
import Hero from "@/components/hero";
import Navbar from "@/components/Navbar";
import Offer from "@/components/offer";
import OurProjects from "@/components/projects";
import SayClient from "@/components/sayClient";

export default function Home() {
  return (
    <div className="w-full">
      <Navbar />
      <Hero />
      <Categories />
      <About />
      <Offer />
      <OurProjects />
      <SayClient />
      <Blog />
    </div>
  );
}
