import { useState } from 'react';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const navItems = [
    { name: 'Services', href: '#services' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <a href="/" className="flex items-center">
              <span className="text-2xl font-bold text-primary">DJ Zee</span>
              <span className="text-lg ml-2">Driving School</span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-600 hover:text-primary transition-colors duration-200"
                >
                  {item.name}
                </a>
              ))}
              <Button 
                className="bg-primary hover:bg-primary/90 text-white flex items-center gap-2"
                onClick={() => setIsDialogOpen(true)}
              >
                <Phone size={18} />
                <span className="hidden lg:inline">Call Now</span>
              </Button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="md:hidden py-4 animate-fadeIn">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block py-2 text-gray-600 hover:text-primary transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <Button 
                className="w-full mt-4 bg-primary hover:bg-primary/90 text-white flex items-center justify-center gap-2"
                onClick={() => setIsDialogOpen(true)}
              >
                <Phone size={18} />
                Call Now
              </Button>
            </div>
          )}
        </div>
      </nav>

      {/* Custom Contact Dialog */}
      {isDialogOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-80">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-semibold">Choose an Option</h2>
              <button onClick={() => setIsDialogOpen(false)}>
                <X size={20} />
              </button>
            </div>
            <p className="mt-2 text-gray-600">How do you want to contact us?</p>

            <div className="mt-4 flex flex-col space-y-2">
              <Button
                className="bg-green-600 hover:bg-green-700 text-white flex items-center justify-center gap-2"
                onClick={() => {
                  window.location.href = "tel:+1234567890"; // Replace with your number
                  setIsDialogOpen(false);
                }}
              >
                <Phone size={18} />
                Call Now
              </Button>

              <Button
                className="bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center gap-2"
                onClick={() => {
                  window.open("https://wa.me/1234567890", "_blank"); // Replace with your number
                  setIsDialogOpen(false);
                }}
              >
                <MessageCircle size={18} />
                WhatsApp Now
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;
