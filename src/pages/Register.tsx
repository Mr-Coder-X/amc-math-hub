import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { CheckCircle } from 'lucide-react';

const Register = () => {
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    usn: '',
    department: '',
    year: '',
    email: '',
    whatsapp: '',
    preferredTeam: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send data to a backend
    setSubmitted(true);
    toast({
      title: 'Registration Successful!',
      description: 'Welcome to AMC Math Club! We\'ll contact you soon.',
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  if (submitted) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="min-h-[calc(100vh-200px)] flex items-center justify-center px-4 pt-20">
          <div className="max-w-md w-full glass-card rounded-xl p-8 text-center animate-slide-up">
            <div className="w-20 h-20 gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-12 h-12 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Welcome to AMC Math Club!
            </h2>
            <p className="text-muted-foreground mb-8">
              Thank you for joining us, {formData.fullName}! We've received your registration
              and will contact you soon with next steps.
            </p>
            <Button variant="hero" onClick={() => window.location.href = '/'}>
              Return to Home
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-slide-up">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
              Join <span className="gradient-text">AMC Math Club</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Become part of our vibrant mathematical community
            </p>
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section className="py-12 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto glass-card rounded-xl p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-foreground mb-2">
                  Full Name *
                </label>
                <Input
                  id="fullName"
                  name="fullName"
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="John Doe"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="usn" className="block text-sm font-medium text-foreground mb-2">
                    USN *
                  </label>
                  <Input
                    id="usn"
                    name="usn"
                    type="text"
                    required
                    value={formData.usn}
                    onChange={handleChange}
                    placeholder="1AMxx23xxx"
                  />
                </div>

                <div>
                  <label htmlFor="department" className="block text-sm font-medium text-foreground mb-2">
                    Department *
                  </label>
                  <Select onValueChange={(value) => handleSelectChange('department', value)} required>
                    <SelectTrigger>
                      <SelectValue placeholder="Select department" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="cse">Computer Science</SelectItem>
                      <SelectItem value="ise">Information Science</SelectItem>
                      <SelectItem value="ece">Electronics & Communication</SelectItem>
                      <SelectItem value="eee">Electrical & Electronics</SelectItem>
                      <SelectItem value="me">Mechanical</SelectItem>
                      <SelectItem value="ce">Civil</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <label htmlFor="year" className="block text-sm font-medium text-foreground mb-2">
                  Year *
                </label>
                <Select onValueChange={(value) => handleSelectChange('year', value)} required>
                  <SelectTrigger>
                    <SelectValue placeholder="Select year" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1st Year</SelectItem>
                    <SelectItem value="2">2nd Year</SelectItem>
                    <SelectItem value="3">3rd Year</SelectItem>
                    <SelectItem value="4">4th Year</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="whatsapp" className="block text-sm font-medium text-foreground mb-2">
                    WhatsApp Number *
                  </label>
                  <Input
                    id="whatsapp"
                    name="whatsapp"
                    type="tel"
                    required
                    value={formData.whatsapp}
                    onChange={handleChange}
                    placeholder="+91 12345 67890"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="preferredTeam" className="block text-sm font-medium text-foreground mb-2">
                  Preferred Team *
                </label>
                <Select onValueChange={(value) => handleSelectChange('preferredTeam', value)} required>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your preferred team" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="tech">Technical Team</SelectItem>
                    <SelectItem value="design">Design Team</SelectItem>
                    <SelectItem value="event">Event Management</SelectItem>
                    <SelectItem value="pr">Public Relations</SelectItem>
                    <SelectItem value="content">Content Team</SelectItem>
                    <SelectItem value="media">Media Team</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button type="submit" variant="hero" size="lg" className="w-full">
                Submit Registration
              </Button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Register;
