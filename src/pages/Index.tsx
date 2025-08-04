import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Schedule from "@/components/Schedule";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import AppointmentForm from "@/components/AppointmentForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Services />
      <Schedule />
      <Testimonials />
      <FAQ />
      <AppointmentForm />
      <Footer />
    </div>
  );
};

export default Index;
