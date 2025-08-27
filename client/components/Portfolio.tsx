import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "A modern e-commerce solution with advanced features like real-time inventory, payment processing, and analytics dashboard.",
      image: "/placeholder.svg",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      demoUrl: "#",
      githubUrl: "#",
      category: "Web Development",
    },
    {
      id: 2,
      title: "Mobile Banking App",
      description:
        "Secure mobile banking application with biometric authentication, transaction tracking, and budget management features.",
      image: "/placeholder.svg",
      tags: ["React Native", "Firebase", "JWT", "Plaid API"],
      demoUrl: "#",
      githubUrl: "#",
      category: "Mobile App",
    },
    {
      id: 3,
      title: "SaaS Dashboard",
      description:
        "Comprehensive analytics dashboard for SaaS businesses with real-time metrics, user management, and reporting tools.",
      image: "/placeholder.svg",
      tags: ["Next.js", "PostgreSQL", "Chart.js", "Tailwind"],
      demoUrl: "#",
      githubUrl: "#",
      category: "Web Development",
    },
    {
      id: 4,
      title: "Healthcare Platform",
      description:
        "Patient management system with appointment scheduling, medical records, and telemedicine capabilities.",
      image: "/placeholder.svg",
      tags: ["Vue.js", "Express", "MySQL", "WebRTC"],
      demoUrl: "#",
      githubUrl: "#",
      category: "Web Development",
    },
    {
      id: 5,
      title: "Social Media App",
      description:
        "Instagram-like social media platform with photo sharing, stories, messaging, and social features.",
      image: "/placeholder.svg",
      tags: ["Flutter", "Node.js", "Socket.io", "Cloudinary"],
      demoUrl: "#",
      githubUrl: "#",
      category: "Mobile App",
    },
    {
      id: 6,
      title: "Brand Identity System",
      description:
        "Complete brand redesign for a tech startup including logo, color palette, typography, and brand guidelines.",
      image: "/placeholder.svg",
      tags: ["Figma", "Adobe CC", "Brand Strategy", "Style Guide"],
      demoUrl: "#",
      githubUrl: "#",
      category: "Design",
    },
  ];

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Our{" "}
            <span className="bg-brand-gradient bg-clip-text text-transparent">
              Portfolio
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Take a look at some of our recent projects and see how we've helped
            businesses achieve their digital goals.
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Project image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-brand-gradient opacity-0 group-hover:opacity-80 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex space-x-4">
                    <a
                      href={project.demoUrl}
                      className="p-3 bg-white rounded-full text-brand-800 hover:bg-gray-100 transition-colors duration-200"
                    >
                      <ExternalLink className="h-5 w-5" />
                    </a>
                    <a
                      href={project.githubUrl}
                      className="p-3 bg-white rounded-full text-brand-800 hover:bg-gray-100 transition-colors duration-200"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Project content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-semibold text-brand-600 bg-brand-50 px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-brand-800 transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech stack tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <p className="text-gray-600 mb-6">
            Want to see more? Check out our complete portfolio or start your own
            project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="outline"
              className="border-2 border-brand-800 text-brand-800 hover:bg-brand-800 hover:text-white px-8 py-3 rounded-full font-semibold transition-all duration-200"
            >
              View All Projects
            </Button>
            <Button
              onClick={() => {
                const element = document.getElementById("contact");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-brand-gradient text-white px-8 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity shadow-lg hover:shadow-xl"
            >
              Start Your Project
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
