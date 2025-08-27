import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Code, Smartphone, Zap, Shield, Search, BarChart } from "lucide-react";

const WebDevelopment = () => {
  const features = [
    {
      icon: Code,
      title: "Modern Technologies",
      description: "React, Next.js, TypeScript, and cutting-edge frameworks for robust applications"
    },
    {
      icon: Smartphone,
      title: "Responsive Design",
      description: "Perfect performance across all devices and screen sizes"
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Optimized for speed with 95+ PageSpeed scores"
    },
    {
      icon: Shield,
      title: "Secure & Reliable",
      description: "Enterprise-grade security and 99.9% uptime guarantee"
    },
    {
      icon: Search,
      title: "SEO Optimized",
      description: "Built for search engines from day one"
    },
    {
      icon: BarChart,
      title: "Analytics Ready",
      description: "Track performance with built-in analytics integration"
    }
  ];

  const process = [
    {
      step: "1",
      title: "Discovery & Planning",
      description: "We analyze your requirements, target audience, and business goals to create a comprehensive project roadmap."
    },
    {
      step: "2", 
      title: "Design & Prototyping",
      description: "Create wireframes and interactive prototypes to visualize the user experience before development begins."
    },
    {
      step: "3",
      title: "Development",
      description: "Build your application using modern technologies with regular progress updates and client feedback loops."
    },
    {
      step: "4",
      title: "Testing & Launch",
      description: "Comprehensive testing across devices and browsers, followed by deployment and post-launch support."
    }
  ];

  const technologies = [
    "React", "Next.js", "Vue.js", "TypeScript", "Node.js", "Python", 
    "PostgreSQL", "MongoDB", "AWS", "Vercel", "Docker", "GraphQL"
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                  <span className="bg-brand-gradient bg-clip-text text-transparent">Web Development</span> That Drives Results
                </h1>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Custom web applications built with modern technologies. From simple websites 
                  to complex web platforms, we create digital experiences that engage users and grow your business.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    to="/contact"
                    className="bg-brand-gradient text-white px-8 py-4 rounded-full font-semibold hover:opacity-90 transition-opacity shadow-lg hover:shadow-xl text-center"
                  >
                    Start Your Project
                  </Link>
                  <Link
                    to="/portfolio"
                    className="border-2 border-brand-800 text-brand-800 hover:bg-brand-800 hover:text-white px-8 py-4 rounded-full font-semibold transition-all duration-200 text-center"
                  >
                    View Our Work
                  </Link>
                </div>
              </div>
              <div className="relative">
                <img
                  src="/placeholder.svg"
                  alt="Web development"
                  className="rounded-2xl shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Our <span className="bg-brand-gradient bg-clip-text text-transparent">Web Development</span>?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We combine technical expertise with strategic thinking to deliver websites that perform.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                    <div className="w-12 h-12 bg-brand-gradient rounded-lg flex items-center justify-center mb-4">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Development Process
              </h2>
              <p className="text-xl text-gray-600">
                Transparent, collaborative, and results-driven
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-brand-gradient rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-white font-bold text-xl">{step.step}</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Technologies We Use
              </h2>
              <p className="text-xl text-gray-600">
                Modern, proven technologies for reliable results
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              {technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-6 py-3 bg-gray-100 text-gray-800 rounded-full font-medium hover:bg-brand-100 hover:text-brand-800 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ready to Build Your Web Application?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Let's discuss your project and create a custom solution that meets your needs.
            </p>
            <Link
              to="/contact"
              className="bg-brand-gradient text-white px-8 py-4 rounded-full font-semibold hover:opacity-90 transition-opacity shadow-lg hover:shadow-xl inline-block"
            >
              Get Started Today
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default WebDevelopment;
