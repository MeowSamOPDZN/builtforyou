import { Star, Quote } from "lucide-react";
import { useState, useEffect } from "react";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "CEO, TechStart",
      company: "TechStart Inc.",
      image: "/placeholder.svg",
      content:
        "BuiltForYou transformed our vision into a stunning reality. Their attention to detail and technical expertise exceeded our expectations. The team was professional, responsive, and delivered on time.",
      rating: 5,
      project: "E-Commerce Platform",
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "Founder",
      company: "HealthFlow",
      image: "/placeholder.svg",
      content:
        "Working with BuiltForYou was an absolute pleasure. They understood our complex requirements and delivered a solution that perfectly fits our needs. Highly recommended!",
      rating: 5,
      project: "Healthcare Platform",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      position: "Marketing Director",
      company: "GrowthCo",
      image: "/placeholder.svg",
      content:
        "The mobile app they developed for us has been a game-changer. User engagement increased by 300% and our conversion rates are through the roof. Amazing work!",
      rating: 5,
      project: "Mobile Banking App",
    },
    {
      id: 4,
      name: "David Thompson",
      position: "CTO",
      company: "InnovateLab",
      image: "/placeholder.svg",
      content:
        "Exceptional development team with deep technical knowledge. They not only built what we asked for but also suggested improvements that made our product even better.",
      rating: 5,
      project: "SaaS Dashboard",
    },
  ];

  // Auto-rotate testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`h-5 w-5 ${
          index < rating ? "text-yellow-400 fill-current" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            What Our{" "}
            <span className="bg-brand-gradient bg-clip-text text-transparent">
              Clients Say
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients
            have to say about working with us.
          </p>
        </div>

        {/* Main testimonial carousel */}
        <div className="relative mb-16">
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 md:p-12 relative overflow-hidden">
            <Quote className="absolute top-6 left-6 h-12 w-12 text-brand-200" />

            <div className="relative z-10">
              <div className="flex flex-col md:flex-row items-center gap-8">
                {/* Testimonial content */}
                <div className="flex-1">
                  <div className="flex items-center mb-4">
                    {renderStars(testimonials[currentIndex].rating)}
                  </div>

                  <blockquote className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
                    "{testimonials[currentIndex].content}"
                  </blockquote>

                  <div>
                    <div className="font-bold text-gray-900 text-lg">
                      {testimonials[currentIndex].name}
                    </div>
                    <div className="text-brand-600 font-medium">
                      {testimonials[currentIndex].position}
                    </div>
                    <div className="text-gray-500">
                      {testimonials[currentIndex].company}
                    </div>
                    <div className="text-sm text-gray-400 mt-1">
                      Project: {testimonials[currentIndex].project}
                    </div>
                  </div>
                </div>

                {/* Client image */}
                <div className="flex-shrink-0">
                  <img
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover shadow-lg border-4 border-white"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Carousel indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-brand-600 w-8"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Client logos or additional testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 ${
                index === currentIndex ? "ring-2 ring-brand-300" : ""
              }`}
            >
              <div className="flex items-center mb-3">
                {renderStars(testimonial.rating)}
              </div>
              <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                "{testimonial.content}"
              </p>
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-10 h-10 rounded-full mr-3"
                />
                <div>
                  <div className="font-semibold text-gray-900 text-sm">
                    {testimonial.name}
                  </div>
                  <div className="text-gray-500 text-xs">
                    {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
