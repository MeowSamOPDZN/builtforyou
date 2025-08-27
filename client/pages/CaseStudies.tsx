import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ExternalLink, ArrowRight } from "lucide-react";

const CaseStudies = () => {
  const caseStudies = [
    {
      id: 1,
      title: "E-Commerce Platform Redesign",
      client: "TechStart Inc.",
      category: "Web Development",
      description: "Complete redesign and development of an e-commerce platform that increased conversion rates by 300%.",
      image: "/placeholder.svg",
      results: ["300% increase in conversions", "50% faster page load times", "40% increase in mobile traffic"],
      tags: ["React", "Node.js", "Stripe"]
    },
    {
      id: 2,
      title: "Mobile Banking App",
      client: "FinanceFlow",
      category: "Mobile Development",
      description: "Secure mobile banking application with biometric authentication and real-time notifications.",
      image: "/placeholder.svg",
      results: ["1M+ downloads in first year", "4.8 star rating", "Zero security incidents"],
      tags: ["React Native", "Firebase", "Plaid API"]
    },
    {
      id: 3,
      title: "Healthcare Platform",
      client: "MedConnect",
      category: "Web Development",
      description: "Patient management system with telemedicine capabilities and HIPAA compliance.",
      image: "/placeholder.svg",
      results: ["50% reduction in wait times", "95% patient satisfaction", "HIPAA compliant"],
      tags: ["Vue.js", "WebRTC", "PostgreSQL"]
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-20">
        <section className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Case <span className="bg-brand-gradient bg-clip-text text-transparent">Studies</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Real projects, real results. See how we've helped businesses achieve their digital goals.
            </p>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-16">
              {caseStudies.map((study, index) => (
                <div key={study.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-row-dense' : ''}`}>
                  <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                    <span className="text-sm font-semibold text-brand-600 bg-brand-50 px-3 py-1 rounded-full">
                      {study.category}
                    </span>
                    <h2 className="text-3xl font-bold text-gray-900 mt-4 mb-4">
                      {study.title}
                    </h2>
                    <p className="text-lg text-gray-600 mb-6">
                      {study.description}
                    </p>
                    
                    <div className="mb-6">
                      <h3 className="font-bold text-gray-900 mb-3">Key Results:</h3>
                      <ul className="space-y-2">
                        {study.results.map((result, idx) => (
                          <li key={idx} className="flex items-center text-gray-700">
                            <div className="w-2 h-2 bg-brand-500 rounded-full mr-3"></div>
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {study.tags.map((tag, idx) => (
                        <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <button className="flex items-center bg-brand-gradient text-white px-6 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity">
                      View Full Case Study
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </button>
                  </div>
                  
                  <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                    <img
                      src={study.image}
                      alt={study.title}
                      className="rounded-2xl shadow-xl"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CaseStudies;
