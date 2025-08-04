import { Button } from "@/components/ui/button";
import { Calendar, Shield, Heart, CheckCircle, Play, Award, Star } from "lucide-react";
import premiumHero from "@/assets/premium-hero.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Advanced Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${premiumHero})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-secondary/10"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-secondary/20"></div>
      </div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-gradient-to-tr from-secondary/15 to-primary/15 rounded-full blur-2xl animate-pulse delay-1000"></div>
      </div>
      
      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div className="space-y-8">
            {/* Trust badges */}
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center gap-2 bg-success-light px-4 py-2 rounded-full">
                <Shield className="h-4 w-4 text-success" />
                <span className="text-success font-semibold text-sm">Certified Excellence</span>
              </div>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-warning text-warning" />
                ))}
                <span className="text-sm font-medium ml-1">4.9/5 Rating</span>
              </div>
            </div>

            <div className="space-y-6">
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                <span className="block text-foreground">Premium</span>
                <span className="block bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
                  Healthcare
                </span>
                <span className="block text-foreground">Excellence</span>
              </h1>
              <p className="text-xl text-foreground/80 leading-relaxed max-w-xl">
                Experience world-class medical care with cutting-edge technology, 
                compassionate professionals, and personalized treatment plans designed 
                around your unique health journey.
              </p>
            </div>

            {/* Value propositions */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-4 bg-primary-light rounded-xl">
                <Shield className="h-6 w-6 text-primary" />
                <div>
                  <div className="font-semibold text-foreground">Advanced Care</div>
                  <div className="text-sm text-muted-foreground">Latest technology</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-secondary-light rounded-xl">
                <Heart className="h-6 w-6 text-secondary" />
                <div>
                  <div className="font-semibold text-foreground">Compassionate</div>
                  <div className="text-sm text-muted-foreground">Patient-centered</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-success-light rounded-xl">
                <CheckCircle className="h-6 w-6 text-success" />
                <div>
                  <div className="font-semibold text-foreground">Proven Results</div>
                  <div className="text-sm text-muted-foreground">10,000+ patients</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-accent rounded-xl">
                <Award className="h-6 w-6 text-accent-blue" />
                <div>
                  <div className="font-semibold text-foreground">Award Winning</div>
                  <div className="text-sm text-muted-foreground">15+ years excellence</div>
                </div>
              </div>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button variant="appointment" size="lg" className="text-lg px-8 py-6 shadow-xl">
                <Calendar className="h-5 w-5" />
                Schedule Consultation
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 group">
                <Play className="h-5 w-5 group-hover:scale-110 transition-transform" />
                Watch Our Story
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-4 gap-6 pt-8 border-t border-accent">
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">15+</div>
                <div className="text-sm text-muted-foreground font-medium">Years Excellence</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">25k+</div>
                <div className="text-sm text-muted-foreground font-medium">Happy Patients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-success">24/7</div>
                <div className="text-sm text-muted-foreground font-medium">Emergency Care</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-warning">4.9★</div>
                <div className="text-sm text-muted-foreground font-medium">Patient Rating</div>
              </div>
            </div>
          </div>

          {/* Right content - Enhanced visual */}
          <div className="relative">
            {/* Main hero card */}
            <div className="relative bg-gradient-to-br from-background/60 to-background/40 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-accent">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold text-foreground">Quick Booking</h3>
                  <div className="w-3 h-3 bg-success rounded-full animate-pulse"></div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
                      <Calendar className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">Same Day Available</div>
                      <div className="text-sm text-muted-foreground">Book in under 2 minutes</div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3">
                    <Button variant="premium" className="w-full">
                      General Care
                    </Button>
                    <Button variant="secondary" className="w-full">
                      Specialist
                    </Button>
                  </div>
                  
                  <Button variant="appointment" className="w-full">
                    Book Now - Free Consultation
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Floating trust indicators */}
            <div className="absolute -top-6 -right-6 bg-background rounded-xl p-4 shadow-lg border">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-success rounded-full flex items-center justify-center">
                  <CheckCircle className="h-4 w-4 text-white" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">Verified</div>
                  <div className="text-xs text-muted-foreground">Medical Center</div>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-background rounded-xl p-4 shadow-lg border">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <Award className="h-4 w-4 text-white" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">Award Winner</div>
                  <div className="text-xs text-muted-foreground">Best Healthcare 2024</div>
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