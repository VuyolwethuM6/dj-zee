
import { ShieldCheck, Clock, Users, Award } from 'lucide-react';

const features = [
  {
    icon: ShieldCheck,
    title: "Licensed & Certified",
    description: "Fully accredited driving school with certified instructors"
  },
  {
    icon: Clock,
    title: "Flexible Schedule",
    description: "Convenient lesson times that work around your schedule"
  },
  {
    icon: Users,
    title: "Expert Instructors",
    description: "Experienced, patient instructors dedicated to your success"
  },
  {
    icon: Award,
    title: "High Pass Rate",
    description: "Outstanding success rate for both learner's and driver's tests"
  }
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="flex-1">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full blur-3xl" />
              <img
                src="/zee-about.jpg"
                alt="DJ Zee Driving School facility"
                className="relative w-full h-auto rounded-lg shadow-xl"
              />
            </div>
          </div>
          
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose DJ Zee?</h2>
            <p className="text-gray-600 mb-8">
              With years of experience and a commitment to excellence, DJ Zee Driving School has helped thousands of students achieve their driving goals. Our modern facilities and professional approach ensure you get the best training possible.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature) => (
                <div key={feature.title} className="flex items-start space-x-4">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    <feature.icon size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{feature.title}</h3>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
