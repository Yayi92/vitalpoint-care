import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { HelpCircle, MessageSquare } from "lucide-react";

const FAQ = () => {
  const faqs = [
    {
      question: "How do I schedule an appointment?",
      answer: "You can schedule an appointment by calling our main number at (555) 123-4567, using our online booking system, or visiting our clinic in person. We offer same-day appointments for urgent matters and regular scheduling for routine care."
    },
    {
      question: "What insurance plans do you accept?",
      answer: "We accept most major insurance plans including Blue Cross Blue Shield, Aetna, Cigna, UnitedHealthcare, and Medicare. Please call our office to verify if your specific plan is accepted before your visit."
    },
    {
      question: "Do you offer emergency services?",
      answer: "Yes, we provide 24/7 emergency care for urgent medical situations. For life-threatening emergencies, please call 911. For urgent but non-life-threatening issues, call our emergency line at (555) 911-HELP."
    },
    {
      question: "What should I bring to my first appointment?",
      answer: "Please bring a valid photo ID, your insurance card, a list of current medications, any relevant medical records, and your co-payment. Arrive 15 minutes early to complete any necessary paperwork."
    },
    {
      question: "How long do appointments typically take?",
      answer: "General check-ups usually take 30-45 minutes. Specialized consultations may take 45-60 minutes. Lab tests and vaccinations are typically completed in 15-30 minutes. We'll inform you of the expected duration when scheduling."
    },
    {
      question: "Do you provide lab results online?",
      answer: "Yes, we offer a secure patient portal where you can access your lab results, medical records, and communicate with your healthcare provider. You'll receive login credentials during your first visit."
    },
    {
      question: "Is parking available at your facility?",
      answer: "Yes, we provide free parking for all patients and visitors. Our parking lot is wheelchair accessible and located directly adjacent to our main entrance for your convenience."
    },
    {
      question: "Can I get prescription refills without an appointment?",
      answer: "Routine prescription refills can often be handled through our patient portal or by calling our pharmacy line. However, some medications may require an appointment or consultation with your provider before refilling."
    },
    {
      question: "Do you offer telemedicine appointments?",
      answer: "Yes, we offer virtual consultations for certain conditions and follow-up appointments. These can be scheduled through our online system or by calling our office. Not all medical issues can be addressed via telemedicine."
    },
    {
      question: "What COVID-19 safety measures do you have in place?",
      answer: "We follow all CDC guidelines including enhanced cleaning protocols, mask requirements when necessary, social distancing in waiting areas, and health screenings. Please call ahead if you're experiencing COVID-19 symptoms."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center mx-auto mb-6">
            <HelpCircle className="h-8 w-8 text-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Find answers to common questions about our services, appointments, and policies. 
            Can't find what you're looking for? Contact us directly.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6 bg-card">
                <AccordionTrigger className="text-left hover:text-primary transition-colors py-6 text-base font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Contact section */}
        <div className="mt-16 text-center">
          <div className="bg-primary-light p-8 rounded-2xl max-w-2xl mx-auto">
            <MessageSquare className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Still Have Questions?
            </h3>
            <p className="text-muted-foreground mb-6">
              Our friendly staff is here to help. Contact us directly for personalized assistance 
              with any questions not covered in our FAQ section.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="medical" size="lg">
                Call Us: (555) 123-4567
              </Button>
              <Button variant="outline" size="lg">
                Send us a Message
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;