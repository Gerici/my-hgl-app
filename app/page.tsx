import Header from "@/app/components/Header";
import Hero from "@/app/components/Hero";
import BrandMission from "@/app/components/BrandMission";
import HydroponicBenefits from "@/app/components/HydroponicBenefits";
import WhyOurProducts from "@/app/components/WhyOurProducts";
import ProductCategories from "@/app/components/ProductCategories";
import MoreHydroponic from "@/app/components/MoreHydroponic";
import FeaturedProducts from "@/app/components/FeaturedProducts";
import MoreAboutHGL from "@/app/components/MoreAboutHGL";
import DocsSection from "@/app/components/DocsSection";
import Contact from "@/app/components/Contact";
import Footer from "@/app/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <BrandMission />
      <HydroponicBenefits />
      <WhyOurProducts />
      <ProductCategories />
      <MoreHydroponic />
      <FeaturedProducts />
      <MoreAboutHGL />
      <DocsSection />
      <Contact />
    </div>
  );
}