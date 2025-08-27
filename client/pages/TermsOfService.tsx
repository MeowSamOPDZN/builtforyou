import Header from "@/components/Header";
import Footer from "@/components/Footer";

const TermsOfService = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-20">
        <section className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-center">
              Terms of <span className="bg-brand-gradient bg-clip-text text-transparent">Service</span>
            </h1>
            <p className="text-lg text-gray-600 text-center mb-8">
              Last updated: January 1, 2025
            </p>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-700 mb-6">
                By accessing and using our services, you accept and agree to be bound by the terms 
                and provision of this agreement.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Services Description</h2>
              <p className="text-gray-700 mb-6">
                BuiltForYou provides web development, mobile app development, UI/UX design, 
                and branding services to businesses and individuals.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Payment Terms</h2>
              <p className="text-gray-700 mb-6">
                Payment terms will be specified in individual project agreements. 
                Late payments may result in project delays or suspension of services.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Intellectual Property</h2>
              <p className="text-gray-700 mb-6">
                Upon full payment, clients will own the final deliverables. BuiltForYou retains 
                the right to showcase completed work in our portfolio unless otherwise agreed.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Limitation of Liability</h2>
              <p className="text-gray-700 mb-6">
                BuiltForYou shall not be liable for any indirect, incidental, special, 
                consequential, or punitive damages.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Contact Information</h2>
              <p className="text-gray-700 mb-6">
                For questions about these Terms of Service, please contact us at legal@builtforyou.com.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default TermsOfService;
