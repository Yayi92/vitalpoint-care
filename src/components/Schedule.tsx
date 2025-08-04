import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, MapPin, Phone, Calendar } from "lucide-react";

const Schedule = () => {
  const hours = [
    { day: "Monday", time: "8:00 AM - 6:00 PM" },
    { day: "Tuesday", time: "8:00 AM - 6:00 PM" },
    { day: "Wednesday", time: "8:00 AM - 6:00 PM" },
    { day: "Thursday", time: "8:00 AM - 6:00 PM" },
    { day: "Friday", time: "8:00 AM - 6:00 PM" },
    { day: "Saturday", time: "9:00 AM - 4:00 PM" },
    { day: "Sunday", time: "Closed" }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Visit Us Today
          </h2>
          <p className="text-xl text-muted-foreground">
            We're here when you need us. Check our hours and location details below.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Operating Hours */}
          <Card className="bg-primary-light border-primary/20">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-primary-foreground" />
              </div>
              <CardTitle className="text-xl text-foreground">Operating Hours</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {hours.map((schedule, index) => (
                <div key={index} className="flex justify-between items-center py-2 border-b border-primary/10 last:border-b-0">
                  <span className="font-medium text-foreground">{schedule.day}</span>
                  <span className={`text-sm ${schedule.day === 'Sunday' ? 'text-muted-foreground' : 'text-primary'}`}>
                    {schedule.time}
                  </span>
                </div>
              ))}
              <div className="mt-6 p-4 bg-background rounded-lg">
                <div className="flex items-center gap-2 text-destructive">
                  <Calendar className="h-4 w-4" />
                  <span className="font-medium text-sm">Emergency Care: 24/7</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Location */}
          <Card className="bg-secondary-light border-secondary/20">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-secondary-foreground" />
              </div>
              <CardTitle className="text-xl text-foreground">Our Location</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h4 className="font-medium text-foreground">HealthCare Center</h4>
                <p className="text-muted-foreground">
                  123 Health Street<br />
                  Medical City, MC 12345<br />
                  United States
                </p>
              </div>
              <div className="space-y-2">
                <h5 className="font-medium text-foreground">Parking</h5>
                <p className="text-sm text-muted-foreground">
                  Free parking available<br />
                  Wheelchair accessible
                </p>
              </div>
              <div className="space-y-2">
                <h5 className="font-medium text-foreground">Public Transport</h5>
                <p className="text-sm text-muted-foreground">
                  Bus routes 15, 23, 45<br />
                  Metro Station: Health Plaza
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card className="bg-accent border-accent-foreground/20">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-accent-foreground rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-accent" />
              </div>
              <CardTitle className="text-xl text-foreground">Contact Us</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div>
                  <h5 className="font-medium text-foreground">General Appointments</h5>
                  <p className="text-lg text-primary font-semibold">(555) 123-4567</p>
                </div>
                <div>
                  <h5 className="font-medium text-foreground">Emergency Line</h5>
                  <p className="text-lg text-destructive font-semibold">(555) 911-HELP</p>
                </div>
                <div>
                  <h5 className="font-medium text-foreground">Email</h5>
                  <p className="text-secondary">info@healthcarecenter.com</p>
                </div>
                <div>
                  <h5 className="font-medium text-foreground">Fax</h5>
                  <p className="text-muted-foreground">(555) 123-4568</p>
                </div>
              </div>
              <div className="mt-6 p-4 bg-background rounded-lg">
                <p className="text-sm text-muted-foreground">
                  For urgent matters outside business hours, 
                  please call our emergency line or visit the nearest emergency room.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Schedule;