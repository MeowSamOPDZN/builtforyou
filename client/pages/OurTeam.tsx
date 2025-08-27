import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Github, Linkedin, Twitter, Mail, X } from "lucide-react";

const OurTeam = () => {
  const [showLinkedInPopup, setShowLinkedInPopup] = useState(false);

  const handleLinkedInClick = (linkedin: string) => {
    if (linkedin === "coming-soon") {
      setShowLinkedInPopup(true);
    } else {
      window.open(linkedin, "_blank");
    }
  };

  const team = [
    {
      id: 1,
      name: "Sam Spyder",
      role: "Owner & Founder",
      bio: "Full-stack developer with 8+ years experience. Passionate about building scalable solutions and leading high-performing teams.",
      image: "https://cdn.builder.io/api/v1/image/assets%2Fe235f98268d04b1f97d8e725ccc682c6%2F21f4656d6e414e8a86576910915a3b73?format=webp&width=800",
      skills: ["Full Stack Developer", "UI/UX Design", "Game Developer"],
      social: {
        linkedin: "coming-soon",
        twitter: "https://x.com/MeowSamOPDesign",
        github: "https://github.com/MeowSamOPDZN/",
        email: "/sam-spyder-mail"
      }
    },
    {
      id: 2,
      name: "Sarah Chen",
      role: "Lead Designer",
      bio: "UX/UI designer with a keen eye for user-centered design. Specializes in creating beautiful, intuitive digital experiences.",
      image: "/placeholder.svg",
      skills: ["UI/UX Design", "User Research", "Design Systems"],
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#",
        email: "sarah@builtforyou.com"
      }
    },
    {
      id: 3,
      name: "Marcus Rodriguez",
      role: "Senior Developer",
      bio: "Frontend specialist with expertise in React, Vue, and modern JavaScript frameworks. Loves building performant web applications.",
      image: "/placeholder.svg",
      skills: ["React", "Vue.js", "TypeScript", "Performance Optimization"],
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#",
        email: "marcus@builtforyou.com"
      }
    },
    {
      id: 4,
      name: "Emily Watson",
      role: "Mobile Developer",
      bio: "Mobile development expert with experience in React Native and Flutter. Passionate about creating seamless mobile experiences.",
      image: "/placeholder.svg",
      skills: ["React Native", "Flutter", "iOS", "Android"],
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#",
        email: "emily@builtforyou.com"
      }
    },
    {
      id: 5,
      name: "David Kim",
      role: "Backend Engineer",
      bio: "Backend specialist focused on scalable architecture, APIs, and database optimization. Ensures our applications run smoothly at scale.",
      image: "/placeholder.svg",
      skills: ["Node.js", "Python", "AWS", "Database Design"],
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#",
        email: "david@builtforyou.com"
      }
    },
    {
      id: 6,
      name: "Lisa Thompson",
      role: "Project Manager",
      bio: "Experienced project manager who ensures projects are delivered on time and within budget. Expert in agile methodologies.",
      image: "/placeholder.svg",
      skills: ["Project Management", "Agile", "Client Relations", "Process Optimization"],
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#",
        email: "lisa@builtforyou.com"
      }
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
              Meet Our <span className="bg-brand-gradient bg-clip-text text-transparent">Team</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              The talented individuals behind BuiltForYou. Each team member brings unique skills 
              and expertise to deliver exceptional results for our clients.
            </p>
          </div>
        </section>

        {/* Team Grid */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {team.map((member) => (
                <div key={member.id} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
                  {/* Member Image */}
                  <div className="relative overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute inset-0 bg-brand-gradient opacity-0 hover:opacity-80 transition-opacity duration-300 flex items-center justify-center">
                      <div className="flex space-x-4">
                        <a
                          href={member.social.linkedin}
                          className="p-3 bg-white rounded-full text-brand-800 hover:bg-gray-100 transition-colors duration-200"
                        >
                          <Linkedin className="h-5 w-5" />
                        </a>
                        <a
                          href={member.social.twitter}
                          className="p-3 bg-white rounded-full text-brand-800 hover:bg-gray-100 transition-colors duration-200"
                        >
                          <Twitter className="h-5 w-5" />
                        </a>
                        <a
                          href={member.social.github}
                          className="p-3 bg-white rounded-full text-brand-800 hover:bg-gray-100 transition-colors duration-200"
                        >
                          <Github className="h-5 w-5" />
                        </a>
                        <a
                          href={`mailto:${member.social.email}`}
                          className="p-3 bg-white rounded-full text-brand-800 hover:bg-gray-100 transition-colors duration-200"
                        >
                          <Mail className="h-5 w-5" />
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Member Info */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                    <p className="text-brand-600 font-semibold mb-4">{member.role}</p>
                    <p className="text-gray-600 mb-6 leading-relaxed">{member.bio}</p>
                    
                    {/* Skills */}
                    <div className="flex flex-wrap gap-2">
                      {member.skills.map((skill, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-brand-50 text-brand-700 text-sm rounded-full font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Culture Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our <span className="bg-brand-gradient bg-clip-text text-transparent">Culture</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We believe in fostering an environment where creativity, collaboration, and continuous learning thrive.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-brand-gradient rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Innovation First</h3>
                <p className="text-gray-600">
                  We encourage experimentation with new technologies and approaches to stay ahead of the curve.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-brand-gradient rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">🤝</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Collaborative Spirit</h3>
                <p className="text-gray-600">
                  Our best work comes from diverse perspectives and open communication across all team members.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-brand-gradient rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">📚</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Continuous Learning</h3>
                <p className="text-gray-600">
                  We invest in our team's growth through training, conferences, and learning opportunities.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Join Us CTA */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Want to Join Our Team?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              We're always looking for talented individuals who share our passion for building amazing digital experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/careers"
                className="bg-brand-gradient text-white px-8 py-4 rounded-full font-semibold hover:opacity-90 transition-opacity shadow-lg hover:shadow-xl"
              >
                View Open Positions
              </Link>
              <Link
                to="/contact"
                className="border-2 border-brand-800 text-brand-800 hover:bg-brand-800 hover:text-white px-8 py-4 rounded-full font-semibold transition-all duration-200"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default OurTeam;
