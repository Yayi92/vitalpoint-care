import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Heart, 
  Shield, 
  Stethoscope,
  Facebook,
  Twitter,
  Instagram,
  Linkedin
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">+</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">HealthCare Center</h3>
                <p className="text-background/70 text-sm">Your health, our priority</p>
              </div>
            </div>
            <p className="text-background/80 leading-relaxed">
              Providing exceptional healthcare services with compassion, expertise, and dedication. 
              We're committed to your wellness journey with state-of-the-art facilities.
            </p>
            <div className="flex items-center space-x-4">
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-primary" />
                <span className="text-sm">Trusted Care</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="h-4 w-4 text-secondary" />
                <span className="text-sm">Compassionate</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <nav className="space-y-3">
              <a href="#home" className="block hover:text-primary transition-colors">Home</a>
              <a href="#services" className="block hover:text-primary transition-colors">Our Services</a>
              <a href="#appointment" className="block hover:text-primary transition-colors">Book Appointment</a>
              <a href="#testimonials" className="block hover:text-primary transition-colors">Patient Reviews</a>
              <a href="#about" className="block hover:text-primary transition-colors">About Us</a>
              <a href="#contact" className="block hover:text-primary transition-colors">Contact</a>
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Our Services</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Stethoscope className="h-4 w-4 text-primary" />
                <span className="text-sm">General Check-ups</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-primary" />
                <span className="text-sm">Vaccinations</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="h-4 w-4 text-secondary" />
                <span className="text-sm">Cardiology Services</span>
              </div>
              <div className="text-sm text-background/70">Laboratory Tests</div>
              <div className="text-sm text-background/70">Urgent Care</div>
              <div className="text-sm text-background/70">24/7 Emergency</div>
            </div>
          </div>

          {/* Contact & Newsletter */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="text-sm">123 Health Street</p>
                  <p className="text-sm text-background/70">Medical City, MC 12345</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary" />
                <span className="text-sm">(555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary" />
                <span className="text-sm">info@healthcarecenter.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-primary" />
                <span className="text-sm">Mon-Fri: 8AM-6PM</span>
              </div>
            </div>

            {/* Newsletter */}
            <div className="space-y-3">
              <h5 className="font-medium">Stay Updated</h5>
              <p className="text-sm text-background/70">Get health tips and updates</p>
              <div className="flex gap-2">
                <Input 
                  placeholder="Your email" 
                  className="bg-background/10 border-background/20 text-background placeholder:text-background/50"
                />
                <Button variant="secondary" size="sm">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-background/20" />

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-background/70">
            © 2024 HealthCare Center. All rights reserved.
          </div>
          
          <div className="flex items-center space-x-6">
            <a href="#" className="text-background/70 hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-background/70 hover:text-primary transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-background/70 hover:text-primary transition-colors">
              HIPAA Notice
            </a>
          </div>

          {/* Social Media */}
          <div className="flex items-center space-x-4">
            <a href="#" className="text-background/70 hover:text-primary transition-colors">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="#" className="text-background/70 hover:text-primary transition-colors">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#" className="text-background/70 hover:text-primary transition-colors">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" className="text-background/70 hover:text-primary transition-colors">
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* Emergency notice */}
        <div className="mt-8 p-4 bg-destructive/20 border border-destructive/30 rounded-lg text-center">
          <p className="text-sm">
            <span className="font-semibold">Emergency:</span> For life-threatening situations, call 911 immediately. 
            For urgent medical needs, call our emergency line: (555) 911-HELP
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;