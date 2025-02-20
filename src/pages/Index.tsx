
import Navigation from "@/components/Navigation";
import ServicesSection from "@/components/ServicesSection";
import PricingSection from "@/components/PricingSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import SuccessStoriesSection from "@/components/SuccessStoriesSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Start Your Driving Journey Today
              </h1>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
                Professional driving instruction in Mfuleni, Cape Town. Get your license with experienced instructors and modern vehicles.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" className="bg-primary hover:bg-primary/90"
                  onClick={() => window.location.href = 'https://wa.me/+27825921833'}>
                  Book a Lesson
                  <ArrowRight className="ml-2" size={18} />
                </Button>
                <Button size="lg" variant="outline"
                  onClick={() => window.location.href = '#pricing'}>
                  View Pricing
                </Button>
              </div>
            </div>
            <div className="flex-1">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-3xl" />
                <img
                  src="/zee-hero.jpg"
                  alt="Professional driving instruction"
                  className="relative w-full h-auto rounded-lg shadow-xl animate-float"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <AboutSection />
      <ServicesSection />
      <PricingSection />
      <TestimonialsSection />
      <SuccessStoriesSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
