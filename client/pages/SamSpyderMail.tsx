import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Mail, Copy, Check, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const SamSpyderMail = () => {
  const [copied, setCopied] = useState(false);
  const email = "samspyder.bfy@gmail.com";

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy email:", err);
    }
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-20">
        <section className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Back button */}
            <div className="mb-8">
              <Link
                to="/team"
                className="inline-flex items-center text-brand-600 hover:text-brand-800 transition-colors"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Team
              </Link>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center">
              {/* Profile Image */}
              <div className="w-32 h-32 mx-auto mb-8">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2Fe235f98268d04b1f97d8e725ccc682c6%2F21f4656d6e414e8a86576910915a3b73?format=webp&width=800"
                  alt="Sam Spyder"
                  className="w-full h-full rounded-full object-cover shadow-lg border-4 border-brand-200"
                />
              </div>

              {/* Header */}
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                <span className="bg-brand-gradient bg-clip-text text-transparent">Sam Spyder's</span> Mail
              </h1>
              
              <p className="text-xl text-gray-600 mb-8">
                Owner & Founder at BuiltForYou
              </p>

              {/* Email Section */}
              <div className="bg-gray-50 rounded-xl p-8 mb-8">
                <div className="flex items-center justify-center mb-6">
                  <Mail className="h-8 w-8 text-brand-600 mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900">Email Address</h2>
                </div>
                
                <div className="bg-white rounded-lg p-4 border-2 border-gray-200 mb-6">
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-mono text-gray-800 select-all">
                      {email}
                    </span>
                    <Button
                      onClick={copyToClipboard}
                      className={`ml-4 px-4 py-2 rounded-lg font-semibold transition-all duration-200 ${
                        copied
                          ? "bg-green-600 text-white"
                          : "bg-brand-gradient text-white hover:opacity-90"
                      }`}
                    >
                      {copied ? (
                        <>
                          <Check className="h-4 w-4 mr-2" />
                          Copied!
                        </>
                      ) : (
                        <>
                          <Copy className="h-4 w-4 mr-2" />
                          Copy
                        </>
                      )}
                    </Button>
                  </div>
                </div>

                <p className="text-gray-600">
                  Click the copy button above to copy my email address to your clipboard.
                </p>
              </div>

              {/* Additional Info */}
              <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                <h3 className="font-bold text-blue-900 mb-2">📧 Contact Information</h3>
                <p className="text-blue-800 text-sm">
                  Feel free to reach out for project inquiries, collaborations, or just to say hello! 
                  I usually respond within 24 hours.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={`mailto:${email}`}
                  className="bg-brand-gradient text-white px-8 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity shadow-lg hover:shadow-xl"
                >
                  Open Email Client
                </a>
                <Link
                  to="/contact"
                  className="border-2 border-brand-800 text-brand-800 hover:bg-brand-800 hover:text-white px-8 py-3 rounded-full font-semibold transition-all duration-200"
                >
                  Contact Form
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default SamSpyderMail;
