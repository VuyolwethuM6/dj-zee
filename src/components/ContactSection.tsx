
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    details: "+27 123 456 789",
    action: "tel:+27123456789"
  },
  {
    icon: Mail,
    title: "Email",
    details: "info@djzee.co.za",
    action: "mailto:info@djzee.co.za"
  },
  {
    icon: MapPin,
    title: "Location",
    details: "21522 Incora Str, Mfuleni, 7100",
    action: "https://maps.google.com"
  },
  {
    icon: Clock,
    title: "Hours",
    details: "Mon-Sat: 8am - 6pm",
    action: "#"
  }
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Ready to start your driving journey? Contact us today to schedule your first lesson or ask any questions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((item) => (
                <a
                  key={item.title}
                  href={item.action}
                  className="block p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                      <item.icon size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{item.title}</h3>
                      <p className="text-gray-600">{item.details}</p>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Send us a message</h3>
              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Your Message"
                    rows={4}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/20"
                  ></textarea>
                </div>
                <Button className="w-full">Send Message</Button>
              </form>
            </div>
          </div>

          <div className="rounded-lg overflow-hidden shadow-lg h-[600px]">
            {/* <iframe
              title="DJ Zee Driving School Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3307.4084149651447!2d18.6834!3d-34.0023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDAwJzA4LjMiUyAxOMKwNDEnMDAuMiJF!5e0!3m2!1sen!2sza!4v1620812345678!5m2!1sen!2sza"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
            ></iframe> */}
            <iframe title="DJ Zee Driving School Location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3308.017394248959!2d18.674201475713897!3d-33.99208697317975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc4ff3e319fdbb%3A0xf1eea5ff9a32f0a9!2sDJ%20Zee%20Driving%20School!5e0!3m2!1sen!2sza!4v1740000237733!5m2!1sen!2sza" 
            width="100%" 
            height="100%" 
            style={{border:0}}  
            loading="lazy">  
            </iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
