import { Button } from "@/components/ui/button";
import { Menu, Phone, Clock, MapPin, Calendar, Star, Shield } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-background/95 backdrop-blur-md shadow-lg border-b sticky top-0 z-50">
      <div className="container mx-auto px-4">
        {/* Top bar with contact info */}
        <div className="hidden lg:flex justify-between items-center py-3 text-sm border-b border-accent">
          <div className="flex items-center space-x-8">
            <div className="flex items-center gap-2 text-primary">
              <Phone className="h-4 w-4" />
              <span className="font-medium">(555) 123-4567</span>
            </div>
            <div className="flex items-center gap-2 text-secondary">
              <Clock className="h-4 w-4" />
              <span>Mon-Fri: 8AM-6PM | Emergency: 24/7</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span>123 Medical Plaza, Health City</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-3 w-3 fill-warning text-warning" />
              ))}
              <span className="text-xs ml-1">4.9/5 Rating</span>
            </div>
            <Button variant="appointment" size="sm" className="text-xs">
              Emergency: (555) 911-HELP
            </Button>
          </div>
        </div>

        {/* Main navigation */}
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center shadow-lg">
              <div className="text-white font-bold text-xl">+</div>
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                EliteCare Medical
              </h1>
              <p className="text-sm text-muted-foreground font-medium">Excellence in Healthcare</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a href="#home" className="text-foreground hover:text-primary transition-all duration-300 font-medium relative group">
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#services" className="text-foreground hover:text-primary transition-all duration-300 font-medium relative group">
              Services
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-all duration-300 font-medium relative group">
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#testimonials" className="text-foreground hover:text-primary transition-all duration-300 font-medium relative group">
              Reviews
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-all duration-300 font-medium relative group">
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary transition-all duration-300 group-hover:w-full"></span>
            </a>
            <Button variant="appointment" size="lg" className="shadow-lg">
              <Calendar className="h-4 w-4" />
              Book Appointment
            </Button>
          </nav>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden pb-4 border-t border-accent">
            <div className="flex flex-col space-y-4 pt-4">
              <a href="#home" className="text-foreground hover:text-primary transition-colors font-medium">Home</a>
              <a href="#services" className="text-foreground hover:text-primary transition-colors font-medium">Services</a>
              <a href="#about" className="text-foreground hover:text-primary transition-colors font-medium">About</a>
              <a href="#testimonials" className="text-foreground hover:text-primary transition-colors font-medium">Reviews</a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors font-medium">Contact</a>
              <Button variant="appointment" className="w-full">
                <Calendar className="h-4 w-4" />
                Book Appointment
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;