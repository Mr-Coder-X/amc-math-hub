import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Mail, Linkedin } from 'lucide-react';
import facultyAdvisor from '@/assets/faculty-advisor.jpg';

const Team = () => {
  const foundingMembers = [
    { name: 'Prof. Sonam Kumar', role: 'Founding Faculty Advisor', year: '2022' },
    { name: 'Aakashsingh Rajput', role: 'Founding Club Lead', department: 'CSE-DS', year: '2022' },
    { name: 'Ayush Gayakwad', role: 'Founding Tech Co-Lead', department: 'AIML', year: '2022' },
  ];

  const pastLeads = [
    { name: 'Aakashsingh Rajput', role: 'Club Lead', tenure: 'Dec 2022 - Nov 2025', department: 'CSE-DS' },
  ];

  const coreTeam = [
    { name: 'Arjun Sharma', role: 'Club Lead', department: 'CSE', year: '1st Year', email: 'arjun@amc.edu' },
    { name: 'Priya Patel', role: 'Co-Lead', department: 'ECE', year: '1st Year', email: 'priya@amc.edu' },
    { name: 'Rahul Kumar', role: 'Technical Head', department: 'ISE', year: '1st Year', email: 'rahul@amc.edu' },
    { name: 'Sneha Reddy', role: 'Events Head', department: 'CSE', year: '1st Year', email: 'sneha@amc.edu' },
    { name: 'Vikram Singh', role: 'Design Head', department: 'ME', year: '1st Year', email: 'vikram@amc.edu' },
    { name: 'Ananya Iyer', role: 'Content Head', department: 'EEE', year: '1st Year', email: 'ananya@amc.edu' },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-slide-up">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
              Meet Our <span className="gradient-text">Team</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              The passionate individuals driving mathematical excellence at AMC
            </p>
          </div>
        </div>
      </section>

      {/* Faculty Advisor */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
              Faculty Advisor
            </h2>
            <div className="glass-card rounded-xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
              <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-primary flex-shrink-0">
                <img src={facultyAdvisor} alt="Prof. Sonam Kumar" className="w-full h-full object-cover" />
              </div>
              <div className="text-center md:text-left flex-1">
                <h3 className="text-3xl font-bold text-foreground mb-2">Prof. Sonam Kumar</h3>
                <p className="text-lg text-primary mb-4">Faculty Advisor & Mentor</p>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "Mathematics is not about numbers, equations, or algorithms; it's about understanding.
                  I'm proud to guide these brilliant young minds as they explore the infinite beauty of
                  mathematical thinking and apply it to solve real-world challenges."
                </p>
                <div className="flex gap-3 justify-center md:justify-start">
                  <a href="mailto:sonam.kumar@amc.edu" className="p-2 bg-muted hover:bg-primary hover:text-primary-foreground rounded-lg transition-colors">
                    <Mail size={20} />
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-muted hover:bg-primary hover:text-primary-foreground rounded-lg transition-colors">
                    <Linkedin size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Team */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Core Team
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Meet the dedicated leaders who organize and manage club activities
            </p>
          </div>

          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreTeam.map((member, index) => (
              <div
                key={index}
                className="glass-card rounded-xl p-6 text-center hover:scale-105 transition-transform group"
              >
                <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-primary flex items-center justify-center text-white text-3xl font-bold">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-1">{member.name}</h3>
                <p className="text-primary font-semibold mb-2">{member.role}</p>
                <p className="text-sm text-muted-foreground mb-1">{member.department} • {member.year}</p>
                <div className="flex gap-2 justify-center mt-4">
                  <a href={`mailto:${member.email}`} className="p-2 bg-muted hover:bg-primary hover:text-primary-foreground rounded-lg transition-colors">
                    <Mail size={18} />
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-muted hover:bg-primary hover:text-primary-foreground rounded-lg transition-colors">
                    <Linkedin size={18} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founding Members & Past Leads */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Founding Members */}
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">
                Founding Members
              </h2>
              <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
                Honoring those who established the foundation of our club in 2022
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {foundingMembers.map((member, index) => (
                  <div
                    key={index}
                    className="glass-card rounded-xl p-6 text-center border-2 border-primary/20"
                  >
                    <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-primary flex items-center justify-center text-white text-2xl font-bold">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-1">{member.name}</h3>
                    <p className="text-primary font-semibold text-sm mb-1">{member.role}</p>
                    {member.department && (
                      <p className="text-sm text-muted-foreground">{member.department} • {member.year}</p>
                    )}
                    {!member.department && (
                      <p className="text-sm text-muted-foreground">{member.year}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Past Leads Timeline */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">
                Past Leaders
              </h2>
              <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
                Previous club leads who shaped our journey
              </p>
              <div className="max-w-2xl mx-auto">
                {pastLeads.map((lead, index) => (
                  <div
                    key={index}
                    className="glass-card rounded-xl p-8 flex flex-col md:flex-row items-center gap-6 text-center md:text-left"
                  >
                    <div className="w-24 h-24 rounded-full bg-gradient-primary flex items-center justify-center text-white text-2xl font-bold flex-shrink-0">
                      {lead.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-foreground mb-1">{lead.name}</h3>
                      <p className="text-primary font-semibold mb-1">{lead.role}</p>
                      <p className="text-sm text-muted-foreground mb-2">{lead.department}</p>
                      <div className="inline-block px-4 py-2 bg-muted rounded-lg">
                        <p className="text-sm font-semibold text-foreground">{lead.tenure}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
