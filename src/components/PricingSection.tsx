
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

const pricingPlans = [
  {
    name: "Code 08",
    subtitle: "Light Motor Vehicles",
    packages: [
      { name: "Hourly Rate", price: "R220", duration: "per hour" },
      { name: "5 Lessons", price: "R1,050", duration: "package" },
      { name: "10 Lessons", price: "R2,100", duration: "package" },
      { name: "15 Lessons", price: "R3,150", duration: "package", note: "+ Car Hire: R850" },
      { name: "25 Lessons", price: "R5,250", duration: "package", note: "Car Hire Included" }
    ],
    popular: false
  },
  {
    name: "Code 10",
    subtitle: "Medium Motor Vehicles - Truck",
    packages: [
      { name: "Hourly Rate", price: "R250", duration: "per hour" },
      { name: "5 Lessons", price: "R1,150", duration: "package" },
      { name: "10 Lessons", price: "R2,250", duration: "package" },
      { name: "15 Lessons", price: "R3,400", duration: "package", note: "+ Truck Hire: R1,000" },
      { name: "25 Lessons", price: "R6,250", duration: "package", note: "Truck Hire Included" }
    ],
    popular: true
  },
  {
    name: "Code 14",
    subtitle: "Heavy Motor Vehicles - Truck",
    packages: [
      { name: "Hourly Rate", price: "R360", duration: "per hour" },
      { name: "5 Lessons", price: "R1,750", duration: "package" },
      { name: "10 Lessons", price: "R3,500", duration: "package" },
      { name: "15 Lessons", price: "R5,250", duration: "package" },
      { name: "Truck Hire", price: "R1,500", duration: "additional" }
    ],
    popular: false
  }
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Transparent Pricing</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose the package that best suits your needs. All prices include professional instruction with experienced trainers.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {pricingPlans.map((plan) => (
            <div
              key={plan.name}
              className={`relative bg-white rounded-lg border ${
                plan.popular ? 'border-primary shadow-lg scale-105' : 'border-gray-400'
              } p-6 transition-all duration-300 hover:shadow-md`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-white px-3 py-1 rounded-full text-sm">
                    Most Popular
                  </span>
                </div>
              )}
              <div className="text-center">
                <h3 className="text-xl font-bold mb-1">{plan.name}</h3>
                <p className="text-sm text-gray-600 mb-6">{plan.subtitle}</p>
                
                <div className="space-y-4">
                  {plan.packages.map((pkg) => (
                    <div key={pkg.name} className="border-b pb-4 last:border-0">
                      <div className="flex justify-between items-baseline mb-1">
                        <span className="text-gray-600">{pkg.name}</span>
                        <span className="text-xl font-bold">{pkg.price}</span>
                      </div>
                      {pkg.note && (
                        <p className="text-sm text-primary">{pkg.note}</p>
                      )}
                    </div>
                  ))}
                </div>
                
                <Button className={`w-full mt-6 ${plan.popular ? "bg-primary" : ""}`} variant={plan.popular ? "default" : "outline"}>
                  Choose {plan.name}
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500">
            * Additional services and custom packages available upon request. Contact us for more information.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
