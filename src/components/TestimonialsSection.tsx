
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Johnson",
    text: "DJ Zee Driving School made getting my license a breeze. The instructors are patient and professional. I passed my test on the first try!",
    rating: 5,
    course: "Code 08"
  },
  {
    name: "Michael Peters",
    text: "Best driving school in Cape Town! The truck training was comprehensive and really prepared me for my Code 10 license.",
    rating: 5,
    course: "Code 10"
  },
  {
    name: "Lisa Williams",
    text: "The learners classes were excellent. Clear explanations and lots of practice tests helped me pass with flying colors.",
    rating: 5,
    course: "Learners"
  }
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Student Success Stories</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our students have to say about their experience with DJ Zee Driving School.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="flex justify-between items-start mb-4">
                <Quote size={40} className="text-primary/20" />
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="text-yellow-400 fill-current"
                    />
                  ))}
                </div>
              </div>
              <blockquote className="mb-4">
                <p className="text-gray-600 italic">{testimonial.text}</p>
              </blockquote>
              <div className="border-t pt-4">
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.course} Graduate</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
