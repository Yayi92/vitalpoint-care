import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Stethoscope, 
  Brain, 
  Heart, 
  Eye, 
  Microscope,
  Shield,
  Baby,
  Zap,
  ArrowRight,
  Star
} from "lucide-react";
import premiumTech from "@/assets/premium-tech.jpg";
import premiumConsultation from "@/assets/premium-consultation.jpg";
import premiumLounge from "@/assets/premium-lounge.jpg";

const Services = () => {
  const featuredServices = [
    {
      icon: Heart,
      title: "Cardiology Excellence",
      description: "Advanced heart care with cutting-edge diagnostic technology and personalized treatment plans.",
      features: ["ECG & Echo", "Cardiac Surgery", "Preventive Care"],
      color: "primary"
    },
    {
      icon: Brain,
      title: "Neurology Center",
      description: "Comprehensive neurological care from diagnosis to treatment with state-of-the-art equipment.",
      features: ["Brain Imaging", "Stroke Care", "Memory Clinic"],
      color: "secondary"
    },
    {
      icon: Microscope,
      title: "Advanced Diagnostics",
      description: "Precision testing with rapid results using the latest laboratory and imaging technology.",
      features: ["AI Diagnostics", "Genetic Testing", "3D Imaging"],
      color: "success"
    },
    {
      icon: Eye,
      title: "Vision Center",
      description: "Complete eye care services from routine exams to advanced surgical procedures.",
      features: ["LASIK Surgery", "Retina Care", "Pediatric Eye"],
      color: "primary"
    },
    {
      icon: Baby,
      title: "Pediatric Care",
      description: "Specialized healthcare for children with a child-friendly environment and expert staff.",
      features: ["Well-child Visits", "Immunizations", "Growth Tracking"],
      color: "secondary"
    },
    {
      icon: Zap,
      title: "Emergency Medicine",
      description: "24/7 emergency care with rapid response times and life-saving treatments.",
      features: ["Trauma Care", "Critical Care", "Fast Track"],
      color: "success"
    }
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-background to-accent/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-primary-light px-4 py-2 rounded-full mb-6">
            <Star className="h-4 w-4 text-primary" />
            <span className="text-primary font-semibold text-sm">Premium Services</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            World-Class Medical
            <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Excellence
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Experience unparalleled healthcare with our comprehensive range of specialized services, 
            delivered by expert physicians using cutting-edge technology.
          </p>
        </div>

        {/* Featured Images Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="group relative overflow-hidden rounded-2xl shadow-xl">
            <img src={premiumTech} alt="Advanced Medical Technology" className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <h4 className="text-xl font-bold mb-2">Advanced Technology</h4>
              <p className="text-sm opacity-90">State-of-the-art diagnostic equipment and AI-powered analysis</p>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-2xl shadow-xl">
            <img src={premiumConsultation} alt="Expert Consultation" className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/20 to-transparent"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <h4 className="text-xl font-bold mb-2">Expert Consultation</h4>
              <p className="text-sm opacity-90">Personalized care from board-certified specialists</p>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-2xl shadow-xl">
            <img src={premiumLounge} alt="Luxury Environment" className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-success/90 via-success/20 to-transparent"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <h4 className="text-xl font-bold mb-2">Luxury Environment</h4>
              <p className="text-sm opacity-90">Comfortable, healing-focused spaces designed for wellness</p>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredServices.map((service, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-500 hover:scale-105 bg-gradient-to-br from-background to-accent/20 border-0 shadow-lg overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardHeader className="text-center pb-4 relative z-10">
                <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl flex items-center justify-center shadow-lg transition-transform duration-500 group-hover:scale-110 ${
                  service.color === 'primary' ? 'bg-gradient-to-br from-primary to-primary-dark' :
                  service.color === 'secondary' ? 'bg-gradient-to-br from-secondary to-secondary-dark' :
                  'bg-gradient-to-br from-success to-success'
                }`}>
                  <service.icon className="h-10 w-10 text-white" />
                </div>
                <CardTitle className="text-xl text-foreground font-bold">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-6 relative z-10">
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                <div className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center justify-center gap-3 text-sm">
                      <div className={`w-2 h-2 rounded-full ${
                        service.color === 'primary' ? 'bg-primary' :
                        service.color === 'secondary' ? 'bg-secondary' : 'bg-success'
                      }`}></div>
                      <span className="text-foreground font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full group/btn">
                  Learn More
                  <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 p-12 rounded-3xl border border-accent">
            <Shield className="h-16 w-16 text-primary mx-auto mb-6" />
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Need Specialized Care?
            </h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto text-lg">
              Our multidisciplinary team of specialists work together to provide comprehensive, 
              coordinated care tailored to your unique health needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="premium" size="lg" className="shadow-xl">
                <Stethoscope className="h-5 w-5" />
                Consult a Specialist
              </Button>
              <Button variant="outline" size="lg">
                View All Services
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;