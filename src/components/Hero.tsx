import { Button } from "@/components/ui/button";
import { Calendar, Shield, Heart, CheckCircle } from "lucide-react";
import heroImage from "@/assets/medical-hero.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-br from-primary-light to-secondary-light">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
                Your Health,
                <span className="text-primary"> Our Priority</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Providing exceptional healthcare services with compassion, expertise, and dedication. 
                We're committed to your wellness journey with state-of-the-art facilities and 
                personalized care.
              </p>
            </div>

            {/* Mission statement highlights */}
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary" />
                <span className="text-foreground font-medium">Trusted Care</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="h-5 w-5 text-secondary" />
                <span className="text-foreground font-medium">Compassionate Service</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-success" />
                <span className="text-foreground font-medium">Expert Treatment</span>
              </div>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="appointment" size="lg" className="text-lg px-8 py-6">
                <Calendar className="h-5 w-5" />
                Book Appointment Now
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                Learn More About Us
              </Button>
            </div>

            {/* Quick stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">15+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-secondary">10,000+</div>
                <div className="text-sm text-muted-foreground">Happy Patients</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-success">24/7</div>
                <div className="text-sm text-muted-foreground">Emergency Care</div>
              </div>
            </div>
          </div>

          {/* Right content - Hero image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={heroImage}
                alt="Modern Healthcare Facility"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Floating appointment card */}
            <div className="absolute -bottom-6 -left-6 bg-background p-6 rounded-xl shadow-xl border">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <Calendar className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">Quick Booking</div>
                  <div className="text-sm text-muted-foreground">Available today</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;