import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Stethoscope, 
  TestTube, 
  Shield, 
  Heart, 
  Eye, 
  Thermometer,
  Baby,
  Clock
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Stethoscope,
      title: "General Check-ups",
      description: "Comprehensive health examinations and preventive care to keep you healthy.",
      features: ["Physical Examination", "Health Screening", "Medical Consultation"]
    },
    {
      icon: Shield,
      title: "Vaccinations",
      description: "Complete immunization services for all ages, including travel vaccines.",
      features: ["Childhood Vaccines", "Adult Immunizations", "Travel Medicine"]
    },
    {
      icon: TestTube,
      title: "Laboratory Tests",
      description: "State-of-the-art diagnostic testing with quick and accurate results.",
      features: ["Blood Tests", "Urine Analysis", "Diagnostic Imaging"]
    },
    {
      icon: Heart,
      title: "Cardiology Services",
      description: "Comprehensive heart health services and cardiac care programs.",
      features: ["ECG Testing", "Heart Monitoring", "Cardiac Consultation"]
    },
    {
      icon: Eye,
      title: "Vision Care",
      description: "Complete eye examinations and vision health services.",
      features: ["Eye Exams", "Vision Testing", "Eye Health Screening"]
    },
    {
      icon: Thermometer,
      title: "Urgent Care",
      description: "Quick treatment for non-emergency medical conditions.",
      features: ["Minor Injuries", "Illness Treatment", "Same-day Care"]
    },
    {
      icon: Baby,
      title: "Pediatric Care",
      description: "Specialized healthcare services for infants, children, and adolescents.",
      features: ["Well-child Visits", "Growth Monitoring", "Developmental Care"]
    },
    {
      icon: Clock,
      title: "24/7 Emergency",
      description: "Round-the-clock emergency medical services when you need them most.",
      features: ["Emergency Treatment", "Critical Care", "24/7 Availability"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Medical Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We offer comprehensive healthcare services designed to meet all your medical needs 
            with the highest standards of care and professionalism.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:scale-105 bg-background border">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-muted-foreground">{service.description}</p>
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="text-sm text-muted-foreground flex items-center justify-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      {feature}
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full mt-4">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-primary-light p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Need a Service Not Listed?
            </h3>
            <p className="text-muted-foreground mb-6">
              We offer many additional specialized services. Contact us to discuss your specific healthcare needs.
            </p>
            <Button variant="medical" size="lg">
              Contact Our Team
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;