import { Button } from '@/components/ui/button';
import { Calendar, MapPin, Users, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const FeaturedEvents = () => {
  const upcomingEvents = [
    {
      id: 1,
      title: 'Mathematical Modeling Workshop',
      date: 'January 25, 2025',
      time: '10:00 AM - 4:00 PM',
      venue: 'Seminar Hall A',
      participants: 50,
      description: 'Learn advanced mathematical modeling techniques and their real-world applications.',
      category: 'Workshop',
    },
    {
      id: 2,
      title: 'AMC Math Olympiad 2025',
      date: 'February 10, 2025',
      time: '9:00 AM - 1:00 PM',
      venue: 'Main Auditorium',
      participants: 120,
      description: 'Annual mathematics competition featuring challenging problems across all domains.',
      category: 'Competition',
    },
    {
      id: 3,
      title: 'Guest Lecture: Applications of Number Theory',
      date: 'February 20, 2025',
      time: '2:00 PM - 4:00 PM',
      venue: 'Conference Room',
      participants: 80,
      description: 'Distinguished mathematician Dr. Rajesh Sharma discusses cryptography and number theory.',
      category: 'Lecture',
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Upcoming <span className="gradient-text">Events</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join us in exciting mathematical activities, workshops, and competitions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {upcomingEvents.map((event, index) => (
            <div
              key={event.id}
              className="glass-card rounded-xl p-6 hover:scale-105 transition-all group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                  {event.category}
                </span>
                <div className="flex items-center gap-1 text-muted-foreground text-sm">
                  <Users size={16} />
                  <span>{event.participants}</span>
                </div>
              </div>

              <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                {event.title}
              </h3>

              <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                {event.description}
              </p>

              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar size={16} className="text-primary" />
                  <span>{event.date} • {event.time}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin size={16} className="text-primary" />
                  <span>{event.venue}</span>
                </div>
              </div>

              <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                Register Now
                <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link to="/events">
            <Button variant="hero" size="lg">
              View All Events
              <ArrowRight className="ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedEvents;
