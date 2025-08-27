import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const UIUXDesign = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-20">
        <section className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              <span className="bg-brand-gradient bg-clip-text text-transparent">UI/UX Design</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
              User-centered design that creates meaningful connections between your brand and your customers.
            </p>
            <Link
              to="/contact"
              className="bg-brand-gradient text-white px-8 py-4 rounded-full font-semibold hover:opacity-90 transition-opacity shadow-lg hover:shadow-xl inline-block"
            >
              Start Your Design Project
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default UIUXDesign;
