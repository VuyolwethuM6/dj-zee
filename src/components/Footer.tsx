
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">DJ Zee Driving School</h3>
            <p className="text-gray-400">
              Professional driving instruction in Mfuleni, Cape Town. Your journey to becoming a qualified driver starts here.
            </p>
          </div>
          
          <div>
            <h4 className="text-white text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition-colors">Code 08</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Code 10</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Code 14</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Learners Classes</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-gray-400">
              <li>21522 Incora Str</li>
              <li>Mfuleni, 7100</li>
              <li>Cape Town, South Africa</li>
              <li>info@djzee.co.za</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} DJ Zee Driving School. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">
              <Facebook size={20} />
            </a>
            <a href="#" className="hover:text-white transition-colors">
              <Instagram size={20} />
            </a>
            <a href="#" className="hover:text-white transition-colors">
              <Twitter size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
