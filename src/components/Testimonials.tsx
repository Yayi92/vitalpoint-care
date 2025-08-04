import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      age: 34,
      rating: 5,
      text: "The staff at HealthCare Center is absolutely wonderful. They made me feel comfortable during my appointment and took the time to explain everything thoroughly. Dr. Smith was very knowledgeable and caring.",
      service: "General Check-up"
    },
    {
      name: "Michael Chen",
      age: 45,
      rating: 5,
      text: "I've been coming here for over 3 years now, and the quality of care is consistently excellent. The facility is always clean, and the staff is professional and friendly. Highly recommend!",
      service: "Cardiology Services"
    },
    {
      name: "Emma Williams",
      age: 28,
      rating: 5,
      text: "As a new mom, I was nervous about my baby's first check-up. The pediatric team was amazing with my little one and answered all my questions patiently. Thank you for the exceptional care!",
      service: "Pediatric Care"
    },
    {
      name: "Robert Martinez",
      age: 52,
      rating: 5,
      text: "The lab tests were done quickly and efficiently. I received my results the same day via their patient portal. The whole process was smooth and stress-free. Great service!",
      service: "Laboratory Tests"
    },
    {
      name: "Lisa Anderson",
      age: 41,
      rating: 5,
      text: "I had an emergency situation late at night, and the staff was incredibly responsive and professional. They provided excellent care when I needed it most. I'm so grateful!",
      service: "Emergency Care"
    },
    {
      name: "David Thompson",
      age: 38,
      rating: 5,
      text: "The vaccination process was quick and painless. The nurse was very skilled and made sure I was comfortable throughout. I'll definitely be back for my annual check-up.",
      service: "Vaccinations"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Our Patients Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our valued patients have to say 
            about their experience with HealthCare Center.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-background hover:shadow-lg transition-all duration-300 hover:scale-105">
              <CardContent className="p-6">
                <div className="space-y-4">
                  {/* Quote icon */}
                  <Quote className={`h-8 w-8 ${
                    index % 3 === 0 ? 'text-primary' : 
                    index % 3 === 1 ? 'text-secondary' : 'text-accent-blue'
                  }`} />
                  
                  {/* Rating stars */}
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-warning text-warning" />
                    ))}
                  </div>

                  {/* Testimonial text */}
                  <p className="text-muted-foreground leading-relaxed">
                    "{testimonial.text}"
                  </p>

                  {/* Service type */}
                  <div className={`inline-block px-3 py-1 text-sm rounded-full ${
                    index % 3 === 0 ? 'bg-primary-light text-primary' : 
                    index % 3 === 1 ? 'bg-secondary-light text-secondary' : 'bg-accent text-accent-foreground'
                  }`}>
                    {testimonial.service}
                  </div>

                  {/* Patient info */}
                  <div className="border-t pt-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-semibold text-foreground">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">Age {testimonial.age}</p>
                      </div>
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                        index % 3 === 0 ? 'bg-primary' : 
                        index % 3 === 1 ? 'bg-secondary' : 'bg-accent-blue'
                      }`}>
                        <span className="text-white font-semibold">
                          {testimonial.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="mt-16 grid md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-primary mb-2">4.9/5</div>
            <p className="text-muted-foreground">Average Rating</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-secondary mb-2">2,500+</div>
            <p className="text-muted-foreground">Patient Reviews</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-success mb-2">98%</div>
            <p className="text-muted-foreground">Satisfaction Rate</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-warning mb-2">95%</div>
            <p className="text-muted-foreground">Would Recommend</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;