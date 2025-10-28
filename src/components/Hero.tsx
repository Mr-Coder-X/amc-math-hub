import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Calendar, Lightbulb } from 'lucide-react';
import heroBg from '@/assets/hero-bg.jpg';

const Hero = () => {
  const stats = [
    { icon: Users, label: 'Active Members', value: '100+' },
    { icon: Calendar, label: 'Events Organized', value: '10+' },
    { icon: Lightbulb, label: 'Projects Completed', value: '5+' },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 bg-background">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-10" />
      </div>

      {/* Floating Mathematical Symbols */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-20 left-10 text-6xl text-primary/10 animate-float font-bold">π</div>
        <div className="absolute top-40 right-20 text-5xl text-secondary/10 animate-float" style={{ animationDelay: '1s' }}>∑</div>
        <div className="absolute bottom-32 left-1/4 text-7xl text-accent/10 animate-float" style={{ animationDelay: '2s' }}>∞</div>
        <div className="absolute bottom-40 right-1/3 text-6xl text-primary/10 animate-float" style={{ animationDelay: '1.5s' }}>∫</div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 relative">
        <div className="max-w-4xl mx-auto text-center animate-slide-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-foreground">Welcome to </span>
            <span className="gradient-text">AMC Math Club</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 font-semibold">
            Where Logic Meets Creativity
          </p>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join us in exploring the beauty of mathematics through problem-solving, research, and collaborative learning.
            A community of passionate mathematicians at AMC Engineering College.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link to="/register">
              <Button variant="hero" size="lg" className="group">
                Join Now
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/events">
              <Button variant="outline" size="lg">
                Explore Events
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto mb-16">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="glass-card p-6 rounded-xl hover:scale-105 transition-transform"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <p className="text-3xl font-bold text-foreground mb-1">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
