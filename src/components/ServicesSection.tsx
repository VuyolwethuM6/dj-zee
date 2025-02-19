
import { Car, Truck, Bike, GraduationCap, Camera } from 'lucide-react';

const services = [
  {
    title: "Code 08",
    description: "Light motor vehicle training for cars",
    icon: Car,
  },
  {
    title: "Code 10",
    description: "Heavy vehicle training for trucks",
    icon: Truck,
  },
  {
    title: "Code 14",
    description: "Professional driving certification",
    icon: Truck,
  },
  {
    title: "Scooter Training",
    description: "Two-wheeler license training",
    icon: Bike,
  },
  {
    title: "Learners Classes",
    description: "Comprehensive theory preparation",
    icon: GraduationCap,
  },
  {
    title: "ID Photos",
    description: "Professional ID photographs",
    icon: Camera,
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive driving education services tailored to your needs. From beginners to professional drivers, we've got you covered.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="p-2 rounded-lg bg-primary/10 text-primary mr-4">
                  <service.icon size={24} />
                </div>
                <h3 className="text-xl font-semibold">{service.title}</h3>
              </div>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
