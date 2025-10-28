import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import teamCollab from '@/assets/team-collab.jpg';

const Gallery = () => {
  // Placeholder gallery items - in a real app, these would be fetched from a backend
  const galleryItems = [
    { id: 1, title: 'Team Collaboration Session', category: 'Events', image: teamCollab },
    { id: 2, title: 'Math Olympiad 2024', category: 'Competitions', image: teamCollab },
    { id: 3, title: 'Workshop on Linear Algebra', category: 'Workshops', image: teamCollab },
    { id: 4, title: 'Guest Lecture Series', category: 'Events', image: teamCollab },
    { id: 5, title: 'Annual Math Fest', category: 'Events', image: teamCollab },
    { id: 6, title: 'Problem Solving Sessions', category: 'Workshops', image: teamCollab },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-slide-up">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
              Our <span className="gradient-text">Gallery</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Moments captured from our journey of mathematical exploration
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.map((item, index) => (
              <div
                key={item.id}
                className="group relative overflow-hidden rounded-xl aspect-square cursor-pointer"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span className="px-3 py-1 bg-primary/80 text-white text-xs font-semibold rounded-full mb-2 inline-block">
                      {item.category}
                    </span>
                    <h3 className="text-xl font-bold text-white">{item.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Gallery;
