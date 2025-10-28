import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Target, Eye, Lightbulb, Users } from 'lucide-react';

const About = () => {
  const objectives = [
    {
      icon: Target,
      title: 'Problem Solving Excellence',
      description: 'Foster critical thinking and analytical skills through challenging mathematical problems.',
    },
    {
      icon: Lightbulb,
      title: 'Innovation & Research',
      description: 'Encourage mathematical research and exploration of cutting-edge concepts.',
    },
    {
      icon: Users,
      title: 'Collaborative Learning',
      description: 'Build a supportive community where students learn and grow together.',
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
              About <span className="gradient-text">AMC Math Club</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Cultivating mathematical excellence and fostering a community of passionate problem-solvers
              at AMC Engineering College.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-foreground">
              Who We Are
            </h2>
            <div className="glass-card rounded-xl p-8 md:p-12">
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                AMC Math Club is a vibrant community of mathematics enthusiasts at AMC Engineering College,
                dedicated to exploring the beauty and power of mathematical thinking. Founded with the vision
                of creating a platform where logic meets creativity, we bring together students from diverse
                backgrounds who share a common passion for mathematics.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Through workshops, competitions, research projects, and collaborative learning sessions,
                we strive to make mathematics accessible, engaging, and fun. Our club serves as a bridge
                between theoretical concepts and real-world applications, preparing students for academic
                and professional success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass-card rounded-xl p-8 hover:scale-105 transition-transform">
              <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To establish AMC Math Club as a premier center for mathematical excellence, inspiring
                students to explore, innovate, and excel in the fascinating world of mathematics while
                fostering a lifelong love for logical thinking and problem-solving.
              </p>
            </div>

            <div className="glass-card rounded-xl p-8 hover:scale-105 transition-transform">
              <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To create an inclusive environment that promotes mathematical literacy, encourages
                collaborative learning, and provides opportunities for students to apply mathematical
                concepts to solve real-world problems through workshops, competitions, and research initiatives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Objectives */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Core Objectives
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our guiding principles that shape everything we do
            </p>
          </div>

          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            {objectives.map((obj, index) => (
              <div
                key={index}
                className="glass-card rounded-xl p-8 text-center hover:scale-105 transition-transform"
              >
                <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <obj.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{obj.title}</h3>
                <p className="text-muted-foreground">{obj.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* History */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-foreground">
              Our History
            </h2>
            <div className="glass-card rounded-xl p-8 md:p-12">
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                AMC Math Club was founded in 2022 with a simple yet powerful idea: to create a space where
                mathematics could be celebrated, explored, and enjoyed beyond the classroom. What started
                as a small group of passionate students has grown into a thriving community of over 100 members.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Over the years, we have organized numerous workshops, competitions, and outreach programs,
                making a significant impact on the mathematical culture at AMC Engineering College.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
