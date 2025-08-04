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
import labEquipment from "@/assets/lab-equipment.jpg";
import medicalTeam from "@/assets/medical-team.jpg";
import consultation from "@/assets/consultation.jpg";
import waitingRoom from "@/assets/waiting-room.jpg";

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

        {/* Featured images section */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          <div className="relative group overflow-hidden rounded-xl">
            <img src={medicalTeam} alt="Medical Team" className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <h4 className="font-semibold">Expert Team</h4>
              <p className="text-sm">Professional healthcare staff</p>
            </div>
          </div>
          <div className="relative group overflow-hidden rounded-xl">
            <img src={labEquipment} alt="Laboratory Equipment" className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-accent-blue/80 to-transparent"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <h4 className="font-semibold">Advanced Lab</h4>
              <p className="text-sm">State-of-the-art testing</p>
            </div>
          </div>
          <div className="relative group overflow-hidden rounded-xl">
            <img src={consultation} alt="Medical Consultation" className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <h4 className="font-semibold">Consultations</h4>
              <p className="text-sm">Personalized care plans</p>
            </div>
          </div>
          <div className="relative group overflow-hidden rounded-xl">
            <img src={waitingRoom} alt="Comfortable Waiting Area" className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-secondary-dark/80 to-transparent"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <h4 className="font-semibold">Comfort</h4>
              <p className="text-sm">Relaxing environment</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:scale-105 bg-background border">
              <CardHeader className="text-center pb-4">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
                  index % 3 === 0 ? 'bg-primary-light' : 
                  index % 3 === 1 ? 'bg-secondary-light' : 'bg-accent'
                }`}>
                  <service.icon className={`h-8 w-8 ${
                    index % 3 === 0 ? 'text-primary' : 
                    index % 3 === 1 ? 'text-secondary' : 'text-accent-foreground'
                  }`} />
                </div>
                <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-muted-foreground">{service.description}</p>
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="text-sm text-muted-foreground flex items-center justify-center gap-2">
                      <div className={`w-1.5 h-1.5 rounded-full ${
                        index % 3 === 0 ? 'bg-primary' : 
                        index % 3 === 1 ? 'bg-secondary' : 'bg-accent-blue'
                      }`}></div>
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