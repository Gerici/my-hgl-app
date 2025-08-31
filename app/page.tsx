import Hero from "@/app/components/Hero";
import Benefits from "@/app/components/Benefits";
import FeaturedProducts from "@/app/components/FeaturedProducts";
import ProductCategories from "@/app/components/ProductCategories";
import About from "@/app/components/About";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <Benefits />
      <ProductCategories />
      <FeaturedProducts />
      <About />
    </div>
  );
}