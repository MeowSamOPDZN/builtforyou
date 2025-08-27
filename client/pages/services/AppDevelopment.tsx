import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Smartphone, Zap, Users, Globe, Star, Lock } from "lucide-react";

const AppDevelopment = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-20">
        <section className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              <span className="bg-brand-gradient bg-clip-text text-transparent">Mobile App Development</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
              Native and cross-platform mobile applications that deliver exceptional user experiences across iOS and Android devices.
            </p>
            <Link
              to="/contact"
              className="bg-brand-gradient text-white px-8 py-4 rounded-full font-semibold hover:opacity-90 transition-opacity shadow-lg hover:shadow-xl inline-block"
            >
              Start Your App Project
            </Link>
          </div>
        </section>
        
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                App Development Services
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: Smartphone, title: "React Native Development", desc: "Cross-platform apps with native performance" },
                { icon: Zap, title: "Flutter Development", desc: "Beautiful, fast apps for any platform" },
                { icon: Users, title: "UI/UX Design", desc: "User-centered design for mobile interfaces" },
                { icon: Globe, title: "Backend Integration", desc: "Seamless API integration and data management" },
                { icon: Star, title: "App Store Publishing", desc: "Full support for iOS and Android store submission" },
                { icon: Lock, title: "Security & Performance", desc: "Secure, optimized apps that scale" }
              ].map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                    <IconComponent className="h-8 w-8 text-brand-600 mb-4" />
                    <h3 className="text-lg font-bold text-gray-900 mb-3">{service.title}</h3>
                    <p className="text-gray-600">{service.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AppDevelopment;
