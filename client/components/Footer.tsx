import {
  Mail,
  Phone,
  MapPin,
  Twitter,
  Linkedin,
  Instagram,
  Github,
  ArrowUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navigation = {
    company: [
      { name: "About Us", href: "/about" },
      { name: "Our Team", href: "/team" },
      { name: "Careers", href: "/careers" },
      { name: "Contact", href: "/contact" },
    ],
    services: [
      { name: "Web Development", href: "/services/web-development" },
      { name: "App Development", href: "/services/app-development" },
      { name: "UI/UX Design", href: "/services/ui-ux-design" },
      { name: "Branding", href: "/services/branding" },
    ],
    resources: [
      { name: "Blog", href: "/blog" },
      { name: "Case Studies", href: "/case-studies" },
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
    ],
  };

  const socialLinks = [
    { name: "Twitter", icon: Twitter, href: "https://twitter.com/builtforyou" },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://linkedin.com/company/builtforyou",
    },
    {
      name: "Instagram",
      icon: Instagram,
      href: "https://instagram.com/builtforyou",
    },
    { name: "GitHub", icon: Github, href: "https://github.com/builtforyou" },
  ];

  return (
    <footer id="contact" className="bg-gray-900 text-white relative">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h3 className="text-3xl font-bold bg-brand-gradient bg-clip-text text-transparent">
                BuiltForYou
              </h3>
              <p className="text-gray-300 mt-4 leading-relaxed">
                We build amazing websites and apps that help businesses thrive
                in the digital world. Modern, fast, and fully responsive
                solutions tailored to your needs.
              </p>
            </div>

            {/* Contact information */}
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-brand-400 mr-3" />
                <a
                  href="mailto:hello@builtforyou.com"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  hello@builtforyou.com
                </a>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-brand-400 mr-3" />
                <a
                  href="tel:+1234567890"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  +1 (234) 567-8900
                </a>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-brand-400 mr-3" />
                <span className="text-gray-300">San Francisco, CA, USA</span>
              </div>
            </div>

            {/* Social links */}
            <div className="flex space-x-4 mt-6">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-800 rounded-full hover:bg-brand-600 transition-colors duration-200 group"
                  >
                    <IconComponent className="h-5 w-5 text-gray-300 group-hover:text-white" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Navigation links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Company</h4>
            <ul className="space-y-3">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              {navigation.services.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Resources</h4>
            <ul className="space-y-3">
              {navigation.resources.map((item) => (
                <li key={item.name}>
                  <button
                    onClick={() => scrollToSection(item.href.replace("#", ""))}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter signup */}
        <div className="mt-12 pt-12 border-t border-gray-800">
          <div className="max-w-md mx-auto text-center lg:max-w-none lg:text-left lg:flex lg:items-center lg:justify-between">
            <div className="lg:flex-1">
              <h4 className="text-xl font-semibold mb-2">Stay updated</h4>
              <p className="text-gray-300">
                Get the latest updates on web development trends and our
                projects.
              </p>
            </div>
            <div className="mt-6 lg:mt-0 lg:flex-shrink-0">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-3 bg-gray-800 border border-gray-700 rounded-full text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                />
                <Button className="bg-brand-gradient text-white px-6 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 BuiltForYou. All Rights Reserved.
            </p>
            <div className="flex items-center mt-4 md:mt-0">
              <span className="text-gray-400 text-sm mr-4">
                Made with ❤️ in San Francisco
              </span>
              <Button
                onClick={scrollToTop}
                variant="ghost"
                size="sm"
                className="text-gray-400 hover:text-white"
              >
                <ArrowUp className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
