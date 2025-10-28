import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Calendar, MapPin, Users, Clock, ArrowRight } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Events = () => {
  const upcomingEvents = [
    {
      id: 1,
      title: 'Mathematical Modeling Workshop',
      date: 'January 25, 2025',
      time: '10:00 AM - 4:00 PM',
      venue: 'Seminar Hall A',
      participants: 50,
      description: 'Learn advanced mathematical modeling techniques and their real-world applications in engineering, finance, and data science.',
      category: 'Workshop',
      registrationOpen: true,
    },
    {
      id: 2,
      title: 'AMC Math Olympiad 2025',
      date: 'February 10, 2025',
      time: '9:00 AM - 1:00 PM',
      venue: 'Main Auditorium',
      participants: 120,
      description: 'Annual mathematics competition featuring challenging problems across algebra, geometry, number theory, and combinatorics.',
      category: 'Competition',
      registrationOpen: true,
    },
    {
      id: 3,
      title: 'Guest Lecture: Applications of Number Theory',
      date: 'February 20, 2025',
      time: '2:00 PM - 4:00 PM',
      venue: 'Conference Room',
      participants: 80,
      description: 'Distinguished mathematician Dr. Rajesh Sharma discusses modern applications of number theory in cryptography and computer science.',
      category: 'Lecture',
      registrationOpen: true,
    },
  ];

  const pastEvents = [
    {
      id: 1,
      title: 'Annual Math Fest 2024',
      date: 'November 15, 2024',
      participants: 200,
      description: 'A day-long celebration of mathematics with competitions, exhibitions, and interactive sessions.',
      outcomes: 'Successfully engaged 200+ students with 15+ activities and competitions.',
    },
    {
      id: 2,
      title: 'Calculus Challenge 2024',
      date: 'October 5, 2024',
      participants: 85,
      description: 'Inter-college calculus competition testing problem-solving speed and accuracy.',
      outcomes: 'AMC students secured top 3 positions. Enhanced competitive spirit.',
    },
    {
      id: 3,
      title: 'Workshop on Linear Algebra Applications',
      date: 'September 20, 2024',
      participants: 60,
      description: 'Hands-on workshop exploring applications of linear algebra in machine learning and data science.',
      outcomes: 'Participants gained practical knowledge and implemented real-world projects.',
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-slide-up">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
              Our <span className="gradient-text">Events</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Join us in workshops, competitions, lectures, and mathematical celebrations
            </p>
          </div>
        </div>
      </section>

      {/* Events Tabs */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="upcoming" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
              <TabsTrigger value="upcoming">Upcoming Events</TabsTrigger>
              <TabsTrigger value="past">Past Events</TabsTrigger>
            </TabsList>

            {/* Upcoming Events */}
            <TabsContent value="upcoming" className="space-y-8">
              {upcomingEvents.map((event, index) => (
                <div
                  key={event.id}
                  className="glass-card rounded-xl p-8 hover:scale-[1.02] transition-all"
                >
                  <div className="flex flex-col lg:flex-row gap-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-semibold rounded-full">
                          {event.category}
                        </span>
                        {event.registrationOpen && (
                          <span className="px-3 py-1 bg-secondary/10 text-secondary text-sm font-semibold rounded-full">
                            Registration Open
                          </span>
                        )}
                      </div>

                      <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                        {event.title}
                      </h3>

                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {event.description}
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Calendar size={20} className="text-primary" />
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Clock size={20} className="text-primary" />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <MapPin size={20} className="text-primary" />
                          <span>{event.venue}</span>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Users size={20} className="text-primary" />
                          <span>{event.participants} Participants</span>
                        </div>
                      </div>

                      <Button variant="hero" className="group">
                        Register Now
                        <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </TabsContent>

            {/* Past Events */}
            <TabsContent value="past" className="space-y-8">
              {pastEvents.map((event, index) => (
                <div
                  key={event.id}
                  className="glass-card rounded-xl p-8"
                >
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                      {event.title}
                    </h3>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Users size={18} className="text-primary" />
                      <span className="text-sm">{event.participants}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-muted-foreground mb-4">
                    <Calendar size={18} className="text-primary" />
                    <span>{event.date}</span>
                  </div>

                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {event.description}
                  </p>

                  <div className="bg-muted/50 rounded-lg p-4">
                    <p className="text-sm font-semibold text-foreground mb-2">Outcomes & Achievements:</p>
                    <p className="text-sm text-muted-foreground">{event.outcomes}</p>
                  </div>
                </div>
              ))}
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Events;
