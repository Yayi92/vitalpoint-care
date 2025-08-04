import PremiumHeader from "@/components/PremiumHeader";
import PremiumHero from "@/components/PremiumHero";
import PremiumServices from "@/components/PremiumServices";
import Schedule from "@/components/Schedule";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import AppointmentForm from "@/components/AppointmentForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <PremiumHeader />
      <PremiumHero />
      <PremiumServices />
      <Schedule />
      <Testimonials />
      <FAQ />
      <AppointmentForm />
      <Footer />
    </div>
  );
};

export default Index;
