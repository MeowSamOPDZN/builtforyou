import { Check, ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const Pricing = () => {
  const pricingPlans = [
    {
      name: "Starter",
      description: "Perfect for small businesses and startups",
      price: "$2,999",
      duration: "per project",
      features: [
        "Responsive Website Design",
        "Basic SEO Optimization",
        "Contact Form Integration",
        "Social Media Integration",
        "3 Months Support",
        "Mobile Responsive",
        "Basic Analytics Setup",
      ],
      popular: false,
      cta: "Get Started",
    },
    {
      name: "Professional",
      description: "Ideal for growing businesses with advanced needs",
      price: "$7,999",
      duration: "per project",
      features: [
        "Custom Web Application",
        "Advanced SEO & Performance",
        "CMS Integration",
        "E-commerce Functionality",
        "Database Integration",
        "API Development",
        "6 Months Support",
        "Advanced Analytics",
        "Security Implementation",
      ],
      popular: true,
      cta: "Most Popular",
    },
    {
      name: "Enterprise",
      description: "For large organizations with complex requirements",
      price: "Custom",
      duration: "pricing",
      features: [
        "Full-Stack Development",
        "Custom Architecture",
        "Third-party Integrations",
        "Advanced Security",
        "Performance Optimization",
        "Dedicated Project Manager",
        "12 Months Support",
        "Staff Training",
        "24/7 Priority Support",
        "Custom Features",
      ],
      popular: false,
      cta: "Contact Us",
    },
  ];

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="pricing"
      className="py-20 bg-gradient-to-br from-gray-50 to-gray-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Ready to Build Your{" "}
            <span className="bg-brand-gradient bg-clip-text text-transparent">
              Project?
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Choose the perfect plan for your project. All plans include our
            commitment to quality and exceptional support.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${
                plan.popular ? "ring-4 ring-brand-300 scale-105" : ""
              }`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-brand-gradient text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center">
                    <Star className="h-4 w-4 mr-1" />
                    Most Popular
                  </div>
                </div>
              )}

              <div className="p-8">
                {/* Plan header */}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{plan.description}</p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-gray-900">
                      {plan.price}
                    </span>
                    <span className="text-gray-500 ml-2">{plan.duration}</span>
                  </div>
                </div>

                {/* Features list */}
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="h-5 w-5 text-brand-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA button */}
                <Button
                  onClick={scrollToContact}
                  className={`w-full py-3 rounded-full font-semibold transition-all duration-200 ${
                    plan.popular
                      ? "bg-brand-gradient text-white hover:opacity-90 shadow-lg hover:shadow-xl"
                      : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                  }`}
                >
                  {plan.cta}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA section */}
        <div className="text-center bg-white rounded-3xl p-12 shadow-lg">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Not sure which plan is right for you?
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Every project is unique. Let's discuss your specific requirements
            and create a custom solution that fits your needs and budget
            perfectly.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={scrollToContact}
              className="bg-brand-gradient text-white px-8 py-4 rounded-full font-semibold hover:opacity-90 transition-opacity shadow-lg hover:shadow-xl text-lg"
            >
              Schedule Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>

            <div className="flex items-center text-gray-600">
              <div className="flex -space-x-2 mr-3">
                <img
                  className="w-8 h-8 rounded-full border-2 border-white"
                  src="/placeholder.svg"
                  alt="Client"
                />
                <img
                  className="w-8 h-8 rounded-full border-2 border-white"
                  src="/placeholder.svg"
                  alt="Client"
                />
                <img
                  className="w-8 h-8 rounded-full border-2 border-white"
                  src="/placeholder.svg"
                  alt="Client"
                />
              </div>
              <span className="text-sm">Join 50+ happy clients</span>
            </div>
          </div>

          {/* Money back guarantee */}
          <div className="mt-8 p-4 bg-green-50 rounded-xl border border-green-200 inline-block">
            <div className="flex items-center text-green-700">
              <Check className="h-5 w-5 mr-2" />
              <span className="font-semibold">30-day money-back guarantee</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
