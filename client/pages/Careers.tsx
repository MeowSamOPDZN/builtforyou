import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MapPin, Clock, DollarSign, Users, Star, Heart } from "lucide-react";

const Careers = () => {
  const openPositions = [
    {
      id: 1,
      title: "Senior React Developer",
      department: "Engineering",
      location: "Remote / San Francisco",
      type: "Full-time",
      salary: "$120k - $160k",
      description: "Join our frontend team to build beautiful, performant web applications using React, TypeScript, and modern tooling.",
      requirements: ["5+ years React experience", "TypeScript proficiency", "Modern build tools", "Team collaboration"]
    },
    {
      id: 2,
      title: "UI/UX Designer",
      department: "Design",
      location: "Remote / San Francisco",
      type: "Full-time",
      salary: "$90k - $130k",
      description: "Create user-centered designs that delight our clients and their customers. Work closely with our development team.",
      requirements: ["3+ years UI/UX experience", "Figma expertise", "Design systems", "User research skills"]
    },
    {
      id: 3,
      title: "DevOps Engineer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      salary: "$110k - $150k",
      description: "Help us scale our infrastructure and improve deployment processes. Work with modern cloud technologies.",
      requirements: ["AWS/GCP experience", "Docker & Kubernetes", "CI/CD pipelines", "Infrastructure as Code"]
    },
    {
      id: 4,
      title: "Project Manager",
      department: "Operations",
      location: "San Francisco",
      type: "Full-time",
      salary: "$80k - $110k",
      description: "Lead client projects from conception to delivery. Coordinate between teams and ensure exceptional client experiences.",
      requirements: ["3+ years project management", "Agile methodology", "Client relations", "Technical background"]
    }
  ];

  const benefits = [
    {
      icon: Heart,
      title: "Health & Wellness",
      description: "Comprehensive health insurance, dental, vision, and wellness programs"
    },
    {
      icon: Clock,
      title: "Flexible Schedule",
      description: "Work-life balance with flexible hours and unlimited PTO policy"
    },
    {
      icon: Users,
      title: "Remote-First",
      description: "Work from anywhere with optional office access in San Francisco"
    },
    {
      icon: Star,
      title: "Growth Opportunities",
      description: "Professional development budget and conference attendance"
    },
    {
      icon: DollarSign,
      title: "Competitive Pay",
      description: "Market-rate salaries with equity options and performance bonuses"
    },
    {
      icon: MapPin,
      title: "Great Location",
      description: "Beautiful office space in downtown San Francisco (when you want it)"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Join Our <span className="bg-brand-gradient bg-clip-text text-transparent">Team</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Build the future of digital experiences with a team that values innovation, 
              collaboration, and personal growth.
            </p>
          </div>
        </section>

        {/* Why Work With Us */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why <span className="bg-brand-gradient bg-clip-text text-transparent">BuiltForYou</span>?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We believe that great work comes from great people in a great environment.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                    <div className="w-12 h-12 bg-brand-gradient rounded-lg flex items-center justify-center mb-4">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Open <span className="bg-brand-gradient bg-clip-text text-transparent">Positions</span>
              </h2>
              <p className="text-xl text-gray-600">
                Find your next opportunity with us
              </p>
            </div>

            <div className="space-y-6">
              {openPositions.map((position) => (
                <div key={position.id} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-4 mb-4">
                        <h3 className="text-2xl font-bold text-gray-900">{position.title}</h3>
                        <span className="px-3 py-1 bg-brand-100 text-brand-800 rounded-full text-sm font-medium">
                          {position.department}
                        </span>
                      </div>
                      
                      <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-4">
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-2" />
                          {position.location}
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-2" />
                          {position.type}
                        </div>
                        <div className="flex items-center">
                          <DollarSign className="h-4 w-4 mr-2" />
                          {position.salary}
                        </div>
                      </div>

                      <p className="text-gray-600 mb-4">{position.description}</p>

                      <div className="flex flex-wrap gap-2">
                        {position.requirements.map((req, index) => (
                          <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                            {req}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mt-6 lg:mt-0 lg:ml-8">
                      <button className="w-full lg:w-auto bg-brand-gradient text-white px-8 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity shadow-lg hover:shadow-xl">
                        Apply Now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Application Process */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Hiring Process
              </h2>
              <p className="text-xl text-gray-600">
                Transparent, efficient, and designed to get to know you
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-brand-gradient rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">Application</h3>
                <p className="text-gray-600">Submit your application and portfolio through our online form</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-brand-gradient rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">Initial Call</h3>
                <p className="text-gray-600">Brief conversation to discuss your experience and our opportunity</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-brand-gradient rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">Technical Interview</h3>
                <p className="text-gray-600">Skills assessment and technical discussion with our team</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-brand-gradient rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-xl">4</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">Team Meeting</h3>
                <p className="text-gray-600">Meet the team and discuss culture fit and expectations</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Don't See Your Role?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              We're always interested in hearing from talented individuals, even if we don't have a specific opening.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-brand-gradient text-white px-8 py-4 rounded-full font-semibold hover:opacity-90 transition-opacity shadow-lg hover:shadow-xl"
              >
                Send Us Your Resume
              </Link>
              <Link
                to="/team"
                className="border-2 border-brand-800 text-brand-800 hover:bg-brand-800 hover:text-white px-8 py-4 rounded-full font-semibold transition-all duration-200"
              >
                Meet the Team
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Careers;
