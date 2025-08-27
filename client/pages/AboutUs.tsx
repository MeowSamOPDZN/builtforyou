import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Target, Users, Award, Lightbulb } from "lucide-react";

const AboutUs = () => {
  const values = [
    {
      icon: Target,
      title: "Mission-Driven",
      description: "We're committed to delivering exceptional digital solutions that drive real business results for our clients."
    },
    {
      icon: Users,
      title: "Client-Focused",
      description: "Every project starts with understanding your unique needs and building solutions that exceed expectations."
    },
    {
      icon: Award,
      title: "Quality First",
      description: "We maintain the highest standards in code quality, design, and project delivery through rigorous testing and review."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We stay ahead of technology trends to provide cutting-edge solutions that give you a competitive advantage."
    }
  ];

  const stats = [
    { number: "100+", label: "Projects Completed" },
    { number: "50+", label: "Happy Clients" },
    { number: "5+", label: "Years Experience" },
    { number: "24/7", label: "Support Available" }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              About <span className="bg-brand-gradient bg-clip-text text-transparent">BuiltForYou</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We're a passionate team of developers, designers, and digital strategists 
              dedicated to building amazing web and mobile experiences that help businesses thrive.
            </p>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Our Story
                </h2>
                <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                  <p>
                    Founded in 2019, BuiltForYou started with a simple mission: to make 
                    high-quality web and mobile development accessible to businesses of all sizes. 
                    What began as a small team of passionate developers has grown into a 
                    full-service digital agency.
                  </p>
                  <p>
                    We believe that every business deserves a digital presence that not only 
                    looks great but performs exceptionally. Our approach combines cutting-edge 
                    technology with human-centered design to create solutions that truly work 
                    for your business and your customers.
                  </p>
                  <p>
                    Today, we've helped over 100 businesses transform their digital presence, 
                    from startups launching their first product to established companies 
                    modernizing their technology stack.
                  </p>
                </div>
              </div>
              <div className="relative">
                <img
                  src="/placeholder.svg"
                  alt="Our team working"
                  className="rounded-2xl shadow-xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-brand-gradient text-white p-6 rounded-xl shadow-lg">
                  <div className="text-2xl font-bold">100+</div>
                  <div className="text-sm opacity-90">Projects Delivered</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our <span className="bg-brand-gradient bg-clip-text text-transparent">Values</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                These core principles guide everything we do and shape how we work with our clients.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                    <div className="w-12 h-12 bg-brand-gradient rounded-lg flex items-center justify-center mb-6">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                By the Numbers
              </h2>
              <p className="text-xl text-gray-600">
                Our track record speaks for itself
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold bg-brand-gradient bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ready to Work Together?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Let's discuss how we can help bring your digital vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-brand-gradient text-white px-8 py-4 rounded-full font-semibold hover:opacity-90 transition-opacity shadow-lg hover:shadow-xl"
              >
                Get in Touch
              </Link>
              <Link
                to="/team"
                className="border-2 border-brand-800 text-brand-800 hover:bg-brand-800 hover:text-white px-8 py-4 rounded-full font-semibold transition-all duration-200"
              >
                Meet Our Team
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AboutUs;
