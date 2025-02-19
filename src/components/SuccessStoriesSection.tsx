
const successStories = [
  {
    image: "/zee-sis.jpg",
    title: "Graduation Day Success",
    description: "Our proud graduates celebrating their achievement"
  },
  {
    image: "/zee-timer.jpg",
    title: "First-Time Pass",
    description: "Students who passed their tests on the first attempt"
  },
  {
    image: "/zee-pass.jpg",
    title: "Professional Drivers",
    description: "Successful completion of our professional driving program"
  },
  {
    image: "/zee-cafe.jpg",
    title: "Graduation Day Success",
    description: "Our proud graduates celebrating their achievement"
  },
  {
    image: "/zee-drove.jpg",
    title: "First-Time Pass",
    description: "Students who passed their tests on the first attempt"
  },
  {
    image: "/zee-why.jpg",
    title: "Professional Drivers",
    description: "Successful completion of our professional driving program"
  }
];

const SuccessStoriesSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Success Stories</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            See the success stories of our graduates who have achieved their driving goals with DJ Zee Driving School.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {successStories.map((story) => (
            <div key={story.title} className="group relative overflow-hidden rounded-lg shadow-lg">
              <img
                src={`${story.image}`}
                alt={story.title}
                className="w-full h-64 object-cover transform transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-white font-semibold text-xl mb-2">{story.title}</h3>
                <p className="text-gray-200 text-sm">{story.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStoriesSection;
